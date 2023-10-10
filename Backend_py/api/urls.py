from django.urls import path, include
from api.views import *
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
urlpatterns = [
    path('product/<int:id>/commentaries/', comments_by_product, name='GET, comments by product'),
    path('products/', list_of_products, name = "GET products"),
    path('product/<int:id>/ratings/', product_ratings, name = "GET, PUT ratings for product"),



    path('types/', list_of_types, name = "GET types"),
    path('sorts/', list_of_sorts, name = 'GET sorts'),

    path('user/<int:userId>/commentaries/<int:productId>/', comment_the_product_by_user, name = 'POST commentaries for user'),
    path('user/login/', TokenObtainPairView.as_view(), name='token_obtain_pair_login'),
    path('user/register/', UserCreateView.as_view(), name='register_user'),
    path('user/<str:username>/', find_user_by_username, name='GET, info about user')
]