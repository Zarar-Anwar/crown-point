# Quick Deployment Commands - Copy & Paste

## Replace these variables first:
- `YOUR_USERNAME` - Your server username (e.g., ubuntu, ec2-user)
- `YOUR_PROJECT_PATH` - Full path to your project (e.g., /home/ubuntu/crown-point)
- `YOUR_DOMAIN` - Your domain name or IP address

---

## 1. Install Nginx
```bash
sudo apt update && sudo apt upgrade -y
sudo apt install nginx -y
sudo systemctl enable nginx
sudo systemctl start nginx
```

## 2. Install Gunicorn
```bash
cd YOUR_PROJECT_PATH/Backend
source venv/bin/activate
pip install gunicorn
```

## 3. Collect Static Files
```bash
cd YOUR_PROJECT_PATH/Backend
source venv/bin/activate
python manage.py collectstatic --noinput
```

## 4. Create Systemd Service
```bash
sudo nano /etc/systemd/system/crownpoint.service
```

**Paste this (update paths):**
```ini
[Unit]
Description=CrownPoint Django Application
After=network.target

[Service]
User=YOUR_USERNAME
Group=www-data
WorkingDirectory=YOUR_PROJECT_PATH/Backend
Environment="PATH=YOUR_PROJECT_PATH/Backend/venv/bin"
ExecStart=YOUR_PROJECT_PATH/Backend/venv/bin/gunicorn --workers 3 --bind unix:YOUR_PROJECT_PATH/Backend/crownpoint.sock core.wsgi:application

[Install]
WantedBy=multi-user.target
```

```bash
sudo systemctl daemon-reload
sudo systemctl start crownpoint
sudo systemctl enable crownpoint
sudo systemctl status crownpoint
```

## 5. Configure Nginx
```bash
sudo rm /etc/nginx/sites-enabled/default
sudo nano /etc/nginx/sites-available/crownpoint
```

**Paste this (update paths and domain):**
```nginx
server {
    listen 80;
    server_name YOUR_DOMAIN;

    root YOUR_PROJECT_PATH/Frontend/build;
    index index.html;

    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript application/x-javascript application/xml+rss application/json;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location /api/ {
        proxy_pass http://unix:YOUR_PROJECT_PATH/Backend/crownpoint.sock;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_redirect off;
    }

    location /admin/ {
        proxy_pass http://unix:YOUR_PROJECT_PATH/Backend/crownpoint.sock;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_redirect off;
    }

    location /media/ {
        alias YOUR_PROJECT_PATH/Backend/media/;
        expires 30d;
        add_header Cache-Control "public, immutable";
    }

    location /staticfiles/ {
        alias YOUR_PROJECT_PATH/Backend/staticfiles/;
        expires 30d;
        add_header Cache-Control "public, immutable";
    }

    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    client_max_body_size 10M;
}
```

```bash
sudo ln -s /etc/nginx/sites-available/crownpoint /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

## 6. Create .env File
```bash
cd YOUR_PROJECT_PATH/Backend
nano .env
```

**Paste this (update values):**
```env
SECRET_KEY=generate-new-secret-key-here
DEBUG=False
ALLOWED_HOSTS=YOUR_DOMAIN
CORS_ALLOW_ALL_ORIGINS=False
CORS_ALLOWED_ORIGINS=http://YOUR_DOMAIN,https://YOUR_DOMAIN
CSRF_TRUSTED_ORIGINS=http://YOUR_DOMAIN,https://YOUR_DOMAIN
```

**Generate secret key:**
```bash
python -c "from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())"
```

```bash
sudo systemctl restart crownpoint
```

## 7. Configure Firewall
```bash
sudo ufw allow OpenSSH
sudo ufw allow 'Nginx Full'
sudo ufw enable
sudo ufw status
```

## 8. Set Permissions
```bash
sudo chown -R YOUR_USERNAME:www-data YOUR_PROJECT_PATH
sudo chmod -R 755 YOUR_PROJECT_PATH
```

## 9. Test
```bash
sudo systemctl status nginx
sudo systemctl status crownpoint
curl http://YOUR_DOMAIN
```

## 10. Update Frontend Config (if needed)
```bash
cd YOUR_PROJECT_PATH/Frontend/src
nano config.js
```

**Update to:**
```javascript
export const API_CONFIG = {
  API_BASE_URL: 'http://YOUR_DOMAIN/api',
  MEDIA_URL: 'http://YOUR_DOMAIN/media',
};
```

```bash
cd YOUR_PROJECT_PATH/Frontend
npm run build
```

---

## Troubleshooting
```bash
# Check logs
sudo tail -f /var/log/nginx/error.log
sudo journalctl -u crownpoint -f

# Restart services
sudo systemctl restart nginx
sudo systemctl restart crownpoint

# Test nginx config
sudo nginx -t
```

