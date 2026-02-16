# Swypora - Payment Gateway Application

**Version 3.0.0** 🚀✨

A modern, responsive web application for payment gateway and point of sale solutions, built with React.js (Frontend) and Django (Backend).

## What's New in v3.0

- **Django Backend API** - Full REST API with dynamic content management
- **Dynamic Logo** - Logo loaded from backend database
- **Get Started Modal** - Quick contact form in header
- **Testimonials Slider** - Animated testimonial carousel
- **Email Notifications** - SMTP integration for form submissions
- **Admin Dashboard** - Django admin for managing content

## Technology Stack

### Frontend
- **React.js** - Frontend framework
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animations

### Backend
- **Django** - Python web framework
- **Django REST Framework** - REST API
- **SQLite** - Database (easy to switch to PostgreSQL)

## Project Structure

```
Swypora/
├── Frontend/                 # React application
│   ├── src/
│   │   ├── components/      # Reusable components
│   │   │   ├── Header/
│   │   │   ├── Footer/
│   │   │   ├── GetStartedModal/
│   │   │   └── Testimonials/
│   │   ├── pages/            # Page components
│   │   ├── services/        # API services
│   │   └── config.js        # API configuration
│   └── package.json
│
├── Backend/                   # Django application
│   ├── src/
│   │   ├── api/             # REST API endpoints
│   │   ├── core/            # Core models (Application, Contact, etc.)
│   │   └── services/        # Business logic
│   │       ├── hardware/
│   │       ├── pricing/
│   │       └── solutions/
│   └── requirements.txt
│
├── media/                    # Uploaded files (logo, images)
├── .gitignore
└── README.md
```

## Quick Start

### Backend Setup

1. Navigate to backend:
```bash
cd Backend
```

2. Create virtual environment:
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

3. Install dependencies:
```bash
pip install -r requirements.txt
```

4. Run migrations:
```bash
python manage.py makemigrations
python manage.py migrate
```

5. Seed database with sample data:
```bash
python manage.py seed_app        # Creates app with logo
python manage.py seed_hardware   # Adds hardware products
python manage.py seed_testimonials # Adds testimonials
```

6. Run server:
```bash
python manage.py runserver
```

Backend will run at: http://localhost:8000

### Frontend Setup

1. Navigate to frontend:
```bash
cd Frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm start
```

Frontend will run at: http://localhost:3000

## API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/application/` | GET | Get app settings (logo, name, contact) |
| `/api/hardware/` | GET | List hardware products |
| `/api/hardware-categories/` | GET | List hardware categories |
| `/api/pricing/` | GET | List pricing plans |
| `/api/solutions/` | GET | List industry solutions |
| `/api/testimonials/` | GET | List testimonials |
| `/api/contact-us/` | POST | Submit contact form |
| `/api/get-started/` | POST | Submit quick lead form |
| `/api/newsletter/subscribe/` | POST | Subscribe to newsletter |

## Environment Variables

### Backend (.env)
```env
SECRET_KEY=your-secret-key
DEBUG=True
ALLOWED_HOSTS=localhost,127.0.0.1

# Email (SMTP)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USE_TLS=True
EMAIL_HOST_USER=your-email@gmail.com
EMAIL_HOST_PASSWORD=your-app-password
DEFAULT_FROM_EMAIL=your-email@gmail.com
```

### Frontend (config.js)
The frontend config is in `src/config.js`:
```javascript
export const API_CONFIG = {
  API_BASE_URL: 'http://localhost:8000/api',
  MEDIA_URL: 'http://localhost:8000/media',
};
```

## Features

### Dynamic Content
- Logo loaded from backend
- Hardware products from database
- Testimonials from database
- Pricing plans from database
- Solutions from database

### Forms
- **Get Started** - Quick lead form in header (4 fields)
- **Contact Us** - Full contact form
- **Newsletter** - Email subscription

### Email Notifications
Forms send email notifications to the address configured in backend settings.

## Admin Panel

Access Django admin at: http://localhost:8000/admin/

Manage:
- Application settings (logo, contact info, social links)
- Hardware products and categories
- Pricing plans
- Solutions
- Testimonials
- Contact form submissions
- Get Started leads

## Pages

- **Home** - Landing page with hero, features, stats, testimonials
- **Solutions** - Industry solutions (Retail, Restaurant, etc.)
- **Hardware** - Payment terminals and hardware
- **Pricing** - Pricing plans
- **Contact** - Contact form and information

## Deployment

### Backend
```bash
cd Backend
python manage.py collectstatic
```

### Frontend
```bash
cd Frontend
npm run build
```

## Version History

### v3.0.0 (Current)
- Django REST API backend
- Dynamic logo from database
- Get Started modal form
- Testimonials slider
- Email notifications via SMTP
- GitIgnore files added

### v2.0.0
- Advanced 3D animations
- Particle effects
- Parallax scrolling
- Page transitions

### v1.0.0
- Initial release
- React frontend
- Tailwind CSS styling

## License

This project is for Swypora payment gateway application.
