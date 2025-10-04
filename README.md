# 🏗️ Design Craft - Professional Architecture & Design Company Website

A modern, responsive React-based website for an architecture and design company, featuring professional animations, mobile-responsive design, and WhatsApp integration for client communication.

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Installation](#-installation)
- [Environment Variables](#-environment-variables)
- [Components](#-components)
- [Assets](#-assets)
- [Usage](#-usage)
- [Responsive Design](#-responsive-design)
- [Contributing](#-contributing)

## 🌟 Overview

Design Craft is a comprehensive single-page application showcasing architectural and interior design services. The website features:

- **Professional Portfolio**: Showcasing 30+ projects, 100+ happy clients, and 10+ years of experience
- **Service Showcase**: Commercial, residential, office, and hospitality design services
- **Client Testimonials**: Real client feedback and trusted partner logos
- **WhatsApp Integration**: Direct client communication through WhatsApp Web API
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Advanced Animations**: Professional Framer Motion animations throughout

## ✨ Features

### 🎨 **Visual Features**
- **Dynamic Image Slideshow**: Auto-rotating background images in hero section
- **Animated Statistics**: Counters showing company achievements (30+, 100+, 200+, 10+)
- **3D Effects**: Laptop mockup with rotation animations
- **Flowing Animations**: Company logos with continuous flowing effects
- **Testimonial Carousel**: Client reviews with smooth transitions

### 📱 **User Experience**
- **Smooth Scrolling Navigation**: Seamless section transitions
- **Mobile Hamburger Menu**: Animated mobile navigation with touch-friendly design
- **WhatsApp Integration**: One-click client communication
- **Professional Animations**: Spring physics and scroll-triggered effects
- **Responsive Grid Layouts**: Optimized for all screen sizes

### 🛠️ **Technical Features**
- **Environment Variables**: Secure configuration management
- **Modern React**: React 19.1.1 with functional components and hooks
- **Performance Optimized**: Efficient animations and image loading
- **SEO Friendly**: Semantic HTML structure
- **Accessibility**: Proper ARIA labels and keyboard navigation

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 19.1.1 | Frontend framework |
| **Vite** | 7.1.7 | Build tool and dev server |
| **Framer Motion** | 12.23.22 | Animations and interactions |
| **Tailwind CSS** | 4.1.14 | Utility-first styling |
| **JavaScript** | ES6+ | Programming language |

### Dependencies
```json
{
  "dependencies": {
    "@tailwindcss/vite": "^4.1.14",
    "dotenv": "^17.2.3",
    "motion": "^12.23.22",
    "react": "^19.1.1",
    "react-dom": "^19.1.1",
    "tailwindcss": "^4.1.14"
  }
}
```

## 📁 Project Structure

```
src/
├── Components/
│   ├── Navbar.jsx          # Navigation with mobile menu
│   ├── Home.jsx            # Hero section with slideshow
│   ├── Projects.jsx        # Statistics and project showcase
│   ├── About.jsx           # Company story and services
│   ├── Testimonials.jsx    # Client reviews and partners
│   └── Footer.jsx          # Contact info and links
├── assets/
│   ├── 1.jpg - 11.jpg      # Background/project images
│   ├── human1-3.jpg        # Testimonial photos
│   ├── companies/          # Partner company logos
│   │   ├── aditys birla.gif
│   │   ├── Asisan paints.jpg
│   │   ├── Facebook.jpg
│   │   ├── Green lams.jpg
│   │   ├── samsung.svg
│   │   └── tata.png
│   └── react.svg
├── App.jsx                 # Main app component
├── App.css                 # Global styles
├── index.css               # Base styles
└── main.jsx                # React entry point
```

## 🚀 Installation

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn

### Steps

1. **Clone the repository**
```bash
git clone <repository-url>
cd "react pro/sample"
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
# Create .env file in root directory
VITE_WHATSAPP_NUMBER=+918382881886
```

4. **Start development server**
```bash
npm run dev
```

5. **Build for production**
```bash
npm run build
```

6. **Preview production build**
```bash
npm run preview
```

## 🔧 Environment Variables

Create a `.env` file in the root directory:

```env
# WhatsApp Configuration
VITE_WHATSAPP_NUMBER=+91xxxxxxxx
```

**Important Notes:**
- The `VITE_` prefix is required for client-side access
- Restart the dev server after modifying environment variables
- For production, set environment variables in your hosting platform

## 🧩 Components

### **Navbar.jsx**
- **Features**: Mobile-responsive navigation, hamburger menu, smooth scrolling
- **Animations**: Logo hover effects, mobile menu slide transitions
- **Integration**: WhatsApp CTA button

### **Home.jsx** 
- **Features**: Auto-rotating background slideshow (10 images)
- **Animations**: Text animations with spring physics, image transitions
- **Content**: Hero text, call-to-action buttons

### **Projects.jsx**
- **Features**: Animated statistics counters, project showcase grid
- **Stats**: 30+ Projects, 100+ Clients, 200+ Designs, 10+ Years
- **Animations**: Counter animations, 3D card effects

### **About.jsx**
- **Features**: Company story, services grid (8 services)
- **Services**: Commercial, Residential, Offices, Hospitality, Interior Design, 3D Visualization, Consultation, Project Management
- **Animations**: Laptop mockup rotation, service card hover effects

### **Testimonials.jsx**
- **Features**: Client testimonial carousel, trusted partners display
- **Partners**: Aditya Birla, Asian Paints, Facebook, Green Lam, Samsung, Tata
- **Animations**: Flowing company logos, testimonial transitions

### **Footer.jsx**
- **Content**: Company info, quick links, services, contact details
- **Sections**: About company, navigation links, service list, contact information
- **Styling**: Professional dark theme with organized grid layout

## 🖼️ Assets

### **Images**
- **Background Images**: 10 high-quality architectural photos (1.jpg - 11.jpg)
- **Testimonial Photos**: 3 professional client photos (human1-3)
- **Company Logos**: 6 trusted partner logos in various formats

### **Image Optimization**
- Multiple formats supported (JPG, PNG, SVG, WebP, GIF)
- Optimized for web performance
- Responsive image loading

## 📱 Responsive Design

### **Breakpoints**
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: 1024px+

### **Mobile Features**
- Hamburger menu with smooth animations
- Touch-friendly button sizes (44px+ touch targets)
- Responsive typography and spacing
- Optimized image loading for mobile

### **Desktop Features**
- Full navigation menu
- Hover effects and advanced animations
- Grid layouts optimized for larger screens
- Enhanced visual effects

## 🎯 Usage

### **Development**
```bash
npm run dev     # Start development server
npm run lint    # Run ESLint
```

### **Production**
```bash
npm run build   # Build for production
npm run preview # Preview production build
```

### **WhatsApp Integration**
The website includes WhatsApp integration in multiple components:
- Navbar CTA button
- Projects section call-to-action
- Testimonials section contact button

**Message Template:**
```
"Hello! I'm interested in your architectural design services. Could you please provide more information?"
```

## 🎨 Animation Features

### **Framer Motion Animations**
- **Page Load**: Smooth entrance animations
- **Scroll Triggered**: Elements animate on scroll
- **Hover Effects**: Interactive button and card animations
- **Mobile Menu**: Hamburger transformation animations
- **Counters**: Animated statistics with number counting
- **3D Effects**: Rotating laptop mockup and card tilts

### **Animation Types**
- Spring physics for natural motion
- Staggered animations for multiple elements
- Parallax effects on scroll
- Continuous flowing animations for logos

## 📞 Contact Integration

**WhatsApp Configuration:**
- Phone: +91 xxxxxxxxx
- Auto-generated message for inquiries
- Opens in new tab/WhatsApp app

**Company Information:**
- Name: Design Craft
- Tagline: "Designing India's Best Homes & Businesses Since 1992"
- Services: Architecture, Interior Design, Commercial Spaces

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🔮 Future Enhancements

- **CMS Integration**: Content management system
- **Multi-language Support**: International market expansion
- **Advanced Filtering**: Project category filters
- **Virtual Tours**: 360° project showcases
- **Blog Section**: Design tips and company updates
- **Contact Forms**: Advanced inquiry management

---

**Built with ❤️ using React, Framer Motion, and Tailwind CSS**

*For support or inquiries, contact via WhatsApp: +91 8382881886*
