from django.contrib import admin
from .models import Application, ContactForm, QuoteRequest, Newsletter, Testimonial, FAQ


@admin.register(Application)
class ApplicationAdmin(admin.ModelAdmin):
    list_display = ['name', 'contact_email', 'is_active']
    fieldsets = (
        ('Basic Info', {
            'fields': ('name', 'logo', 'tagline')
        }),
        ('Contact', {
            'fields': ('contact_email', 'contact_phone', 'whatsapp_number', 'address')
        }),
        ('Social Links', {
            'fields': ('facebook', 'twitter', 'linkedin', 'instagram', 'youtube')
        }),
    )


@admin.register(ContactForm)
class ContactFormAdmin(admin.ModelAdmin):
    list_display = ['fullname', 'email', 'subject', 'is_replied', 'created_at']
    list_filter = ['is_replied', 'created_at']
    search_fields = ['fullname', 'email', 'subject']


@admin.register(QuoteRequest)
class QuoteRequestAdmin(admin.ModelAdmin):
    list_display = ['name', 'email', 'service_type', 'budget_range', 'is_reviewed', 'created_at']
    list_filter = ['service_type', 'budget_range', 'is_reviewed']
    search_fields = ['name', 'email', 'project_title']


@admin.register(Newsletter)
class NewsletterAdmin(admin.ModelAdmin):
    list_display = ['email', 'name', 'is_active', 'subscribed_at']
    list_filter = ['is_active']


@admin.register(Testimonial)
class TestimonialAdmin(admin.ModelAdmin):
    list_display = ['client_name', 'client_company', 'rating', 'is_featured', 'is_active']
    list_filter = ['is_featured', 'is_active', 'rating']
    search_fields = ['client_name', 'client_company']


@admin.register(FAQ)
class FAQAdmin(admin.ModelAdmin):
    list_display = ['question', 'category', 'order', 'is_active']
    list_filter = ['category', 'is_active']
    ordering = ['order', 'category']
