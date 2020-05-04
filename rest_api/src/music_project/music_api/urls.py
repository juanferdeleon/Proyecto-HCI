from django.urls import path
from django.urls import include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()

router.register('register', views.UserViewSet)

#TODO add path
urlpatterns = [
    path(r'', include(router.urls))
]