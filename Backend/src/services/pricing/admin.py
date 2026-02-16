from django.contrib import admin
from .models import PricingPlan, PricingFeature


@admin.register(PricingPlan)
class PricingPlanAdmin(admin.ModelAdmin):
    list_display = ['name', 'plan_type', 'billing_period', 'price', 'is_featured', 'is_active', 'order']
    list_filter = ['plan_type', 'billing_period', 'is_featured', 'is_active']
    prepopulated_fields = {'slug': ('name',)}
    search_fields = ['name', 'description']


@admin.register(PricingFeature)
class PricingFeatureAdmin(admin.ModelAdmin):
    list_display = ['name', 'icon', 'is_active']
    list_filter = ['is_active']
