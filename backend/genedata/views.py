from django.shortcuts import render
from rest_framework import viewsets
from .serializers import GeneSerializer
from .models import pub_Gene

# Create your views here.

class GeneView(viewsets.ModelViewSet):
    serializer_class = GeneSerializer
    queryset = pub_Gene.objects.all()
