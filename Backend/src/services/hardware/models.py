from django.db import models


class HardwareCategory(models.Model):
    """Hardware category"""
    name = models.CharField(max_length=100, unique=True)
    slug = models.SlugField(max_length=100, unique=True)
    description = models.TextField(blank=True)
    icon = models.CharField(max_length=50, blank=True)
    is_active = models.BooleanField(default=True)
    order = models.IntegerField(default=0)

    class Meta:
        ordering = ['order', 'name']
        verbose_name_plural = 'Hardware Categories'

    def __str__(self):
        return self.name


class Hardware(models.Model):
    """Hardware products"""
    name = models.CharField(max_length=200)
    slug = models.SlugField(max_length=200, unique=True)
    title = models.CharField(max_length=300)
    description = models.TextField()
    short_description = models.CharField(max_length=200, blank=True)
    category = models.ForeignKey(HardwareCategory, on_delete=models.CASCADE, related_name='hardware')
    image = models.ImageField(upload_to='hardware/', blank=True, null=True)
    thumbnail = models.ImageField(upload_to='hardware/thumbnails/', blank=True, null=True)
    price = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True)
    features = models.JSONField(default=list, blank=True)
    specifications = models.JSONField(default=dict, blank=True)
    is_featured = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    order = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['order', '-created_at']

    def __str__(self):
        return self.name
