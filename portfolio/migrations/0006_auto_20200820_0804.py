# Generated by Django 3.1 on 2020-08-20 08:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio', '0005_auto_20200820_0800'),
    ]

    operations = [
        migrations.AlterField(
            model_name='education',
            name='gpa',
            field=models.DecimalField(decimal_places=2, max_digits=3),
        ),
    ]
