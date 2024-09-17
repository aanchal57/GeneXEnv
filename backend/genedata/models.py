from django.db import models

# Create your models here.

class pub_Gene(models.Model):
    gene = models.CharField(max_length=120, default='gene')
    environment = models.CharField(max_length=120)
    title = models.CharField(max_length=120)
    abstract=models.CharField(max_length=120)
    pubmed_id=models.IntegerField()
    pubmed_url=models.URLField(max_length=200)

    def _str_(self):   
        return self.category


class Gene(models.Model):
    gene = models.CharField(max_length=120)
    gene_link = models.URLField(max_length=200)
    full_name = models.CharField(max_length=120, null=True)
    diseases=models.CharField(max_length=120, null=True)
    diseases_link=models.URLField(max_length=200, null=True)
    no_of_snps = models.IntegerField(default=-1)

    def _str_(self):   
        return self.category
