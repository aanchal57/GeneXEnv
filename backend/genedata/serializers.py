from rest_framework import serializers
from .models import pub_Gene

class GeneSerializer(serializers.ModelSerializer):
    class Meta:
        model = pub_Gene
        #fields = ('id', 'category', 'mentioned_by', 'full_name', 'entrez_gene', 'phe_gen_I', 'variation_viewer', 'clin_var', 'gene_cards', 'db_snp', 'diseases', 'sadr', 'huge_nav', 'wikipedia', 'google', 'gopubmed', 'evs', 'he_fal_mp', 'my_gene_2', 'twenty_three_and_me', 'unit_prot', 'omim', 'no_of_snps')
        fields=('full_name','title','pubmed_id','keyword','pubmed_url')
