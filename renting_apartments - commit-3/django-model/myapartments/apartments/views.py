from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response

from rest_framework import viewsets
from .models import Apartment
from .serializers import ApartmentSerializer
# Create your views here.
class ApartmentViewSet(viewsets.ModelViewSet):
    queryset = Apartment.objects.all()
    serializer_class = ApartmentSerializer

# class ApartmentDetail(APIView):
#     def get(self, request, pk, format = None):
#         print("Get worked!")
#         try:
#             apartment = Apartment.objects.get(pk = pk)
#         except Apartment.DoesNotExist:
#             return Response(status = status.HTTP_404_NOT_FOUND)
        
#         serializer = ApartmentSerializer(apartment)
#         return Response(serializer.data)
        
#     def put(self, request, pk, format = None):
#         print('Request data:', request.data)
#         try:
#             apartment = Apartment.objects.get(pk = pk)
#         except Apartment.DoesNotExist:
#             return Response(status = status.HTTP_404_NOT_FOUND)
        
#         print('Current data', apartment)
#         serializer = ApartmentSerializer(apartment, data=request.data, partial = True)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data)
#         print('Errors:', serializer.errors)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
        

