from rest_framework import viewsets, status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
from django.core.mail import send_mail
from django.conf import settings
from .serializers import (
    ApplicationSerializer, GetStartedSerializer, ContactFormSerializer,
    QuoteRequestSerializer, NewsletterSerializer, TestimonialSerializer,
    FAQSerializer, HardwareSerializer, HardwareCategorySerializer,
    PricingPlanSerializer, IndustrySolutionSerializer
)
from src.core.models import Application, GetStarted, ContactForm, QuoteRequest, Newsletter, Testimonial, FAQ
from src.services.hardware.models import Hardware, HardwareCategory
from src.services.pricing.models import PricingPlan
from src.services.solutions.models import IndustrySolution


class ApplicationViewSet(viewsets.ModelViewSet):
    queryset = Application.objects.all()
    serializer_class = ApplicationSerializer
    
    def get_object(self):
        # Return the first/only application instance
        obj, _ = Application.objects.get_or_create(
            defaults={'name': 'Swypora', 'contact_email': 'support@swypora.com'}
        )
        return obj


class GetStartedView(APIView):
    """Handle Get Started form submissions"""
    
    def post(self, request):
        serializer = GetStartedSerializer(data=request.data)
        if serializer.is_valid():
            lead = serializer.save()
            
            # Send email notification
            try:
                app = Application.objects.first()
                if app and app.contact_email:
                    subject = f'New Get Started Lead: {lead.name}'
                    message = f'''
New lead from Get Started form:

Name: {lead.name}
Email: {lead.email}
Phone: {lead.phone or 'Not provided'}
Business: {lead.business_name or 'Not provided'}

Submitted at: {lead.created_at}
'''
                    send_mail(
                        subject,
                        message,
                        settings.DEFAULT_FROM_EMAIL if hasattr(settings, 'DEFAULT_FROM_EMAIL') else app.contact_email,
                        [app.contact_email],
                        fail_silently=False,
                    )
            except Exception as e:
                print(f'Email sending failed: {e}')
            
            return Response({'message': 'Thank you! We\'ll be in touch soon.'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ContactFormViewSet(viewsets.ModelViewSet):
    queryset = ContactForm.objects.all()
    serializer_class = ContactFormSerializer


class QuoteRequestViewSet(viewsets.ModelViewSet):
    queryset = QuoteRequest.objects.all()
    serializer_class = QuoteRequestSerializer


class NewsletterView(APIView):
    def post(self, request):
        serializer = NewsletterSerializer(data=request.data)
        if serializer.is_valid():
            email = serializer.validated_data['email']
            Newsletter.objects.get_or_create(email=email)
            return Response({'message': 'Subscribed successfully!'})
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class TestimonialViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Testimonial.objects.filter(is_active=True)
    serializer_class = TestimonialSerializer


class FAQViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = FAQ.objects.filter(is_active=True)
    serializer_class = FAQSerializer


class HardwareViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Hardware.objects.filter(is_active=True)
    serializer_class = HardwareSerializer
    
    def get_queryset(self):
        queryset = Hardware.objects.filter(is_active=True)
        category = self.request.query_params.get('category')
        if category:
            queryset = queryset.filter(category__slug=category)
        return queryset


class HardwareCategoryViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = HardwareCategory.objects.all()
    serializer_class = HardwareCategorySerializer


class PricingPlanViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = PricingPlan.objects.filter(is_active=True)
    serializer_class = PricingPlanSerializer


class IndustrySolutionViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = IndustrySolution.objects.filter(is_active=True)
    serializer_class = IndustrySolutionSerializer
