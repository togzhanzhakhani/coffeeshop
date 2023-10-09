from django.urls import path, include
from api.views import *
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
urlpatterns = [
    path('product/<int:id>/commentaries/', comments_by_product, name='comments by product'),
    path('products/', list_of_products, name = "GET products"),


    path('types/', list_of_types, name = "Get types"),
    path('sorts/', list_of_sorts, name = 'GET sorts'),
    path('product/<int:id>/ratings/', product_rating, name = "GET, POST ratings of product"),

    path('user/login/', TokenObtainPairView.as_view(), name='token_obtain_pair_login'),
    path('user/register/', UserCreateView.as_view(), name='register_user'),
    path('user/<str:username>/', find_userId_by_username, name='info about user')
]