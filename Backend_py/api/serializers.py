from rest_framework import serializers
from .models import *

from django.contrib.auth.models import User


class TypeSerializer(serializers.ModelSerializer):

    class Meta:
        model = Type
        fields = '__all__'
        read_only_fields ='__all__'


class SortSerializer(serializers.ModelSerializer):

    class Meta:
        model = Sort
        fields = '__all__'
        read_only_fields ='__all__'


class CategorySerializer(serializers.ModelSerializer):
    type = TypeSerializer
    sort = SortSerializer
    class Meta:
        model = Category
        fields = ('type', 'sort')
        read_only_fields = '__all__'

class ProductSerializer(serializers.ModelSerializer):
    category = CategorySerializer

    class Meta:
        model = Product
        fields = '__all__'
