# Generated by Django 2.0.6 on 2018-06-06 05:23

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('images', '0003_auto_20180606_1034'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='image',
            options={'ordering': ['-created_at']},
        ),
    ]
