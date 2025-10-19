# TC Staining - Professional Fence & Deck Staining Services

A modern, responsive single-page website for TC Staining, a professional fence and deck staining business serving the Greater Augusta, GA area.

## 🚀 Features

- **Single-page application** with smooth scrolling navigation
- **Fully responsive** design (mobile, tablet, desktop)
- **Beautiful animations** using Framer Motion
- **Interactive gallery** with lightbox functionality
- **Contact form** with validation
- **SEO optimized** with meta tags and Open Graph support
- **Modern UI/UX** with custom color palette

## 🎨 Color Palette

- **Dark Walnut**: `#4B2E05` - Primary text and accents
- **Warm Beige**: `#F5EFE6` - Light backgrounds
- **Charcoal Gray**: `#2E2E2E` - Secondary text
- **Accent Gold**: `#C89F65` - CTAs and highlights

## 🛠️ Tech Stack

- **React 19** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS v4** - Utility-first styling
- **Framer Motion** - Animations and transitions
- **React Hook Form** - Form handling and validation
- **React Icons** - Icon library

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd tc-staining
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🏗️ Project Structure

```
tc-staining/
├── public/
│   ├── favicon.svg          # TC Staining favicon
│   └── vite.svg
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Footer.jsx
│   │   ├── Lightbox.jsx
│   │   ├── Navbar.jsx
│   │   └── ServiceCard.jsx
│   ├── sections/            # Page sections
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Gallery.jsx
│   │   ├── Hero.jsx
│   │   └── Services.jsx
│   ├── utils/               # Helper functions (if needed)
│   ├── App.jsx              # Main app component
│   ├── index.css            # Global styles & Tailwind
│   └── main.jsx             # React entry point
├── index.html               # HTML template with SEO tags
├── tailwind.config.js       # Tailwind configuration
├── postcss.config.js        # PostCSS configuration
└── package.json
```

## 📱 Sections

1. **Hero** - Full-screen background with CTA button
2. **About** - Information about TC Staining and Tyler
3. **Services** - Three service offerings (Fence Staining, Deck Staining, Fence Restoration)
4. **Gallery** - Portfolio of completed projects with lightbox
5. **Contact** - Contact form with validation and Google Maps embed

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in [Vercel](https://vercel.com)
3. Vercel will auto-detect Vite configuration
4. Deploy!

### Netlify

1. Push your code to GitHub
2. Connect repository in [Netlify](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Deploy!

### Manual Build

```bash
npm run build
```

The optimized production build will be in the `dist/` directory.

## 🔧 Configuration

### Environment Variables (Future)

When integrating backend services, create a `.env` file:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_key
VITE_RESEND_API_KEY=your_resend_api_key
```

### Email Integration

The contact form currently logs submissions to console. To enable email functionality:

1. Sign up for [Resend](https://resend.com) (free tier: 3k emails/month)
2. Add API key to environment variables
3. Create API endpoint to handle form submissions
4. Update `Contact.jsx` to POST to your endpoint

### Custom Domain & Email

For `tyler@tcstaining.com`:

**Option 1 - Cloudflare Email Routing (Free)**
- Add domain to Cloudflare
- Enable Email Routing
- Forward `tyler@tcstaining.com` to personal email

**Option 2 - Google Workspace ($6/month)**
- Professional email with Gmail interface
- Full email hosting

**Option 3 - Zoho Mail ($1-3/month)**
- Budget-friendly professional email

## 📝 Customization

### Update Images

Replace Unsplash placeholder images in:
- `src/sections/Hero.jsx`
- `src/sections/About.jsx`
- `src/sections/Services.jsx`
- `src/sections/Gallery.jsx`

### Update Contact Information

Edit contact details in:
- `src/components/Footer.jsx`
- `src/sections/Contact.jsx`

Update phone number placeholder `(706) 555-0123` with actual number.

### Modify Colors

Edit `tailwind.config.js` to change the color palette.

### Add/Remove Services

Edit the `services` array in `src/sections/Services.jsx`.

## 📄 License

© 2025 TC Staining. All rights reserved.

## 🤝 Support

For questions or support, contact: tyler@tcstaining.com

---

Built with ❤️ using React + Vite + Tailwind CSS
