# Generated by Django 3.2.8 on 2021-10-24 00:21

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('forms', '0003_dependency'),
    ]

    operations = [
        migrations.AddField(
            model_name='dependency',
            name='dependancy',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, related_name='dependency', to='forms.field'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='dependency',
            name='field',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='field', to='forms.field'),
        ),
    ]
