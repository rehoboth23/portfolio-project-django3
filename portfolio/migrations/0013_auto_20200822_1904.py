# Generated by Django 3.1 on 2020-08-22 19:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio', '0012_education_location'),
    ]

    operations = [
        migrations.AlterField(
            model_name='education',
            name='location',
            field=models.CharField(max_length=250),
        ),
    ]