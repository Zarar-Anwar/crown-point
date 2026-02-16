from django.core.management.base import BaseCommand
from src.core.models import Application
import os


class Command(BaseCommand):
    help = 'Seed application settings with logo'

    def handle(self, *args, **options):
        from django.conf import settings
        
        # Try multiple possible logo locations
        possible_paths = [
            os.path.join(settings.MEDIA_ROOT, 'logo.png'),
            os.path.join(settings.BASE_DIR, 'media', 'logo.png'),
            os.path.join(settings.BASE_DIR, '..', 'media', 'logo.png'),
            os.path.join(settings.BASE_DIR, '..', 'Requirements', 'logo.png'),
            os.path.join(settings.BASE_DIR, 'Requirements', 'logo.png'),
        ]
        
        logo_path = None
        for path in possible_paths:
            normalized_path = os.path.normpath(path)
            self.stdout.write(f'Checking: {normalized_path}')
            if os.path.exists(normalized_path):
                logo_path = normalized_path
                self.stdout.write(f'Found logo at: {logo_path}')
                break
        
        # Create or get application
        app, created = Application.objects.get_or_create(
            defaults={
                'name': 'Swypora',
                'contact_email': 'support@swypora.com',
                'contact_phone': '+1 234 567 8900',
                'address': 'Your Address Here',
            }
        )
        
        # Set logo if found
        if logo_path:
            try:
                from django.core.files import File
                with open(logo_path, 'rb') as f:
                    app.logo.save('logo.png', File(f), save=True)
                self.stdout.write(self.style.SUCCESS(f'Set logo for: {app.name}'))
            except Exception as e:
                self.stdout.write(self.style.WARNING(f'Error setting logo: {e}'))
        else:
            self.stdout.write(self.style.WARNING('Logo file not found in any location'))
        
        if created:
            self.stdout.write(self.style.SUCCESS(f'Created application: {app.name}'))
        else:
            self.stdout.write(self.style.SUCCESS(f'Application already exists: {app.name}'))
        
        # Print current logo status
        if app.logo:
            self.stdout.write(f'Logo URL: {app.logo.url}')
        else:
            self.stdout.write(self.style.WARNING('No logo set'))
        
        self.stdout.write(self.style.SUCCESS('Done!'))
