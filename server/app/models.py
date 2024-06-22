from django.db import models

# Create your models here.
class Item(models.Model):
    item_id = models.CharField(max_length=10)
    title = models.CharField(max_length=30)
    description = models.CharField(max_length=99)