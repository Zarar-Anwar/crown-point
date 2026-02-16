from rest_framework import serializers
from ..core.models import Application, ContactForm, QuoteRequest, Newsletter, Testimonial, FAQ, GetStarted
from ..services.hardware.models import HardwareCategory, Hardware
from ..services.pricing.models import PricingPlan
from ..services.solutions.models import IndustrySolution


class ApplicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Application
        fields = '__all__'


class GetStartedSerializer(serializers.ModelSerializer):
    class Meta:
        model = GetStarted
        fields = ['id', 'name', 'email', 'phone', 'business_name', 'is_contacted', 'created_at']
        read_only_fields = ['is_contacted', 'created_at']


class ContactFormSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactForm
        fields = '__all__'
        read_only_fields = ['is_replied', 'created_at']


class QuoteRequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = QuoteRequest
        fields = '__all__'
        read_only_fields = ['is_reviewed', 'created_at']


class NewsletterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Newsletter
        fields = ['email', 'name']


class TestimonialSerializer(serializers.ModelSerializer):
    class Meta:
        model = Testimonial
        fields = ['id', 'client_name', 'client_position', 'client_company', 
                  'client_photo', 'rating', 'testimonial', 'is_featured', 'created_at']


class FAQSerializer(serializers.ModelSerializer):
    class Meta:
        model = FAQ
        fields = ['id', 'question', 'answer', 'category', 'order']


class HardwareCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = HardwareCategory
        fields = ['id', 'name', 'slug', 'description', 'icon']


class HardwareSerializer(serializers.ModelSerializer):
    category = HardwareCategorySerializer(read_only=True)
    category_id = serializers.IntegerField(write_only=True, required=False, allow_null=True)
    
    class Meta:
        model = Hardware
        fields = ['id', 'name', 'slug', 'title', 'description', 'short_description',
                  'category', 'category_id', 'image', 'thumbnail', 'price', 
                  'features', 'specifications', 'is_featured', 'is_active', 
                  'order', 'created_at']


class PricingPlanSerializer(serializers.ModelSerializer):
    class Meta:
        model = PricingPlan
        fields = ['id', 'name', 'slug', 'plan_type', 'billing_period', 'price',
                  'description', 'features', 'is_featured', 'is_active', 'order']


class IndustrySolutionSerializer(serializers.ModelSerializer):
    class Meta:
        model = IndustrySolution
        fields = ['id', 'name', 'slug', 'title', 'description', 'short_description',
                  'icon', 'image', 'features', 'benefits', 'is_featured', 
                  'is_active', 'order', 'created_at']
