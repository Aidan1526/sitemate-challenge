from django.db import models

# Create your models here.
class Issue(models.Model):
    issue_id = models.CharField(max_length=10)
    title = models.CharField(max_length=30)
    description = models.CharField(max_length=99)