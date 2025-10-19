# TC Staining - Deployment Guide

This guide walks you through deploying the TC Staining website to production.

## 🚀 Quick Deployment Options

### Option 1: Vercel (Recommended - Easiest)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - TC Staining website"
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your GitHub repository
   - Vercel will auto-detect Vite settings
   - Click "Deploy"
   - Done! Your site is live in ~2 minutes

3. **Add Custom Domain**
   - In Vercel dashboard, go to Settings → Domains
   - Add `tcstaining.com` and `www.tcstaining.com`
   - Follow DNS configuration instructions

### Option 2: Netlify

1. **Build the Project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `dist` folder
   - Or connect GitHub repo with these settings:
     - Build command: `npm run build`
     - Publish directory: `dist`

3. **Add Custom Domain**
   - Go to Domain Settings
   - Add custom domain: `tcstaining.com`

## 📧 Email Setup: tyler@tcstaining.com

### Option 1: Cloudflare Email Routing (FREE - Recommended)

**Pros:** Free, easy setup, reliable
**Cons:** Email forwarding only (no sending from tyler@tcstaining.com)

1. **Add Domain to Cloudflare**
   - Sign up at [cloudflare.com](https://cloudflare.com)
   - Add domain `tcstaining.com`
   - Update nameservers at your domain registrar

2. **Enable Email Routing**
   - Go to Email → Email Routing
   - Click "Get Started"
   - Add routing rule: `tyler@tcstaining.com` → forward to personal email
   - Verify email address

3. **Update DNS for Vercel/Netlify**
   - Cloudflare can proxy your site too
   - Or just use Cloudflare for email + DNS pointing to Vercel

### Option 2: Google Workspace ($6/month)

**Pros:** Professional Gmail, calendar, drive, can send as tyler@
**Cons:** Monthly cost

1. Sign up at [workspace.google.com](https://workspace.google.com)
2. Verify domain ownership
3. Set up MX records
4. Create tyler@tcstaining.com account

### Option 3: Zoho Mail ($1-3/month)

**Pros:** Cheapest professional email
**Cons:** Less familiar interface

1. Sign up at [zoho.com/mail](https://zoho.com/mail)
2. Add domain and verify
3. Configure MX records
4. Create email account

## 📬 Contact Form Integration

The form currently logs to console. To make it functional:

### Using Resend (Recommended)

**Cost:** Free tier (3,000 emails/month)

1. **Sign up for Resend**
   - Go to [resend.com](https://resend.com)
   - Create account and get API key

2. **Create API Route** (Vercel Serverless Function)
   
   Create `api/contact.js`:
   ```javascript
   import { Resend } from 'resend';

   const resend = new Resend(process.env.RESEND_API_KEY);

   export default async function handler(req, res) {
     if (req.method !== 'POST') {
       return res.status(405).json({ error: 'Method not allowed' });
     }

     const { name, email, phone, message } = req.body;

     try {
       await resend.emails.send({
         from: 'website@tcstaining.com',
         to: 'tyler@tcstaining.com',
         subject: `New Contact Form: ${name}`,
         html: `
           <h2>New Contact Form Submission</h2>
           <p><strong>Name:</strong> ${name}</p>
           <p><strong>Email:</strong> ${email}</p>
           <p><strong>Phone:</strong> ${phone}</p>
           <p><strong>Message:</strong></p>
           <p>${message}</p>
         `,
       });

       res.status(200).json({ success: true });
     } catch (error) {
       res.status(500).json({ error: error.message });
     }
   }
   ```

3. **Update Contact Form**
   
   In `src/sections/Contact.jsx`, update the `onSubmit` function:
   ```javascript
   const onSubmit = async (data) => {
     try {
       const response = await fetch('/api/contact', {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify(data),
       });

       if (response.ok) {
         setIsSubmitted(true);
         reset();
       }
     } catch (error) {
       console.error('Form error:', error);
     }
   };
   ```

4. **Add Environment Variable in Vercel**
   - Go to Project Settings → Environment Variables
   - Add `RESEND_API_KEY` with your Resend API key

### Alternative: Formspree (No Code Required)

1. Sign up at [formspree.io](https://formspree.io) (Free: 50 submissions/month)
2. Create new form and get endpoint URL
3. Update form action in `Contact.jsx`:
   ```javascript
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

### Alternative: Web3Forms (No Code Required)

1. Get free API key at [web3forms.com](https://web3forms.com)
2. Add hidden input to form:
   ```html
   <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY" />
   ```
3. Form will email submissions to tyler@tcstaining.com

## 🔧 Environment Variables for Production

In Vercel/Netlify, add these environment variables:

```
VITE_SUPABASE_URL=your_supabase_url (if using Supabase)
VITE_SUPABASE_ANON_KEY=your_key
VITE_RESEND_API_KEY=your_resend_key
VITE_SITE_URL=https://www.tcstaining.com
```

## 🎨 Before Going Live

### Replace Placeholder Content

1. **Phone Number**: Update `(706) 555-0123` in:
   - `src/components/Footer.jsx`
   - `src/sections/Contact.jsx`

2. **Images**: Replace Unsplash stock photos with actual project photos:
   - Hero background
   - About section image
   - Service card images
   - Gallery images (before/after shots)

3. **Social Media Links**: Update Facebook/Instagram URLs in:
   - `src/components/Footer.jsx`

4. **Google Maps**: Verify the map location is correct in:
   - `src/sections/Contact.jsx`

### Test Everything

- [ ] Test form submission
- [ ] Verify email delivery
- [ ] Check mobile responsiveness
- [ ] Test on different browsers
- [ ] Verify all navigation links work
- [ ] Check page load speed
- [ ] Test gallery lightbox
- [ ] Verify SEO meta tags

## 📊 Analytics (Optional)

### Google Analytics

1. Create GA4 property
2. Add tracking code to `index.html`:
   ```html
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'G-XXXXXXXXXX');
   </script>
   ```

### Vercel Analytics (Built-in)

- Free on all Vercel plans
- Automatically tracks page views and performance
- Enable in Project Settings

## 🔒 SSL/HTTPS

Both Vercel and Netlify provide free automatic SSL certificates. No configuration needed!

## 📱 Social Media Share Image

Create an image (1200x630px) showcasing TC Staining and save as `public/og-image.jpg`. This will be used when sharing on social media.

## 🎯 Post-Launch Checklist

- [ ] Domain configured and SSL active
- [ ] Email forwarding working
- [ ] Contact form sending emails
- [ ] All images replaced with real photos
- [ ] Phone number updated
- [ ] Social media links updated
- [ ] Google Analytics installed (optional)
- [ ] Test on mobile devices
- [ ] Submit to Google Search Console
- [ ] Create Google Business Profile

---

## 🆘 Need Help?

- **Vercel Docs**: [vercel.com/docs](https://vercel.com/docs)
- **Netlify Docs**: [docs.netlify.com](https://docs.netlify.com)
- **Resend Docs**: [resend.com/docs](https://resend.com/docs)
- **Cloudflare Docs**: [developers.cloudflare.com](https://developers.cloudflare.com)

Good luck with your launch! 🚀

