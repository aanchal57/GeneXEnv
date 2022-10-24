from rest_framework import serializers
from .models import Gene

class GeneSerializer(serializers.ModelSerializer):
    class Meta:
        model = Gene
        fields = ('id', 'category', 'mentioned_by', 'full_name', 'entrez_gene', 'phe_gen_I', 'variation_viewer', 'clin_var', 'gene_cards', 'db_snp', 'diseases', 'sadr', 'huge_nav', 'wikipedia', 'google', 'gopubmed', 'evs', 'he_fal_mp', 'my_gene_2', 'twenty_three_and_me', 'unit_prot', 'omim', 'no_of_snps')