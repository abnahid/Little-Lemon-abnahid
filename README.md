# 🍋 Little Lemon Restaurant

> A modern, responsive restaurant website for Little Lemon — a Chicago-based Mediterranean restaurant. Built with React, TypeScript, Tailwind CSS, and shadcn/ui components.

![Status](https://img.shields.io/badge/Status-Active-brightgreen)
![License](https://img.shields.io/badge/License-MIT-blue)
![React](https://img.shields.io/badge/React-19.1.1-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?logo=typescript)

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [Browser Support](#browser-support)
- [Performance](#performance)
- [Accessibility](#accessibility)
- [Contributing](#contributing)
- [License](#license)

---

## 🎯 Overview

**Little Lemon** is a full-featured restaurant website built as the Capstone Project for the Coursera Front-End Developer course. The website showcases a Mediterranean restaurant's menu, enables customers to make online reservations, and provides testimonials and location information.

### Key Highlights

- ✨ Fully responsive design (mobile-first approach)
- 🎨 Modern UI with Tailwind CSS & shadcn/ui components
- 📱 Accessible and SEO-friendly
- 💾 Local storage integration for reservations
- 🔐 Form validation and error handling
- ⚡ High performance with optimized components

---

## ✨ Features

### 🏠 Home Page

- **Responsive Hero Banner** — Eye-catching banner with CTA button
- **Special Dishes Section** — Display of featured menu items with pricing
- **Customer Testimonials** — Showcase of 4+ customer reviews with ratings
- **About Section** — Restaurant information with stacked image placeholders
- **Newsletter Subscription** (Ready for integration)

### 📅 Reservations

- **Interactive Calendar Picker** — Date selection using shadcn Calendar component
- **Form Validation** — Real-time validation for all fields
- **localStorage Integration** — Persist reservation data across sessions
- **Confirmation Modal** — User-friendly confirmation with reservation details
- **Reservation History** — View all past bookings on the same page
- **Smart Time Picker** — Easy time selection with 24-hour format

### 🍽️ Menu

- **Recipe Cards** — Beautiful card layout with images, descriptions, and prices
- **Responsive Grid** — Adapts from 1 column (mobile) to 3 columns (desktop)
- **Price Display** — Clear pricing with currency formatting
- **Order Integration** — Ready for "Order a Delivery" functionality

### 🔝 Navigation

- **Responsive Navbar** — Logo, menu links, and CTA buttons
- **Mobile Hamburger Menu** — Collapsible navigation for small screens
- **Active Link Tracking** — Visual feedback for current page
- **Smooth Routing** — React Router integration for page navigation

### 📱 Footer

- **Logo & Branding** — Company info with logo placeholder
- **Quick Links** — Navigation shortcuts
- **Contact Information** — Address, phone, and email
- **Social Media Links** — Placeholder for social icons

---

## 🛠️ Tech Stack

### Frontend Framework

- **React 19.1.1** — Component-based UI library
- **TypeScript 5.9** — Static typing for JavaScript
- **Vite 7.1.7** — Fast build tool and dev server

### Styling & UI

- **Tailwind CSS 4.1.16** — Utility-first CSS framework
- **shadcn/ui** — Pre-built, customizable components
- **@tailwindcss/vite 4.1.16** — Tailwind integration with Vite

### State Management & Data

- **React Hooks** — useState, useEffect for component state
- **localStorage API** — Client-side persistent storage
- **date-fns** — Date formatting and manipulation

### UI Components (shadcn/ui)

- Button
- Input
- Calendar
- Popover
- Label
- (More available via `npx shadcn-ui@latest add`)

### Development Tools

- **ESLint 9.36.0** — Code linting
- **Lucide React 0.548** — Icon library
- **class-variance-authority 0.7.1** — Component variant management

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Home/
│   │   ├── Homepage.tsx          # Home page wrapper
│   │   ├── Banner.tsx             # Hero banner section
│   │   ├── maneu.tsx              # Menu/Specials section
│   │   ├── testimonial.tsx         # Customer reviews section
│   │   └── About.tsx              # About section
│   ├── Reservation/
│   │   └── ReservationForm.tsx    # Reservation form with calendar
│   ├── ui/                        # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── input.tsx
│   │   ├── calendar.tsx
│   │   ├── label.tsx
│   │   ├── popover.tsx
│   │   └── ...
│   ├── Nevbar.tsx                 # Navigation bar
│   └── Footer.tsx                 # Footer
├── App.tsx                        # Main app component
├── main.tsx                       # React entry point
├── index.css                      # Global styles & Tailwind directives
└── lib/
    └── utils.ts                   # Utility functions
```

---

## 🚀 Installation

### Prerequisites

- **Node.js** v18 or higher
- **npm** v9 or higher (or yarn/pnpm)

### Setup Steps

1. **Clone the repository**

   ```bash
   git clone https://github.com/abnahid/Little-Lemon-abnahid.git
   cd Little-Lemon-abnahid
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Install shadcn/ui components** (if needed)

   ```bash
   npx shadcn-ui@latest add button
   npx shadcn-ui@latest add input
   npx shadcn-ui@latest add calendar
   npx shadcn-ui@latest add label
   npx shadcn-ui@latest add popover
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173`

---

## 💻 Usage

### Development Commands

```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run linting
npm run lint
```

### Making Reservations

1. Navigate to **Reservations** page via navbar
2. Fill in personal details:
   - Select occasion (Birthday, Anniversary, Business, Casual)
   - Pick a date using the calendar picker
   - Enter number of guests
   - Select reservation time
3. Fill booking details:
   - Full name
   - Email address
   - Phone number
   - Special requests (optional)
4. Click **Confirm Reservation**
5. Review confirmation modal
6. Reservation data is automatically saved to localStorage
7. View all past reservations below the form

### Viewing Saved Reservations

- Check **localStorage** in browser DevTools:
  - Open DevTools (F12)
  - Go to **Application** → **Local Storage**
  - Look for `reservationHistory` key
  - All confirmed bookings are stored as JSON array

---

## 🧩 Components

### Core Components

#### `Nevbar` (Navigation Bar)

- Responsive header with logo
- Desktop & mobile navigation
- Active link tracking
- CTA buttons (Login, Order Online)

#### `Banner` (Hero Section)

- Primary background color
- Large headline with secondary text color
- Restaurant description
- Call-to-action button

#### `Maneu` (Menu Section)

- Recipe data array with image URLs
- Responsive card grid (1→3 columns)
- Price display with formatting
- Order delivery links

#### `Testimonial` (Reviews)

- 4+ customer reviews
- Star rating display (1-5 stars)
- Avatar placeholders with initials
- Verified diner badge

#### `About` (Restaurant Info)

- Two-column layout (text + images)
- Secondary color headings
- Restaurant description
- Stacked image placeholders

#### `ReservationForm` (Booking System)

- **Personal Details Section**
  - Occasion selector
  - Calendar date picker
  - Guest count input
  - Time picker
- **Booking Details Section**
  - Full name input
  - Email validation
  - Phone number input
  - Special requests
- **Features**
  - Form data persistence
  - Confirmation modal
  - Reservation history display
  - Auto-clear after submission

#### `Footer`

- Logo and branding
- Quick navigation links
- Contact information
- Social media placeholders

---

## 🎨 Styling & Customization

### Tailwind CSS Classes

The project uses utility-first CSS with custom theme configuration:

```css
/* Available color tokens from CSS variables */
--primary: Primary color (e.g., green)
--primary-foreground: Text on primary
--secondary: Secondary color (for headings)
--secondary-foreground: Text on secondary
--background: Page background
--foreground: Default text color
--sidebar: Sidebar/footer background
```

### Adding New Components

```bash
# Add any shadcn/ui component
npx shadcn-ui@latest add [component-name]

# Examples:
npx shadcn-ui@latest add select
npx shadcn-ui@latest add textarea
npx shadcn-ui@latest add dialog
```

---

## 📱 Responsive Breakpoints

The project follows Tailwind CSS breakpoints:

| Breakpoint    | Width    | Class Prefix |
| ------------- | -------- | ------------ |
| Mobile        | < 640px  | (default)    |
| Tablet        | ≥ 640px  | `sm:`        |
| Small Desktop | ≥ 768px  | `md:`        |
| Desktop       | ≥ 1024px | `lg:`        |
| Large Desktop | ≥ 1280px | `xl:`        |

---

## ♿ Accessibility

✅ **Features Implemented**

- Semantic HTML structure
- ARIA labels on form fields
- Keyboard navigation support
- Color contrast compliance (WCAG AA)
- Alt text for images
- Form validation messages
- Focus visible states

### Testing Accessibility

```bash
# Use browser DevTools
# Lighthouse audit (Ctrl+Shift+J → Lighthouse)
# axe DevTools extension
```

---

## ⚡ Performance

### Optimizations

- Code splitting with Vite
- Lazy loading components
- Image optimization
- CSS minification
- Production bundle analysis

### Lighthouse Scores

Target scores:

- **Performance**: 90+
- **Accessibility**: 95+
- **Best Practices**: 95+
- **SEO**: 90+

---

## 🌐 Browser Support

| Browser | Version | Status           |
| ------- | ------- | ---------------- |
| Chrome  | Latest  | ✅ Full Support  |
| Firefox | Latest  | ✅ Full Support  |
| Safari  | Latest  | ✅ Full Support  |
| Edge    | Latest  | ✅ Full Support  |
| IE 11   | —       | ❌ Not Supported |

---

## 📦 Local Storage Schema

### `reservationForm` (Temporary)

```json
{
  "occasion": "Birthday",
  "date": "2025-11-15",
  "time": "19:00",
  "guests": "4",
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "(+91) 9876543210",
  "special": "Window table preferred"
}
```

### `reservationHistory` (Permanent)

```json
[
  {
    "occasion": "Birthday",
    "date": "2025-11-15",
    "time": "19:00",
    "guests": "4",
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "(+91) 9876543210",
    "special": "Window table preferred",
    "confirmedAt": "2025-10-29T14:30:00.000Z"
  }
]
```

---

## 🔄 Deployment

### Build for Production

```bash
npm run build
```

This creates optimized files in the `dist/` folder.

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

```bash
npm run build
# Drag and drop dist/ folder to Netlify
```

---

## 🐛 Troubleshooting

### Issue: Calendar not showing dates

- **Solution**: Ensure `date-fns` is installed and imported

### Issue: Form data not persisting

- **Solution**: Check browser localStorage is enabled; clear cache if needed

### Issue: Tailwind styles not applying

- **Solution**: Rebuild with `npm run build` or restart dev server

### Issue: TypeScript errors

- **Solution**: Run `npm install` to ensure all types are installed

---

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License. See [LICENSE](LICENSE) file for details.

---

## 👥 Author

**Abnahid** — Front-End Developer  
GitHub: [@abnahid](https://github.com/abnahid)  
Project: [Little Lemon Capstone](https://github.com/abnahid/Little-Lemon-abnahid)

---

## 🙏 Acknowledgments

- **Coursera** — Front-End Developer Course
- **shadcn/ui** — Beautiful component library
- **Tailwind CSS** — Utility-first CSS framework
- **React** — Component library
- **Vite** — Build tool and dev server

---

## 📞 Support

For issues, questions, or suggestions:

1. **GitHub Issues**: [Create an issue](https://github.com/abnahid/Little-Lemon-abnahid/issues)
2. **Email**: info@abnahid.com
3. **Phone**: (+91) XXXXX84223

---

## 🚀 Roadmap

### Coming Soon

- [ ] Backend API integration
- [ ] Payment gateway (Stripe/PayPal)
- [ ] Email confirmations
- [ ] Admin dashboard
- [ ] Menu filtering & search
- [ ] User accounts & login
- [ ] Reviews moderation system
- [ ] Analytics dashboard

---

<div align="center">

**Made with ❤️ by Abnahid**

[⬆ Back to top](#-little-lemon-restaurant)

</div>
