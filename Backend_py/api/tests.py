from django.test import TestCase
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APIClient
from .models import Product, Type, Sort, Category
from .serializers import ProductSerializer

class ProductTests(TestCase):
    def setUp(self):
        type_obj = Type.objects.create(type='Some Type')
        sort_obj = Sort.objects.create(sort='Some Sort')
        category_obj = Category.objects.create(type=type_obj, sort=sort_obj)
        self.product_data = {
            'name': 'Test Product',
            'description': 'Test Description',
            'price': 10.99,
            'image_url': 'https://example.com/image.jpg',
            'url': 'https://example.com/product/test',
            'count': 5,
            'category': category_obj,
        }
        self.product = Product.objects.create(**self.product_data)

    def test_list_of_products(self):
        url = reverse('GET products')  
        response = self.client.get(url)
        products = Product.objects.all()
        serializer = ProductSerializer(products, many=True)
        self.assertEqual(response.data, serializer.data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_get_the_product(self):
        url = reverse('GET one product', args=[self.product.id]) 
        response = self.client.get(url)
        serializer = ProductSerializer(self.product)
        self.assertEqual(response.data, serializer.data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
