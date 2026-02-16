"""
Initial data for Swypora backend
"""
import os
from django.conf import settings


def get_hardware_products():
    """Generate hardware products from image files"""
    media_root = settings.MEDIA_ROOT
    hardware_dir = os.path.join(media_root, 'hardware')
    
    products = [
        {
            'name': '1D Orbit Scanner',
            'slug': '1d-orbit-scanner',
            'title': '1D Orbit Scanner',
            'description': 'High-performance 1D barcode scanner for retail and warehouse applications.',
            'category': 'Scanners',
            'image': 'hardware/1D Orbit Scanner.png',
            'is_featured': True,
            'order': 1,
        },
        {
            'name': 'Dejavoo QD4',
            'slug': 'dejavoo-qd4',
            'title': 'Dejavoo QD4',
            'description': 'Compact and reliable payment terminal for small businesses.',
            'category': 'Payment Terminals',
            'image': 'hardware/Dejavoo QD4.png',
            'is_featured': True,
            'order': 2,
        },
        {
            'name': 'Dejavoo Z9',
            'slug': 'dejavoo-z9',
            'title': 'Dejavoo Z9',
            'description': 'Advanced payment terminal with touch screen display.',
            'category': 'Payment Terminals',
            'image': 'hardware/Dejavoo Z9.png',
            'is_featured': True,
            'order': 3,
        },
        {
            'name': 'Dejavoo Z11',
            'slug': 'dejavoo-z11',
            'title': 'Dejavoo Z11',
            'description': 'Enterprise-grade payment terminal with advanced security features.',
            'category': 'Payment Terminals',
            'image': 'hardware/Dejavoo Z11.png',
            'is_featured': True,
            'order': 4,
        },
        {
            'name': 'Pistor Grip for P-Ranger',
            'slug': 'pistor-grip-p-ranger',
            'title': 'Optional Pistor Grip for P-Ranger',
            'description': 'Ergonomic grip accessory for P-Ranger scanner.',
            'category': 'Accessories',
            'image': 'hardware/Optional Pistor Grip for P-Ranger.png',
            'is_featured': False,
            'order': 5,
        },
        {
            'name': 'P-Range Ticket and Inventory Scanner',
            'slug': 'p-range-scanner',
            'title': 'P-Range Ticket and Inventory Scanner',
            'description': 'Versatile scanner for ticket and inventory management.',
            'category': 'Scanners',
            'image': 'hardware/P-Range Ticket and Inventory Scanner.png',
            'is_featured': True,
            'order': 6,
        },
        {
            'name': 'PAX A35',
            'slug': 'pax-a35',
            'title': 'PAX A35',
            'description': 'Android-based payment terminal with NFC capabilities.',
            'category': 'Payment Terminals',
            'image': 'hardware/PAX A35.png',
            'is_featured': True,
            'order': 7,
        },
        {
            'name': 'PAX A80',
            'slug': 'pax-a80',
            'title': 'PAX A80',
            'description': 'Professional payment terminal for high-volume transactions.',
            'category': 'Payment Terminals',
            'image': 'hardware/PAX A80.png',
            'is_featured': True,
            'order': 8,
        },
        {
            'name': 'PAX A920 Pro',
            'slug': 'pax-a920-pro',
            'title': 'PAX A920 Pro',
            'description': 'Mobile payment terminal with 4G connectivity.',
            'category': 'Payment Terminals',
            'image': 'hardware/PAX A920 Pro.png',
            'is_featured': True,
            'order': 9,
        },
        {
            'name': 'SNBC Receipt Printer',
            'slug': 'snbc-receipt-printer',
            'title': 'SNBC Receipt Printer',
            'description': 'Fast and reliable thermal receipt printer.',
            'category': 'Printers',
            'image': 'hardware/SNBC Receipt Printer.png',
            'is_featured': True,
            'order': 10,
        },
        {
            'name': 'Zebra Id Scanner',
            'slug': 'zebra-id-scanner',
            'title': 'Zebra ID Scanner',
            'description': 'Professional ID and driver's license scanner.',
            'category': 'Scanners',
            'image': 'hardware/Zebra Id Scanner.png',
            'is_featured': True,
            'order': 11,
        },
        {
            'name': 'Zebra Label Printer',
            'slug': 'zebra-label-printer',
            'title': 'Zebra Label Printer',
            'description': 'High-quality label printer for retail and shipping.',
            'category': 'Printers',
            'image': 'hardware/Zebra Label Printer.png',
            'is_featured': True,
            'order': 12,
        },
    ]
    return products


def create_hardware_categories():
    """Create hardware categories"""
    return [
        {'name': 'Payment Terminals', 'slug': 'payment-terminals', 'order': 1},
        {'name': 'Scanners', 'slug': 'scanners', 'order': 2},
        {'name': 'Printers', 'slug': 'printers', 'order': 3},
        {'name': 'Accessories', 'slug': 'accessories', 'order': 4},
    ]
