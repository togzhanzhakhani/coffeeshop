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


@api_view(['GET'])
def list_of_commentaries_of_a_product(request, id):
    try:
        product = Product.objects.get(id=id)
    except Product.DoesNotExist as e:
        return Response({"error" : str(e)}, status=status.HTTP_400_BAD_REQUEST)

    if request.method == 'GET':
        commentaries =product.comments.all()
        serializer = CommentSerializer(commentaries, many=True)
        return Response(serializer.data)

