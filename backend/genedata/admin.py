from django.contrib import admin
from import_export.admin import ImportExportModelAdmin
from .models import pub_Gene
from .models import Gene

class geneAdmin(ImportExportModelAdmin, admin.ModelAdmin):
    #list_display = ('category', 'mentioned_by', 'full_name', 'entrez_gene', 'phe_gen_I', 'variation_viewer', 'clin_var', 'gene_cards', 'db_snp', 'diseases', 'sadr', 'huge_nav', 'wikipedia', 'google', 'gopubmed', 'evs', 'he_fal_mp', 'my_gene_2', 'twenty_three_and_me', 'unit_prot', 'omim', 'no_of_snps')
    list_display=('gene', 'environment', 'title', 'abstract', 'pubmed_id','pubmed_url')
# Register your models here.

class GenesAdmin(ImportExportModelAdmin, admin.ModelAdmin):
    list_display=('gene','gene_link','full_name','diseases','diseases_link')

admin.site.register(pub_Gene, geneAdmin)
admin.site.register(Gene, GenesAdmin)

