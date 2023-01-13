from rest_framework import serializers
from .models import pub_Gene
from .models import Gene

class GeneSerializer(serializers.ModelSerializer):
    class Meta:
        model = pub_Gene
        #fields = ('id', 'category', 'mentioned_by', 'full_name', 'entrez_gene', 'phe_gen_I', 'variation_viewer', 'clin_var', 'gene_cards', 'db_snp', 'diseases', 'sadr', 'huge_nav', 'wikipedia', 'google', 'gopubmed', 'evs', 'he_fal_mp', 'my_gene_2', 'twenty_three_and_me', 'unit_prot', 'omim', 'no_of_snps')
        fields=('gene', 'environment', 'title', 'abstract', 'pubmed_id','pubmed_url')

class GenesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Gene
        fields=('gene','gene_link','full_name','diseases','diseases_link')
