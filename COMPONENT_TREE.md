# TC Staining - Component Tree & Structure

Visual representation of the website's component hierarchy and layout.

## 📊 Component Hierarchy

```
App.jsx (Root)
│
├── Navbar.jsx (Fixed at top)
│   ├── Logo/Brand
│   ├── Navigation Links (Home, About, Services, Gallery, Contact)
│   ├── "Get Quote" CTA Button
│   └── Mobile Hamburger Menu
│
├── Main Content
│   │
│   ├── Hero.jsx
│   │   ├── Background Image
│   │   ├── Heading & Subheading
│   │   ├── CTA Button → scrolls to Contact
│   │   └── Scroll Indicator
│   │
│   ├── About.jsx
│   │   ├── Left Column: Text Content
│   │   │   ├── Section Heading
│   │   │   └── Description Paragraphs
│   │   └── Right Column: Image
│   │
│   ├── Services.jsx
│   │   ├── Section Heading
│   │   └── Service Cards Grid (3 cards)
│   │       ├── ServiceCard.jsx (Fence Staining)
│   │       ├── ServiceCard.jsx (Deck Staining)
│   │       └── ServiceCard.jsx (Fence Restoration)
│   │           └── Each card contains:
│   │               ├── Image
│   │               ├── Title
│   │               ├── Description
│   │               └── "Get Quote" Button
│   │
│   ├── Gallery.jsx
│   │   ├── Section Heading
│   │   ├── Image Grid (9 images)
│   │   │   └── Each image clickable
│   │   └── Lightbox.jsx (Modal)
│   │       ├── Full-size Image
│   │       ├── Navigation Arrows
│   │       ├── Close Button
│   │       └── Image Counter
│   │
│   └── Contact.jsx
│       ├── Left Column: Contact Form
│       │   ├── Name Input
│       │   ├── Email Input
│       │   ├── Phone Input
│       │   ├── Message Textarea
│       │   ├── Submit Button
│       │   └── Success Message
│       └── Right Column
│           ├── Contact Information Card
│           │   ├── Email
│           │   ├── Phone
│           │   └── Service Area
│           └── Google Maps Embed
│
└── Footer.jsx
    ├── Company Info Column
    │   ├── Logo/Brand
    │   ├── Tagline
    │   └── Social Media Icons
    ├── Quick Links Column
    │   └── Navigation Links
    └── Contact Info Column
        ├── Email
        ├── Phone
        └── Service Area
```

## 🎨 Layout Visualization

```
┌─────────────────────────────────────────────────────────┐
│                    NAVBAR (Fixed)                        │
│  Logo    Home  About  Services  Gallery  Contact  [CTA] │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│                                                           │
│                    HERO SECTION                          │
│              [Full-screen Background]                    │
│                                                           │
│        Protect & Beautify Your Fence                     │
│        Expert Staining You Can Trust                     │
│                                                           │
│              [Get a Free Quote Button]                   │
│                                                           │
│         Serving Greater Augusta, GA area                 │
│                       ↓                                   │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│                   ABOUT SECTION                          │
│  ┌────────────────┐  ┌─────────────────────────────┐   │
│  │                │  │  About TC Staining          │   │
│  │  Text Content  │  │                             │   │
│  │  - Mission     │  │       [Image]              │   │
│  │  - Experience  │  │                             │   │
│  │  - Values      │  │                             │   │
│  │                │  │                             │   │
│  └────────────────┘  └─────────────────────────────┘   │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│                  SERVICES SECTION                        │
│                                                           │
│               Our Services Heading                       │
│                                                           │
│  ┌──────────┐    ┌──────────┐    ┌──────────┐          │
│  │ [Image]  │    │ [Image]  │    │ [Image]  │          │
│  │          │    │          │    │          │          │
│  │  Fence   │    │   Deck   │    │  Fence   │          │
│  │ Staining │    │ Staining │    │Restoration│          │
│  │          │    │          │    │          │          │
│  │Description│   │Description│   │Description│          │
│  │[Get Quote]│   │[Get Quote]│   │[Get Quote]│          │
│  └──────────┘    └──────────┘    └──────────┘          │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│                  GALLERY SECTION                         │
│                 (Dark Background)                        │
│               Our Work Heading                           │
│                                                           │
│  ┌────┐ ┌────┐ ┌────┐                                  │
│  │Img1│ │Img2│ │Img3│                                  │
│  └────┘ └────┘ └────┘                                  │
│  ┌────┐ ┌────┐ ┌────┐                                  │
│  │Img4│ │Img5│ │Img6│                                  │
│  └────┘ └────┘ └────┘                                  │
│  ┌────┐ ┌────┐ ┌────┐                                  │
│  │Img7│ │Img8│ │Img9│  ← Click for lightbox            │
│  └────┘ └────┘ └────┘                                  │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│                  CONTACT SECTION                         │
│                                                           │
│           Get Your Free Estimate                         │
│                                                           │
│  ┌────────────────┐  ┌─────────────────────────────┐   │
│  │ Contact Form   │  │ Contact Information         │   │
│  │ ┌────────────┐ │  │ ✉ tyler@tcstaining.com     │   │
│  │ │ Name       │ │  │ ☎ (706) 555-0123          │   │
│  │ │ Email      │ │  │ 📍 Greater Augusta / CSRA  │   │
│  │ │ Phone      │ │  │                             │   │
│  │ │ Message    │ │  │ ┌─────────────────────┐   │   │
│  │ │            │ │  │ │   Google Maps       │   │   │
│  │ │[Submit]    │ │  │ │   (Augusta, GA)     │   │   │
│  │ └────────────┘ │  │ └─────────────────────┘   │   │
│  └────────────────┘  └─────────────────────────────┘   │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│                      FOOTER                              │
│                                                           │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐             │
│  │TC Staining│ │Quick Links│ │ Contact  │             │
│  │           │ │• Home     │ │✉ Email   │             │
│  │Tagline    │ │• About    │ │☎ Phone   │             │
│  │           │ │• Services │ │📍 Area    │             │
│  │[FB] [IG]  │ │• Gallery  │ │          │             │
│  │           │ │• Contact  │ │          │             │
│  └──────────┘  └──────────┘  └──────────┘             │
│                                                           │
│         © 2025 TC Staining. All rights reserved.        │
└─────────────────────────────────────────────────────────┘
```

## 📱 Responsive Breakpoints

### Mobile (< 640px)
- Navbar: Hamburger menu
- Hero: Smaller text, full-screen
- About: Single column (text, then image)
- Services: Single column (cards stack)
- Gallery: Single column
- Contact: Single column (form, then info)
- Footer: Single column

### Tablet (640px - 1024px)
- Navbar: Hamburger menu
- Hero: Medium text
- About: Two columns
- Services: Two columns (2+1 layout)
- Gallery: Two columns
- Contact: Single or two columns
- Footer: Two-three columns

### Desktop (> 1024px)
- Navbar: Full horizontal menu
- Hero: Large text, full-screen
- About: Two columns (50/50)
- Services: Three columns
- Gallery: Three columns
- Contact: Two columns
- Footer: Three columns

## 🎭 Animation Flow

```
Page Load
  ↓
Hero Fades In (0.8s)
  ↓
User Scrolls
  ↓
About Section Slides In from Left/Right (0.8s)
  ↓
User Scrolls
  ↓
Services Cards Stagger In (0.2s delay each)
  ↓
User Scrolls
  ↓
Gallery Grid Fades In (0.1s delay per image)
  ↓
User Scrolls
  ↓
Contact Section Slides In (0.8s)

Interactions:
- Hover over cards → Scale up
- Hover over images → Overlay appears
- Click gallery image → Lightbox modal
- Smooth scroll on all navigation
```

## 🔄 User Journey Flow

```
Landing
  ↓
1. See Hero → Impressed by visuals
  ↓
2. Read About → Learn about Tyler/TC Staining
  ↓
3. Browse Services → Understand offerings
  ↓
4. View Gallery → See quality of work
  ↓
5. Contact Form → Get Quote
```

## 📦 File Dependencies

```
App.jsx
  ├─ imports → Navbar.jsx
  ├─ imports → Hero.jsx
  ├─ imports → About.jsx
  ├─ imports → Services.jsx
  │             └─ imports → ServiceCard.jsx
  ├─ imports → Gallery.jsx
  │             └─ imports → Lightbox.jsx
  ├─ imports → Contact.jsx
  └─ imports → Footer.jsx

main.jsx
  ├─ imports → App.jsx
  └─ imports → index.css
               └─ imports → Tailwind CSS
```

## 🎨 Color Usage Map

| Section | Background | Primary Text | Accent |
|---------|-----------|--------------|--------|
| Navbar | White | Dark Walnut | Accent Gold (CTA) |
| Hero | Dark Walnut (overlay) | Warm Beige | Accent Gold |
| About | Warm Beige | Charcoal Gray | Accent Gold |
| Services | White | Dark Walnut | Accent Gold |
| Gallery | Charcoal Gray | Warm Beige | Accent Gold |
| Contact | Warm Beige | Charcoal Gray | Accent Gold |
| Footer | Dark Walnut | Warm Beige | Accent Gold |

## 🛠️ Component Props

### ServiceCard.jsx
```javascript
{
  title: string,
  description: string,
  image: string (URL),
  delay: number (animation)
}
```

### Lightbox.jsx
```javascript
{
  images: array of { src, alt, label },
  currentIndex: number,
  onClose: function,
  onNext: function,
  onPrev: function
}
```

## 📍 Smooth Scroll Navigation

All navigation links use smooth scroll with offset:
- Navbar links → Scroll to section (80px offset)
- "Get Quote" buttons → Scroll to Contact section
- Hero CTA → Scroll to Contact section

## ✨ Interactive Elements

- **Navbar**: Scroll effect (shadow appears)
- **Hero CTA**: Scale animation on hover
- **Service Cards**: Hover scale + shadow
- **Gallery Images**: Hover overlay + cursor pointer
- **Contact Form**: Focus states + validation
- **All Buttons**: Hover color transitions
- **Lightbox**: Click outside to close, arrow keys to navigate

---

This structure provides a clean, professional user experience with smooth animations and intuitive navigation throughout the entire website.

