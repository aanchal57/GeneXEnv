from django.db import models

# Create your models here.

class Gene(models.Model):

    category = models.CharField(max_length=120)
    mentioned_by = models.CharField(max_length=120)
    full_name = models.CharField(max_length=120)
    entrez_gene = models.CharField(max_length=120)
    phe_gen_I = models.CharField(max_length=120)
    variation_viewer = models.CharField(max_length=120)
    clin_var = models.CharField(max_length=120)
    gene_cards = models.CharField(max_length=120)
    db_snp = models.CharField(max_length=120)
    diseases = models.CharField(max_length=120)
    sadr = models.CharField(max_length=120)
    huge_nav = models.CharField(max_length=120)
    wikipedia = models.CharField(max_length=120)
    google = models.CharField(max_length=120)
    gopubmed = models.CharField(max_length=120)
    evs = models.CharField(max_length=120)
    he_fal_mp = models.CharField(max_length=120)
    my_gene_2 = models.CharField(max_length=120)
    twenty_three_and_me = models.CharField(max_length=120)
    unit_prot = models.CharField(max_length=120)
    omim = models.CharField(max_length=120)
    no_of_snps = models.IntegerField()

    def _str_(self):
        return self.category
