# Generated by Django 3.1 on 2020-08-25 02:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio', '0021_auto_20200825_0236'),
    ]

    operations = [
        migrations.AlterField(
            model_name='project',
            name='image',
            field=models.ImageField(upload_to='project/logo'),
        ),
    ]
