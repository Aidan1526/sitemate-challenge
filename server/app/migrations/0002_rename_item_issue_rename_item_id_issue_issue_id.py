# Generated by Django 5.0.6 on 2024-06-22 00:25

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0001_initial'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Item',
            new_name='Issue',
        ),
        migrations.RenameField(
            model_name='issue',
            old_name='item_id',
            new_name='issue_id',
        ),
    ]