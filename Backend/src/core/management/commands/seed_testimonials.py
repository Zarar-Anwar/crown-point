from django.core.management.base import BaseCommand
from src.core.models import Testimonial


class Command(BaseCommand):
    help = 'Seed testimonials'

    def handle(self, *args, **options):
        testimonials_data = [
            {
                'client_name': 'Sarah Johnson',
                'client_position': 'Owner',
                'client_company': 'Bloom Boutique',
                'rating': 5,
                'testimonial': 'CrownPoint has transformed how we handle payments. The setup was incredibly easy, and our customers love the seamless checkout experience. Sales have increased by 30% since switching.',
                'is_featured': True,
                'is_active': True,
            },
            {
                'client_name': 'Michael Chen',
                'client_position': 'CEO',
                'client_company': 'TechStart Solutions',
                'rating': 5,
                'testimonial': 'The analytics dashboard gives us insights we never had before. We can see exactly what\'s working and make data-driven decisions.',
                'is_featured': True,
                'is_active': True,
            },
            {
                'client_name': 'Emily Rodriguez',
                'client_position': 'Manager',
                'client_company': 'Café Delight',
                'rating': 5,
                'testimonial': 'Mobile POS has been a game-changer for our food truck. We can accept payments anywhere, and the transaction speed is impressive.',
                'is_featured': True,
                'is_active': True,
            },
            {
                'client_name': 'David Martinez',
                'client_position': 'Director',
                'client_company': 'QuickBite Restaurant',
                'rating': 5,
                'testimonial': 'The kitchen display system has streamlined our operations. Orders go directly to the kitchen, reducing errors and wait times.',
                'is_featured': False,
                'is_active': True,
            },
            {
                'client_name': 'Jennifer Lee',
                'client_position': 'Store Manager',
                'client_company': 'Fashion Forward',
                'rating': 5,
                'testimonial': 'Inventory management has never been easier. We can track stock in real-time and never miss a sale.',
                'is_featured': False,
                'is_active': True,
            },
        ]
        
        for data in testimonials_data:
            testimonial, created = Testimonial.objects.get_or_create(
                client_name=data['client_name'],
                defaults=data
            )
            if created:
                self.stdout.write(f'Created testimonial: {testimonial.client_name}')
            else:
                self.stdout.write(f'Testimonial already exists: {testimonial.client_name}')
        
        self.stdout.write(self.style.SUCCESS('Testimonials seeded successfully!'))
