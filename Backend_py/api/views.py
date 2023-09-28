from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .serializers import *
from .models import *
# Create your views here.


@api_view(['GET'])
def list_of_products(request):
    if request.method == 'GET':
        product = Product.objects.all()
        serializer = ProductSerializer(product, many=True)
        return Response(serializer.data)


@api_view(['GET'])
def list_of_types(request):
    if request.method == 'GET':
        type = Type.objects.all()
        serializer = TypeSerializer(type, many=True)
        return Response(serializer.data)


@api_view(['GET'])
def list_of_sorts(request):
    if request.method == 'GET':
        sort = Sort.objects.all()
        serializer = SortSerializer(sort, many=True)
        return Response(serializer.data)






