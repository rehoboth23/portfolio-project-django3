# Generated by Django 3.1 on 2020-08-25 01:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio', '0017_auto_20200825_0122'),
    ]

    operations = [
        migrations.AlterField(
            model_name='education',
            name='logo',
            field=models.ImageField(upload_to='portfolio/logo'),
        ),
        migrations.AlterField(
            model_name='experience',
            name='logo',
            field=models.ImageField(null=True, upload_to='portfolio/logo'),
        ),
        migrations.AlterField(
            model_name='project',
            name='image',
            field=models.ImageField(upload_to='portfolio/logo'),
        ),
    ]