# Klick India Corporation — Website

A modern, responsive business website built for **Klick India Corporation** by **Akshat Srivastava**.
Developed from scratch using React and Vite with Tailwind CSS for styling and Framer Motion for smooth animations.

**Live URL:** https://klickindiacorporation.com

---

## About the Client

**Klick India Corporation** is an architectural and design firm founded in **1992** by **Mr. Suneet Pasricha**. The company specializes in architecture, interior design, landscape design, MEP engineering, and project planning across India.

- **Email:** klickindiacorp@gmail.com
- **Phone:** +91 98736 93425
- **Address:** Flat No H-1201, AVJ Heights, Zeta-1, Greater Noida, Uttar Pradesh

---

## Tech Stack

| Technology       | Version  | Purpose                          |
|------------------|----------|----------------------------------|
| React            | 19.1.1   | Frontend framework               |
| Vite             | 7.1.7    | Build tool and dev server        |
| Tailwind CSS     | 4.1.14   | Utility-first CSS framework      |
| Motion (Framer)  | 12.23.22 | Animations and interactions      |
| React Router DOM | 7.9.4    | Client-side routing              |
| React Helmet     | 6.1.0    | SEO and metadata management      |
| Lucide React     | 0.545.0  | Icons                            |
| React Icons      | 5.5.0    | Additional icon library          |
| Web Vitals       | 5.1.0    | Core Web Vitals performance reporting |

---

## Routes

| Route          | Page       | Description                                                                 |
|----------------|------------|-----------------------------------------------------------------------------|
| `/`            | Home       | Landing page with hero carousel, USP stats, clients, expertise, services, projects, testimonials |
| `/about`       | About      | Company history, mission, vision, core values, and differentiators          |
| `/servicepage` | Services   | Detailed breakdown of all 7 service categories                              |
| `/projects`    | Projects   | Full project portfolio with lazy-loaded image grid                          |
| `/contact`     | Contact    | Contact methods (email, phone, WhatsApp, map) and office information        |

---

## Components

| Component            | File                                | Description                                          |
|----------------------|-------------------------------------|------------------------------------------------------|
| Navbar               | `src/Components/Navbar.jsx`         | Fixed responsive navigation bar                      |
| Home                 | `src/Components/Home.jsx`           | Hero section with auto-rotating background images    |
| USP                  | `src/Components/USP.jsx`            | Animated statistics counters (years, projects, etc.) |
| TrustedPartners      | `src/Components/TrustedPartners.jsx`| Scrolling client logos carousel                      |
| Expertise            | `src/Components/Expertise.jsx`      | 8 expertise category cards                           |
| Services             | `src/Components/Services.jsx`       | Service overview grid with navigation                |
| WhyChooseUs          | `src/Components/WhyChooseUs.jsx`    | Comparison/differentiator section                    |
| FeaturedProjects     | `src/Components/Projects.jsx`       | Featured projects showcase                           |
| Testimonials         | `src/Components/Testimonials.jsx`   | Client testimonials section                          |
| Footer               | `src/Components/Footer.jsx`         | Site-wide footer with links                          |
| ScrollToTop          | `src/Components/ScrollToTop.jsx`    | Route change scroll-to-top handler                   |
| About (page)         | `src/Components/pages/About.jsx`    | Full about page                                      |
| ServicesPage (page)  | `src/Components/pages/servicesPage.jsx` | Detailed services page                           |
| ProjectsPage (page)  | `src/Components/pages/projectsPage.jsx` | Full projects portfolio page                     |
| ContactPage (page)   | `src/Components/pages/contactPage.jsx`  | Contact information page with map                |

---

## Folder Structure

```
KlickIndiaCorp/
├── public/
│   ├── favicon_io/              # Favicons and web manifest
│   ├── robots.txt               # Search engine crawl rules
│   ├── sitemap.xml              # XML sitemap for SEO
│   └── _redirects               # Netlify SPA redirect rules
│
├── src/
│   ├── assets/                  # Images and static files
│   │   ├── companies/           # Client/partner logos (CCL, HUDCO, MOE, MTNL, PNB)
│   │   ├── expertise/           # Expertise category images (8 images)
│   │   ├── Projects/            # Project portfolio images (WebP format)
│   │   └── services/            # Service images
│   ├── Components/              # Reusable UI components
│   │   ├── pages/               # Full page components
│   │   │   ├── About.jsx
│   │   │   ├── servicesPage.jsx
│   │   │   ├── projectsPage.jsx
│   │   │   └── contactPage.jsx
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Home.jsx
│   │   ├── Services.jsx
│   │   ├── Projects.jsx
│   │   ├── USP.jsx
│   │   ├── TrustedPartners.jsx
│   │   ├── Expertise.jsx
│   │   ├── WhyChooseUs.jsx
│   │   ├── Testimonials.jsx
│   │   └── ScrollToTop.jsx
│   ├── App.jsx                  # Root component with routing and global SEO
│   ├── main.jsx                 # Entry point with Web Vitals reporting
│   ├── index.css                # Tailwind imports and global styles
│   └── App.css                  # App-level utility styles
│
├── index.html                   # HTML entry point (GA4 + Clarity scripts)
├── package.json
├── vite.config.js
├── netlify.toml                 # Netlify build and redirect config
├── eslint.config.js
├── .env                         # Environment variables
└── README.md
```

---

## Installation & Setup

```bash
# Clone the repository
git clone https://github.com/yourusername/Klick-India-Corporation.git
cd Klick-India-Corporation

# Install dependencies
npm install

# Start the development server
npm run dev

# Build for production
npm run build

# Preview the production build
npm run preview
```

---

## SEO

- **React Helmet** manages per-page `<title>`, `<meta>`, Open Graph, and Twitter Card tags
- **Structured Data (JSON-LD)** via Schema.org for Organization, Services, Contact, and About pages
- **sitemap.xml** in `/public` with all 5 routes
- **robots.txt** allowing all crawlers with sitemap reference
- **Canonical URLs** set per page to avoid duplicate content
- **Open Graph images** pointed to absolute URLs for correct social sharing previews

---

## Analytics & Performance Monitoring

| Tool               | Purpose                                      | Status    |
|--------------------|----------------------------------------------|-----------|
| Google Analytics 4 | Traffic, user behavior, page views, conversions | Active (G-ZZTHJ9P2S5) |
| Microsoft Clarity  | Heatmaps, session recordings, UX insights    | Placeholder (replace `CLARITY_PROJECT_ID` in `index.html`) |
| Web Vitals         | Core Web Vitals (CLS, INP, FCP, LCP, TTFB) reported to GA4 | Active |

### Activating Clarity

1. Go to https://clarity.microsoft.com and create a new project
2. Copy your project ID
3. In `index.html`, replace `CLARITY_PROJECT_ID` with your actual ID

---

## Deployment

The project is hosted on **Netlify** with continuous deployment from Git.

- **Hosting:** Netlify (https://www.netlify.com/)
- **Domain:** https://klickindiacorporation.com (via Hostinger)
- **Build command:** `npm run build`
- **Publish directory:** `dist`
- **Node version:** 20
- **SPA routing:** All paths redirect to `index.html` via `_redirects` and `netlify.toml`

---

## Features

- Responsive design across mobile, tablet, and desktop
- Fast build and load times via Vite
- SEO and meta optimization with React Helmet and structured data
- Smooth transitions and animations using Motion (Framer Motion v12)
- Modular, reusable component architecture
- WebP images for optimized performance
- Lazy loading for project images
- Core Web Vitals reporting to Google Analytics
- WhatsApp integration for direct client communication

---

## Developer Contact

**Developed by:** Akshat Srivastava
- Email: akshatsrivastava200213@gmail.com
- Phone: +91 8840293008
- GitHub: https://github.com/akshatsw
- LinkedIn: https://www.linkedin.com/in/akshatsw

---

## License

This project is the intellectual property of **Klick India Corporation**.
Code and assets may not be redistributed or repurposed without permission from the client or the developer.
