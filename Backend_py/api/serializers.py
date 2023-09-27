from rest_framework import serializers
from .models import *

from django.contrib.auth.models import User


class TypeSerializer(serializers.ModelSerializer):

    class Meta:
        model = Type
        fields = ('type',)
        read_only_fields =('__all__',)


class SortSerializer(serializers.ModelSerializer):

    class Meta:
        model = Sort
        fields = ('sort', )
        read_only_fields =('__all__',)


class CategorySerializer(serializers.ModelSerializer):
    type = TypeSerializer()
    sort = SortSerializer()
    class Meta:
        model = Category
        fields = ('type', 'sort')


class ProductSerializer(serializers.ModelSerializer):
    category = CategorySerializer()

    class Meta:
        model = Product
        fields = ('id', 'name', 'category', 'price', 'description', 'count', 'image_url', 'url')
