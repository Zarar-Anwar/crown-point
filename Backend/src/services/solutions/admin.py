from django.contrib import admin
from .models import IndustrySolution


@admin.register(IndustrySolution)
class IndustrySolutionAdmin(admin.ModelAdmin):
    list_display = ['name', 'title', 'is_featured', 'is_active', 'order']
    list_filter = ['is_featured', 'is_active']
    prepopulated_fields = {'slug': ('name',)}
    search_fields = ['name', 'title', 'description']
