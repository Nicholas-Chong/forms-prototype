from django.db import models

# Create your models here.

class Form(models.Model):
    name = models.CharField(max_length=50)
    creator = models.CharField(max_length=50)


class FieldType(models.Model):
    name = models.CharField(max_length=30)

    def __str__(self):
        return self.name


class Dependency(models.Model):
    field = models.ForeignKey("Field", on_delete=models.CASCADE, related_name="field")
    dependancy = models.ForeignKey("Field", on_delete=models.CASCADE, related_name="dependencies")


class Field(models.Model):
    form = models.ForeignKey(Form, related_name="prompts", on_delete=models.CASCADE)
    type_of = models.ForeignKey(FieldType, on_delete=models.CASCADE)
    is_required = models.BooleanField(default=False)
    prompt = models.CharField(max_length=400)
    

class Respondant(models.Model):
    date_responded = models.DateTimeField()


class Response(models.Model):
    form = models.ForeignKey(Form, on_delete=models.CASCADE)
    respondant = models.ForeignKey(Respondant, on_delete=models.CASCADE)
    field = models.ForeignKey(Field, on_delete=models.CASCADE)
    response = models.CharField(max_length=500, blank=True)
