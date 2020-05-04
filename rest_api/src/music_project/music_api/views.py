from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response

from . import models
from . import serializers
from . import permissions

# Create your views here.
class UserViewSet(viewsets.ModelViewSet):
    '''Handles creating, reading and updating user profiles'''

    queryset = models.UserProfile.objects.all()
    serializer_class = serializers.UserSerializer
    permission_classes = [
        permissions.APIPermissionClassFactory(
            name='UserPermissions',
            permission_configuration={
                'base': {
                    'create': True,
                    'list': True,
                    'update': False,
                    'partial_update': False,
                },
                'instance': {
                    'retrieve': True,
                    'destroy': True,
                    'update': False,
                }
            }
        )
    ]