# Verify Deployment - Quick Test Commands

## DNS Verification ✅
Your DNS is already working! `swypora.com` resolves to `13.62.59.207`

## Test Your Site

### 1. Test HTTP (should redirect to HTTPS)
```bash
curl -I http://swypora.com
```

### 2. Test HTTPS
```bash
curl -I https://swypora.com
```

### 3. Test Frontend
```bash
curl -I https://swypora.com/
```

### 4. Test API Endpoint
```bash
curl -I https://swypora.com/api/
```

### 5. Test Admin Panel
```bash
curl -I https://swypora.com/admin/
```

### 6. Check Real-time Access Logs
```bash
sudo tail -f /var/log/nginx/access.log
```

### 7. Check Error Logs (if any issues)
```bash
sudo tail -f /var/log/nginx/error.log
```

## Expected Results

- **HTTP**: Should return `301 Moved Permanently` (redirecting to HTTPS)
- **HTTPS**: Should return `200 OK` with your React app
- **API**: Should return `200 OK` or `401/403` (API is working)
- **Admin**: Should return `302 Found` or `200 OK` (Django admin is accessible)

## Browser Test

Open in your browser:
- **Frontend**: https://swypora.com
- **API**: https://swypora.com/api/
- **Admin**: https://swypora.com/admin/

## If Everything Works

🎉 **Congratulations! Your site is live!**

Your deployment is complete and working. The site should be accessible worldwide at:
- **https://swypora.com**


