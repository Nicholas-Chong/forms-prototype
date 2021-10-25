from django.contrib import admin
from .models import Form, Field, Response, Respondant, FieldType

admin.site.register(Form)
admin.site.register(Field)
admin.site.register(Response)
admin.site.register(Respondant)
admin.site.register(FieldType)
