from django.db import models


class IndustrySolution(models.Model):
    """Industry-specific solutions (Retail, Restaurant, etc.)"""
    name = models.CharField(max_length=100)
    slug = models.SlugField(max_length=100, unique=True)
    title = models.CharField(max_length=200)
    description = models.TextField()
    short_description = models.CharField(max_length=200, blank=True)
    icon = models.CharField(max_length=50, blank=True)
    image = models.ImageField(upload_to='solutions/', blank=True, null=True)
    features = models.JSONField(default=list, blank=True)
    benefits = models.JSONField(default=list, blank=True)
    is_featured = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    order = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['order', 'name']

    def __str__(self):
        return self.name
