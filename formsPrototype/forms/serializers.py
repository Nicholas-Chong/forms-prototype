from rest_framework import serializers
from .models import Form, Field, FieldType, Response, Dependency

class DependencySerializer(serializers.ModelSerializer):
    class Meta:
        model = Dependency
        fields = ["dependency"]


class FieldSerializer(serializers.ModelSerializer):
    dependencies = DependencySerializer(many=True, read_only=False)
    type_of = serializers.SlugRelatedField(
        slug_field="name", 
        read_only=False, 
        queryset=FieldType.objects.all()
    )

    class Meta:
        model = Field
        exclude = ["form"]


class FormSerializer(serializers.ModelSerializer):
    prompts = FieldSerializer(many=True, read_only=False)

    def create(self, validated_data):
        ModelClass = self.Meta.model

        fields = validated_data.pop("prompts")
        form = ModelClass._default_manager.create(**validated_data)

        for prompt in fields:
            print(prompt)
            dependncies = prompt.pop("dependencies")

            new_field = Field(**prompt, form=form)
            new_field.save()

            for dependency in dependncies:
                Dependency(**dependency, field=new_field).save()
                
        return form
    
    class Meta:
        model = Form
        fields = "__all__"


class ResponseSerializer(serializers.ModelSerializer):

    class Meta:
        model = Response
        fields = "__all__"