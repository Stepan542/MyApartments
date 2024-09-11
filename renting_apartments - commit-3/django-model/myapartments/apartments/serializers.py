from rest_framework import serializers
from .models import Apartment

class ApartmentSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Apartment
        fields = ['id', 'address', 'image_url', 'button_text']
        extra_kwargs = {
            'address' : { 'required' : False },
            'image_url' : { 'required' : False }, 
            'button_text' : { 'required' : False }, 
        }