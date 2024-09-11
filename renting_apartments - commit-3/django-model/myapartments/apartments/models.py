from django.db import models

# Create your models here.
class Apartment(models.Model):
    address = models.CharField(max_length=255, blank=True, null=True)
    image_url = models.URLField(max_length=255, blank=True, null=True)
    button_text = models.CharField(max_length=255, blank=True, null=True)