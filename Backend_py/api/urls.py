from django.urls import path, include
from api.views import *

urlpatterns = [
    path('products/', list_of_products, name = "GET products"),
    path('types/', list_of_types, name = "Get types"),
    path('sorts/', list_of_sorts, name = 'GET sorts')
]