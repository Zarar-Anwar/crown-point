# Complete Nginx Deployment Guide for AWS Server

## Prerequisites
- AWS EC2 instance running (Ubuntu/Debian recommended)
- Frontend built (`npm run build` completed)
- Backend venv created and dependencies installed
- Domain name or IP address ready

---

## Step 1: Install Nginx

```bash
# Update system packages
sudo apt update
sudo apt upgrade -y

# Install nginx
sudo apt install nginx -y

# Check nginx status
sudo systemctl status nginx

# Enable nginx to start on boot
sudo systemctl enable nginx
```

---

## Step 2: Install Gunicorn (Django WSGI Server)

```bash
# Navigate to your backend directory
cd /path/to/your/Backend

# Activate your virtual environment
source venv/bin/activate

# Install gunicorn
pip install gunicorn

# Test gunicorn (optional - test if Django works)
gunicorn core.wsgi:application --bind 0.0.0.0:8000
# Press Ctrl+C to stop after testing
```

---

## Step 3: Collect Django Static Files

```bash
# Make sure you're in Backend directory with venv activated
cd /path/to/your/Backend
source venv/bin/activate

# Create staticfiles directory (if not exists)
mkdir -p staticfiles

# Collect all static files
python manage.py collectstatic --noinput
```

---

## Step 4: Create Gunicorn Systemd Service

```bash
# Create systemd service file
sudo nano /etc/systemd/system/crownpoint.service
```

**Paste the following content (adjust paths as needed):**

```ini
[Unit]
Description=CrownPoint Django Application
After=network.target

[Service]
User=ubuntu
Group=www-data
WorkingDirectory=/home/ubuntu/crown-point/Backend
Environment="PATH=/home/ubuntu/crown-point/Backend/venv/bin"
ExecStart=/home/ubuntu/crown-point/Backend/venv/bin/gunicorn --workers 3 --bind unix:/home/ubuntu/crown-point/Backend/crownpoint.sock core.wsgi:application

[Install]
WantedBy=multi-user.target
```

**Important:** Replace `/home/ubuntu/crown-point` with your actual project path and `ubuntu` with your username.

**Save and exit (Ctrl+X, then Y, then Enter)**

```bash
# Reload systemd daemon
sudo systemctl daemon-reload

# Start the service
sudo systemctl start crownpoint

# Enable service to start on boot
sudo systemctl enable crownpoint

# Check service status
sudo systemctl status crownpoint

# View logs if there are errors
sudo journalctl -u crownpoint -f
```

---

## Step 5: Configure Nginx

```bash
# Remove default nginx site
sudo rm /etc/nginx/sites-enabled/default

# Create new nginx configuration
sudo nano /etc/nginx/sites-available/crownpoint
```

**Paste the following configuration (adjust paths and domain/IP):**

```nginx
server {
    listen 80;
    server_name swypora.com www.swypora.com; 

    # Frontend static files
    root /home/ubuntu/crown-point/Frontend/build;
    index index.html;

    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript application/x-javascript application/xml+rss application/json;

    # Frontend - serve React app
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Backend API - proxy to Django
    location /api/ {
        proxy_pass http://unix:/home/ubuntu/crown-point/Backend/crownpoint.sock;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_redirect off;
    }

    # Django Admin
    location /admin/ {
        proxy_pass http://unix:/home/ubuntu/crown-point/Backend/crownpoint.sock;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_redirect off;
    }

    # Media files (user uploads)
    location /media/ {
        alias /home/ubuntu/crown-point/Backend/media/;
        expires 30d;
        add_header Cache-Control "public, immutable";
    }

    # Static files (CSS, JS, images from Django)
    location /staticfiles/ {
        alias /home/ubuntu/crown-point/Backend/staticfiles/;
        expires 30d;
        add_header Cache-Control "public, immutable";
    }

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;

    # Max upload size (adjust as needed)
    client_max_body_size 10M;
}
```

**Important:** 
- Replace `/home/ubuntu/crown-point` with your actual project path
- Replace `your-domain.com` with your actual domain or remove this line if using IP only

**Save and exit (Ctrl+X, then Y, then Enter)**

```bash
# Enable the site
sudo ln -s /etc/nginx/sites-available/crownpoint /etc/nginx/sites-enabled/

# Test nginx configuration
sudo nginx -t

# If test passes, reload nginx
sudo systemctl reload nginx
```

---

## Step 6: Update Django Settings for Production

```bash
# Navigate to backend
cd /path/to/your/Backend

# Create or edit .env file
nano .env
```

**Add/Update these settings:**

```env
DEBUG=False
SECRET_KEY=your-super-secret-key-here-generate-a-new-one
ALLOWED_HOSTS=your-domain.com,www.your-domain.com,your-server-ip
```

**Generate a new secret key:**
```bash
python -c "from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())"
```

**Update settings.py to use environment variables (if not already done):**

Make sure your `settings.py` has:
```python
ALLOWED_HOSTS = config("ALLOWED_HOSTS", default="").split(",")
```

**After updating .env, restart the service:**
```bash
sudo systemctl restart crownpoint
```

---

## Step 7: Configure Firewall (UFW)

```bash
# Allow SSH (important - don't lock yourself out!)
sudo ufw allow OpenSSH

# Allow HTTP
sudo ufw allow 'Nginx Full'

# Or allow specific ports
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp  # For HTTPS later

# Enable firewall
sudo ufw enable

# Check firewall status
sudo ufw status
```

---

## Step 8: Update Frontend API Configuration

**On your local machine or server, update the frontend config:**

```bash
cd /path/to/your/Frontend/src
nano config.js
```

**Update to use your domain/IP:**

```javascript
export const API_CONFIG = {
  API_BASE_URL: 'http://your-domain.com/api',  // or http://your-ip/api
  MEDIA_URL: 'http://your-domain.com/media',    // or http://your-ip/media
};
```

**Rebuild frontend:**
```bash
cd /path/to/your/Frontend
npm run build
```

**Copy new build to server (if building locally):**
```bash
# On local machine
scp -r build/* user@your-server:/path/to/Frontend/build/
```

---

## Step 9: Set Proper File Permissions

```bash
# Set ownership
sudo chown -R $USER:www-data /home/ubuntu/crown-point

# Set directory permissions (755 = rwxr-xr-x)
sudo find /home/ubuntu/crown-point -type d -exec chmod 755 {} \;

# Set file permissions (644 = rw-r--r--)
sudo find /home/ubuntu/crown-point -type f -exec chmod 644 {} \;

# IMPORTANT: Restore execute permissions for binaries (chmod 644 removes them!)
sudo find /home/ubuntu/crown-point/Backend/venv/bin -type f -exec chmod 755 {} \;

# Ensure build directory is accessible by nginx
sudo chmod -R 755 /home/ubuntu/crown-point/Frontend/build

# Make sure gunicorn socket directory is writable
sudo chmod 755 /home/ubuntu/crown-point/Backend
```

**Important Note:** The `chmod 644` command removes execute permissions from all files, including Python executables. Always restore execute permissions for binaries in the `venv/bin` directory after setting file permissions.

---

## Step 10: Test Everything

```bash
# Check nginx status
sudo systemctl status nginx

# Check Django service status
sudo systemctl status crownpoint

# Check nginx error logs
sudo tail -f /var/log/nginx/error.log

# Check Django logs
sudo journalctl -u crownpoint -f

# Test in browser
# Visit: http://your-domain.com or http://your-ip
```

---

## Step 11: Enable HTTPS (Optional but Recommended)

```bash
# Install certbot
sudo apt install certbot python3-certbot-nginx -y

# Get SSL certificate (replace with your domain)
sudo certbot --nginx -d swypora.com -d www.swypora.com

# Certbot will automatically update nginx config
# Test auto-renewal
sudo certbot renew --dry-run
```

---

## Troubleshooting Commands

```bash
# Restart services
sudo systemctl restart nginx
sudo systemctl restart crownpoint

# Check if ports are in use
sudo netstat -tulpn | grep :80
sudo netstat -tulpn | grep :8000

# Check nginx configuration syntax
sudo nginx -t

# View nginx access logs
sudo tail -f /var/log/nginx/access.log

# View nginx error logs
sudo tail -f /var/log/nginx/error.log

# Check Django service logs
sudo journalctl -u crownpoint -n 50

# Test gunicorn manually
cd /path/to/Backend
source venv/bin/activate
gunicorn core.wsgi:application --bind 0.0.0.0:8000

# Check file permissions
ls -la /path/to/your/crown-point
```

---

## Quick Reference: Service Management

```bash
# Start services
sudo systemctl start nginx
sudo systemctl start crownpoint

# Stop services
sudo systemctl stop nginx
sudo systemctl stop crownpoint

# Restart services
sudo systemctl restart nginx
sudo systemctl restart crownpoint

# Check status
sudo systemctl status nginx
sudo systemctl status crownpoint

# Enable on boot
sudo systemctl enable nginx
sudo systemctl enable crownpoint
```

---

## Important Notes

1. **Replace all paths** `/home/ubuntu/crown-point` with your actual project path
2. **Replace domain/IP** `your-domain.com` with your actual domain or IP
3. **Update ALLOWED_HOSTS** in Django settings to include your domain/IP
4. **Update frontend config.js** to point to your server
5. **Rebuild frontend** after changing config.js
6. **Set DEBUG=False** in production
7. **Use strong SECRET_KEY** in production

---

## Common Issues & Solutions

### Issue: 502 Bad Gateway
- Check if gunicorn service is running: `sudo systemctl status crownpoint`
- Check socket file permissions
- Check nginx error logs: `sudo tail -f /var/log/nginx/error.log`

### Issue: 404 Not Found (Frontend)
- Verify build directory exists: `ls -la /path/to/Frontend/build`
- Check nginx root path in config
- Rebuild frontend: `npm run build`

### Issue: 404 Not Found (API)
- Check if API endpoint exists: `curl http://your-domain.com/api/`
- Verify nginx location /api/ configuration
- Check Django URLs configuration

### Issue: Static files not loading
- Run `python manage.py collectstatic --noinput`
- Check staticfiles directory permissions
- Verify nginx staticfiles location path

### Issue: Media files not loading
- Check media directory permissions
- Verify nginx media location path
- Check Django MEDIA_ROOT and MEDIA_URL settings

