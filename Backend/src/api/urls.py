from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    ApplicationView, GetStartedView, ContactFormViewSet,
    QuoteRequestViewSet, NewsletterView, TestimonialViewSet,
    FAQViewSet, HardwareViewSet, HardwareCategoryViewSet,
    PricingPlanViewSet, IndustrySolutionViewSet
)

router = DefaultRouter()
router.register(r'contact-us', ContactFormViewSet, basename='contact')
router.register(r'quote-request', QuoteRequestViewSet, basename='quote')
router.register(r'testimonials', TestimonialViewSet, basename='testimonials')
router.register(r'faqs', FAQViewSet, basename='faqs')
router.register(r'hardware', HardwareViewSet, basename='hardware')
router.register(r'hardware-categories', HardwareCategoryViewSet, basename='hardware-categories')
router.register(r'pricing', PricingPlanViewSet, basename='pricing')
router.register(r'solutions', IndustrySolutionViewSet, basename='solutions')

urlpatterns = [
    path('', include(router.urls)),
    path('application/', ApplicationView.as_view(), name='application'),
    path('newsletter/subscribe/', NewsletterView.as_view(), name='newsletter-subscribe'),
    path('get-started/', GetStartedView.as_view(), name='get-started'),
]
