# Generated by Django 3.1 on 2020-08-20 08:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio', '0007_auto_20200820_0807'),
    ]

    operations = [
        migrations.AlterField(
            model_name='experience',
            name='end',
            field=models.DateField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='experience',
            name='role_description',
            field=models.TextField(),
        ),
    ]
