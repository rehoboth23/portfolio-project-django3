# Generated by Django 3.1 on 2020-08-21 07:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio', '0010_activity_position'),
    ]

    operations = [
        migrations.AddField(
            model_name='activity',
            name='role_desc',
            field=models.TextField(blank=True, null=True),
        ),
    ]
