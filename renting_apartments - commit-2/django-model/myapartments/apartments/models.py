from django.db import models

# Create your models here.
class Apartment(models.Model):
    address = models.CharField(max_length=255)
    image_url = models.URLField()
    button_text = models.CharField(max_length=100)