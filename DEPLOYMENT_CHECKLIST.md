# Deployment Checklist

## Pre-Deployment
- [ ] Frontend built (`npm run build` in Frontend directory)
- [ ] Backend venv created and activated
- [ ] All Python dependencies installed (`pip install -r requirements.txt`)
- [ ] Django database migrated (`python manage.py migrate`)
- [ ] Know your server IP address or domain name
- [ ] Know your project path on server

## Step-by-Step Checklist

### 1. Install Nginx
- [ ] `sudo apt update && sudo apt upgrade -y`
- [ ] `sudo apt install nginx -y`
- [ ] `sudo systemctl status nginx` (should show active)
- [ ] `sudo systemctl enable nginx`

### 2. Install Gunicorn
- [ ] `cd /path/to/Backend`
- [ ] `source venv/bin/activate`
- [ ] `pip install gunicorn`
- [ ] Test: `gunicorn core.wsgi:application --bind 0.0.0.0:8000` (Ctrl+C to stop)

### 3. Collect Static Files
- [ ] `cd /path/to/Backend`
- [ ] `source venv/bin/activate`
- [ ] `python manage.py collectstatic --noinput`

### 4. Create Systemd Service
- [ ] Created `/etc/systemd/system/crownpoint.service`
- [ ] Updated paths in service file
- [ ] `sudo systemctl daemon-reload`
- [ ] `sudo systemctl start crownpoint`
- [ ] `sudo systemctl enable crownpoint`
- [ ] `sudo systemctl status crownpoint` (should show active)

### 5. Configure Nginx
- [ ] Created `/etc/nginx/sites-available/crownpoint`
- [ ] Updated all paths in nginx config
- [ ] Updated domain/IP in nginx config
- [ ] `sudo ln -s /etc/nginx/sites-available/crownpoint /etc/nginx/sites-enabled/`
- [ ] `sudo rm /etc/nginx/sites-enabled/default`
- [ ] `sudo nginx -t` (should show OK)
- [ ] `sudo systemctl reload nginx`

### 6. Update Django Settings
- [ ] Created/updated `.env` file in Backend directory
- [ ] Set `DEBUG=False`
- [ ] Generated new `SECRET_KEY`
- [ ] Added domain/IP to `ALLOWED_HOSTS`
- [ ] `sudo systemctl restart crownpoint`

### 7. Configure Firewall
- [ ] `sudo ufw allow OpenSSH`
- [ ] `sudo ufw allow 'Nginx Full'`
- [ ] `sudo ufw enable`
- [ ] `sudo ufw status` (should show rules)

### 8. Update Frontend Config
- [ ] Updated `Frontend/src/config.js` with server URL
- [ ] Rebuilt frontend: `npm run build`
- [ ] Copied build to server (if built locally)

### 9. Set Permissions
- [ ] `sudo chown -R $USER:www-data /path/to/crown-point`
- [ ] Set proper directory/file permissions

### 10. Test
- [ ] Visit `http://your-domain.com` or `http://your-ip`
- [ ] Frontend loads correctly
- [ ] API calls work (check browser console)
- [ ] Media files load
- [ ] Admin panel accessible at `/admin/`

### 11. HTTPS (Optional)
- [ ] `sudo apt install certbot python3-certbot-nginx -y`
- [ ] `sudo certbot --nginx -d your-domain.com`
- [ ] Test auto-renewal: `sudo certbot renew --dry-run`

## Verification Commands

```bash
# Check all services are running
sudo systemctl status nginx
sudo systemctl status crownpoint

# Check logs
sudo tail -f /var/log/nginx/error.log
sudo journalctl -u crownpoint -f

# Test endpoints
curl http://localhost/api/
curl http://localhost/
```

## If Something Goes Wrong

1. Check service status: `sudo systemctl status crownpoint`
2. Check nginx logs: `sudo tail -f /var/log/nginx/error.log`
3. Check Django logs: `sudo journalctl -u crownpoint -n 50`
4. Test nginx config: `sudo nginx -t`
5. Restart services: `sudo systemctl restart nginx && sudo systemctl restart crownpoint`

