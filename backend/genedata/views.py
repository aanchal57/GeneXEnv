from django.shortcuts import render
from rest_framework import viewsets
from .serializers import GeneSerializer
from .serializers import GenesSerializer
from .models import pub_Gene
from .models import Gene

# Create your views here.

class GeneView(viewsets.ModelViewSet):
    serializer_class = GeneSerializer
    queryset = pub_Gene.objects.all()

class GenesView(viewsets.ModelViewSet):
    serializer_class = GenesSerializer
    queryset = Gene.objects.all()
