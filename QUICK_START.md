# TC Staining - Quick Start Guide

## 🚀 View Your Website Locally

The dev server should already be running! If not:

```bash
npm run dev
```

Then open your browser to: **http://localhost:5173**

---

## 📝 What You Have Now

A complete, professional website with:
- ✅ Responsive navigation with smooth scrolling
- ✅ Hero section with call-to-action
- ✅ About section with Tyler's story
- ✅ Services showcase (Fence Staining, Deck Staining, Restoration)
- ✅ Interactive gallery with 9 images and lightbox
- ✅ Contact form with validation
- ✅ Google Maps integration
- ✅ Footer with social links
- ✅ Mobile-friendly design
- ✅ Professional animations

---

## 🎯 Before Going Live - Action Items

### 1. Update Phone Number (2 files)
Search for `(706) 555-0123` and replace with real number in:
- `src/components/Footer.jsx`
- `src/sections/Contact.jsx`

### 2. Replace Images
Current images are high-quality stock photos. Replace with real photos:

**Hero Section** (`src/sections/Hero.jsx` line 24):
- Replace with your best stained fence photo

**About Section** (`src/sections/About.jsx` line 50):
- Replace with photo of Tyler or work in progress

**Service Cards** (`src/sections/Services.jsx` lines 15-27):
- Three service images for each card

**Gallery** (`src/sections/Gallery.jsx` lines 10-56):
- 9 before/after project photos
- These show up in the main gallery grid

### 3. Update Social Media Links
In `src/components/Footer.jsx` (lines 23-25):
- Replace Facebook URL with your business page
- Replace Instagram URL with your profile

### 4. Verify Contact Info
In `src/sections/Contact.jsx`:
- Email is set to `tyler@tcstaining.com` ✅
- Phone number (update as mentioned above)
- Verify Google Maps location is correct

---

## 🚀 Deploy to Production

### Fastest Method: Vercel

1. **Initialize Git** (if not already done):
```bash
git init
git add .
git commit -m "Initial commit - TC Staining website"
```

2. **Push to GitHub**:
   - Create new repo on GitHub: `tc-staining-website`
   - Follow GitHub instructions to push

3. **Deploy on Vercel**:
   - Go to https://vercel.com
   - Click "Import Project"
   - Select your GitHub repo
   - Click "Deploy"
   - Done! Live in ~2 minutes

**Your site will be live at:** `your-project.vercel.app`

4. **Add Custom Domain** (in Vercel):
   - Settings → Domains
   - Add: `tcstaining.com` and `www.tcstaining.com`
   - Update DNS as instructed

---

## 📧 Set Up Email: tyler@tcstaining.com

### Easiest Option: Cloudflare (FREE)

1. **Add domain to Cloudflare**:
   - Sign up at https://cloudflare.com
   - Add domain `tcstaining.com`
   - Update nameservers at your domain registrar

2. **Enable Email Routing**:
   - In Cloudflare: Email → Email Routing → Get Started
   - Add route: `tyler@tcstaining.com` → your-personal-email@gmail.com
   - Verify your personal email

3. **Done!** All emails to tyler@ will forward to you

**Note:** This is for receiving emails only. To send from tyler@, use Google Workspace ($6/mo).

---

## 📬 Connect Contact Form to Email

Your contact form currently validates and shows success, but doesn't send emails yet.

### Option A: Resend (Recommended - FREE)

1. Sign up: https://resend.com
2. Get API key
3. See `DEPLOYMENT.md` for code to add Vercel serverless function
4. Form will email submissions to tyler@tcstaining.com

### Option B: Formspree (No Code - $0-19/mo)

1. Sign up: https://formspree.io
2. Create form
3. Get endpoint URL
4. Update form action in `Contact.jsx`

### Option C: Web3Forms (No Code - FREE)

1. Get API key: https://web3forms.com
2. Add hidden input to form with API key
3. Emails go to tyler@tcstaining.com automatically

See `DEPLOYMENT.md` for detailed setup instructions for each option.

---

## 🎨 Customization Tips

### Change Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  'dark-walnut': '#4B2E05',  // Change these
  'warm-beige': '#F5EFE6',
  'charcoal-gray': '#2E2E2E',
  'accent-gold': '#C89F65',
}
```

### Update Text Content
- Hero text: `src/sections/Hero.jsx`
- About text: `src/sections/About.jsx`
- Service descriptions: `src/sections/Services.jsx`

### Add/Remove Services
Edit the `services` array in `src/sections/Services.jsx`

### Change Gallery Images
Update the `galleryImages` array in `src/sections/Gallery.jsx`

---

## 📁 Key Files Reference

| File | Purpose |
|------|---------|
| `src/App.jsx` | Main layout, imports all sections |
| `src/components/Navbar.jsx` | Top navigation bar |
| `src/components/Footer.jsx` | Bottom footer |
| `src/sections/Hero.jsx` | Landing/hero section |
| `src/sections/About.jsx` | About Tyler/TC Staining |
| `src/sections/Services.jsx` | Service offerings |
| `src/sections/Gallery.jsx` | Photo gallery |
| `src/sections/Contact.jsx` | Contact form |
| `tailwind.config.js` | Color palette & styling |
| `index.html` | SEO meta tags |

---

## 🧪 Testing Checklist

Before launching, test:
- [ ] All navigation links scroll correctly
- [ ] Mobile menu opens/closes
- [ ] Contact form validation works
- [ ] Gallery lightbox opens and navigates
- [ ] Site looks good on phone (inspect → toggle device toolbar)
- [ ] All images load
- [ ] Phone number is clickable on mobile
- [ ] Email link opens mail client

---

## 💻 Development Commands

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Check for code issues
npm run lint
```

---

## 🆘 Common Issues

**Images not loading?**
- Check image URLs in section files
- Make sure images are accessible

**Styles not applying?**
- Restart dev server: `Ctrl+C` then `npm run dev`
- Clear browser cache

**Form not submitting?**
- Check browser console for errors
- Form needs backend integration (see DEPLOYMENT.md)

**Site not responsive?**
- Open DevTools (F12) → Toggle device toolbar
- Test different screen sizes

---

## 📚 Additional Resources

- **Full Documentation**: See `README.md`
- **Deployment Guide**: See `DEPLOYMENT.md`
- **Project Overview**: See `PROJECT_SUMMARY.md`
- **Vite Docs**: https://vite.dev
- **Tailwind Docs**: https://tailwindcss.com
- **React Docs**: https://react.dev

---

## ✅ You're All Set!

Your professional TC Staining website is ready to go. Just:
1. Update placeholder content (phone, images)
2. Deploy to Vercel
3. Set up custom domain
4. Configure email
5. Connect contact form

**Need help?** All detailed instructions are in `DEPLOYMENT.md`

Good luck with your launch! 🎉🚀

