from django.core.exceptions import ValidationError
from django.db import models


class Application(models.Model):
    """Main application settings"""
    name = models.CharField(max_length=100, default='Swypora')
    logo = models.ImageField(upload_to='core/application/images', null=True, blank=True)
    tagline = models.CharField(max_length=200, blank=True, null=True, help_text='Short tagline')
    
    # Contact Information
    contact_email = models.EmailField(max_length=100, default='support@swypora.com')
    contact_phone = models.CharField(max_length=100, default='will be updated soon')
    whatsapp_number = models.CharField(max_length=20, blank=True, null=True)
    address = models.CharField(max_length=255, default='Address to be updated')
    
    # Social Links
    facebook = models.URLField(max_length=255, blank=True, null=True)
    twitter = models.URLField(max_length=255, blank=True, null=True)
    linkedin = models.URLField(max_length=255, blank=True, null=True)
    instagram = models.URLField(max_length=255, blank=True, null=True)
    youtube = models.URLField(max_length=255, blank=True, null=True)
    
    is_active = models.BooleanField(default=True)
    created_on = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name_plural = "Application"
        ordering = ['name']

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        if Application.objects.exists() and not self.pk:
            raise ValidationError("Only one record allowed.")
        super(Application, self).save(*args, **kwargs)


class GetStarted(models.Model):
    """Get Started form submissions from header"""
    name = models.CharField(max_length=100, help_text="Full Name")
    email = models.EmailField(help_text="Email Address")
    phone = models.CharField(max_length=20, blank=True, null=True, help_text="Phone Number")
    business_name = models.CharField(max_length=200, blank=True, null=True, help_text="Business Name")
    is_contacted = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created_at']
        verbose_name = "Get Started Lead"
        verbose_name_plural = "Get Started Leads"

    def __str__(self):
        return f"{self.name} - {self.email}"


class ContactForm(models.Model):
    """Contact form submissions"""
    fullname = models.CharField(max_length=50, help_text="Full Name")
    subject = models.CharField(max_length=100, help_text="Message Subject")
    message = models.TextField(max_length=1000, help_text="Your Message")
    email = models.EmailField(max_length=100, help_text="Your Email Address")
    phone = models.CharField(max_length=20, blank=True, null=True)
    is_replied = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created_at']
        verbose_name_plural = "Contact Form Submissions"

    def __str__(self):
        return f"{self.fullname} - {self.subject}"


class QuoteRequest(models.Model):
    """Pricing quote requests"""
    SERVICE_CHOICES = [
        ('payment_processing', 'Payment Processing'),
        ('pos_system', 'POS System'),
        ('hardware', 'Hardware'),
        ('software_integration', 'Software Integration'),
        ('consultation', 'Consultation'),
        ('other', 'Other'),
    ]
    
    BUDGET_CHOICES = [
        ('under_1k', 'Under $1,000'),
        ('1k_5k', '$1,000 - $5,000'),
        ('5k_10k', '$5,000 - $10,000'),
        ('10k_25k', '$10,000 - $25,000'),
        ('above_25k', 'Above $25,000'),
        ('not_sure', 'Not Sure'),
    ]

    name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=20, blank=True, null=True)
    company = models.CharField(max_length=100, blank=True, null=True)
    service_type = models.CharField(max_length=50, choices=SERVICE_CHOICES)
    project_title = models.CharField(max_length=200)
    project_description = models.TextField()
    budget_range = models.CharField(max_length=20, choices=BUDGET_CHOICES)
    is_reviewed = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        ordering = ['-created_at']
        verbose_name_plural = "Quote Requests"
    
    def __str__(self):
        return f"{self.name} - {self.project_title}"


class Newsletter(models.Model):
    """Newsletter subscribers"""
    email = models.EmailField(unique=True)
    name = models.CharField(max_length=100, blank=True, null=True)
    is_active = models.BooleanField(default=True)
    subscribed_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        ordering = ['-subscribed_at']
        verbose_name_plural = "Newsletter Subscribers"
    
    def __str__(self):
        return self.email


class Testimonial(models.Model):
    """Client testimonials"""
    client_name = models.CharField(max_length=100)
    client_position = models.CharField(max_length=100, blank=True, null=True)
    client_company = models.CharField(max_length=100, blank=True, null=True)
    client_photo = models.ImageField(upload_to='testimonials/', blank=True, null=True)
    rating = models.IntegerField(default=5, help_text="Rating out of 5")
    testimonial = models.TextField()
    is_featured = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        ordering = ['-is_featured', '-created_at']
        verbose_name_plural = "Testimonials"
    
    def __str__(self):
        return f"{self.client_name} - {self.client_company or 'N/A'}"


class FAQ(models.Model):
    """Frequently Asked Questions"""
    CATEGORY_CHOICES = [
        ('general', 'General'),
        ('payments', 'Payments'),
        ('hardware', 'Hardware'),
        ('pricing', 'Pricing'),
        ('support', 'Support'),
    ]
    
    question = models.CharField(max_length=300)
    answer = models.TextField()
    category = models.CharField(max_length=20, choices=CATEGORY_CHOICES, default='general')
    order = models.IntegerField(default=0)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        ordering = ['order', '-created_at']
        verbose_name = "FAQ"
        verbose_name_plural = "FAQs"
    
    def __str__(self):
        return self.question
