from django.core.management.base import BaseCommand
from src.services.hardware.models import HardwareCategory, Hardware
import os


class Command(BaseCommand):
    help = 'Seed hardware products and categories'

    def handle(self, *args, **options):
        from django.conf import settings
        
        self.stdout.write('Seeding hardware categories...')
        
        # Create categories
        categories_data = [
            {'name': 'Payment Terminals', 'slug': 'payment-terminals', 'order': 1, 'icon': 'icon-credit-card'},
            {'name': 'Scanners', 'slug': 'scanners', 'order': 2, 'icon': 'icon-barcode'},
            {'name': 'Printers', 'slug': 'printers', 'order': 3, 'icon': 'icon-printer'},
            {'name': 'Accessories', 'slug': 'accessories', 'order': 4, 'icon': 'icon-settings'},
        ]
        
        for cat_data in categories_data:
            category, created = HardwareCategory.objects.get_or_create(
                slug=cat_data['slug'],
                defaults=cat_data
            )
            if created:
                self.stdout.write(f'  Created category: {category.name}')
            else:
                self.stdout.write(f'  Category already exists: {category.name}')
        
        # Find media root
        possible_hardware_dirs = [
            os.path.join(settings.MEDIA_ROOT, 'hardware'),
            os.path.join(settings.BASE_DIR, 'media', 'hardware'),
        ]
        
        hardware_dir = None
        for d in possible_hardware_dirs:
            if os.path.exists(d):
                hardware_dir = d
                break
        
        if hardware_dir:
            self.stdout.write(f'Found hardware directory: {hardware_dir}')
            files = os.listdir(hardware_dir)
            self.stdout.write(f'Found files: {files}')
        
        # Create hardware products
        products_data = [
            {
                'name': '1D Orbit Scanner',
                'slug': '1d-orbit-scanner',
                'title': '1D Orbit Scanner',
                'description': 'High-performance 1D barcode scanner for retail and warehouse applications.',
                'category': 'scanners',
                'image': 'hardware/1D Orbit Scanner.png',
                'is_featured': True,
                'order': 1,
            },
            {
                'name': 'Dejavoo QD4',
                'slug': 'dejavoo-qd4',
                'title': 'Dejavoo QD4',
                'description': 'Compact and reliable payment terminal for small businesses.',
                'category': 'payment-terminals',
                'image': 'hardware/Dejavoo QD4.png',
                'is_featured': True,
                'order': 2,
            },
            {
                'name': 'Dejavoo Z9',
                'slug': 'dejavoo-z9',
                'title': 'Dejavoo Z9',
                'description': 'Advanced payment terminal with touch screen display.',
                'category': 'payment-terminals',
                'image': 'hardware/Dejavoo Z9.png',
                'is_featured': True,
                'order': 3,
            },
            {
                'name': 'Dejavoo Z11',
                'slug': 'dejavoo-z11',
                'title': 'Dejavoo Z11',
                'description': 'Enterprise-grade payment terminal with advanced security features.',
                'category': 'payment-terminals',
                'image': 'hardware/Dejavoo Z11.png',
                'is_featured': True,
                'order': 4,
            },
            {
                'name': 'Pistor Grip for P-Ranger',
                'slug': 'pistor-grip-p-ranger',
                'title': 'Optional Pistor Grip for P-Ranger',
                'description': 'Ergonomic grip accessory for P-Ranger scanner.',
                'category': 'accessories',
                'image': 'hardware/Optional Pistor Grip for P-Ranger.png',
                'is_featured': False,
                'order': 5,
            },
            {
                'name': 'P-Range Ticket and Inventory Scanner',
                'slug': 'p-range-scanner',
                'title': 'P-Range Ticket and Inventory Scanner',
                'description': 'Versatile scanner for ticket and inventory management.',
                'category': 'scanners',
                'image': 'hardware/P-Range Ticket and Inventory Scanner.png',
                'is_featured': True,
                'order': 6,
            },
            {
                'name': 'PAX A35',
                'slug': 'pax-a35',
                'title': 'PAX A35',
                'description': 'Android-based payment terminal with NFC capabilities.',
                'category': 'payment-terminals',
                'image': 'hardware/PAX A35.png',
                'is_featured': True,
                'order': 7,
            },
            {
                'name': 'PAX A80',
                'slug': 'pax-a80',
                'title': 'PAX A80',
                'description': 'Professional payment terminal for high-volume transactions.',
                'category': 'payment-terminals',
                'image': 'hardware/PAX A80.png',
                'is_featured': True,
                'order': 8,
            },
            {
                'name': 'PAX A920 Pro',
                'slug': 'pax-a920-pro',
                'title': 'PAX A920 Pro',
                'description': 'Mobile payment terminal with 4G connectivity.',
                'category': 'payment-terminals',
                'image': 'hardware/PAX A920 Pro.png',
                'is_featured': True,
                'order': 9,
            },
            {
                'name': 'SNBC Receipt Printer',
                'slug': 'snbc-receipt-printer',
                'title': 'SNBC Receipt Printer',
                'description': 'Fast and reliable thermal receipt printer.',
                'category': 'printers',
                'image': 'hardware/SNBC Receipt Printer.png',
                'is_featured': True,
                'order': 10,
            },
            {
                'name': 'Zebra Id Scanner',
                'slug': 'zebra-id-scanner',
                'title': 'Zebra ID Scanner',
                'description': 'Professional ID and drivers license scanner.',
                'category': 'scanners',
                'image': 'hardware/Zebra Id Scanner.png',
                'is_featured': True,
                'order': 11,
            },
            {
                'name': 'Zebra Label Printer',
                'slug': 'zebra-label-printer',
                'title': 'Zebra Label Printer',
                'description': 'High-quality label printer for retail and shipping.',
                'category': 'printers',
                'image': 'hardware/Zebra Label Printer.png',
                'is_featured': True,
                'order': 12,
            },
        ]
        
        self.stdout.write('Seeding hardware products...')
        
        for prod_data in products_data:
            category_slug = prod_data.pop('category')
            try:
                category = HardwareCategory.objects.get(slug=category_slug)
                
                # Check if image file exists
                image_path = prod_data['image']
                full_image_path = None
                if hardware_dir:
                    # Try to find the actual file
                    for f in os.listdir(hardware_dir):
                        if f.replace(' ', '') in image_path.replace('hardware/', '').replace(' ', '').lower():
                            full_image_path = os.path.join(hardware_dir, f)
                            break
                
                # Create product without image first
                product, created = Hardware.objects.get_or_create(
                    slug=prod_data['slug'],
                    defaults={**prod_data, 'category': category, 'is_active': True}
                )
                
                # Ensure product is active (update existing products too)
                if not product.is_active:
                    product.is_active = True
                    product.save()
                    self.stdout.write(f'  Activated product: {product.name}')
                
                # Try to set image if file exists
                if full_image_path and os.path.exists(full_image_path) and not product.image:
                    try:
                        from django.core.files import File
                        with open(full_image_path, 'rb') as f:
                            product.image.save(os.path.basename(full_image_path), File(f), save=True)
                        self.stdout.write(f'  Set image for: {product.name}')
                    except Exception as e:
                        self.stdout.write(f'  Error setting image for {product.name}: {e}')
                
                if created:
                    self.stdout.write(f'  Created product: {product.name}')
                else:
                    self.stdout.write(f'  Product already exists: {product.name}')
            except HardwareCategory.DoesNotExist:
                self.stdout.write(self.style.ERROR(f'  Category not found: {category_slug}'))
        
        self.stdout.write(self.style.SUCCESS('Hardware seeding completed!'))
