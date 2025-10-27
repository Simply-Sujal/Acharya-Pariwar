# Acharya Brothers Consultancy Website

A modern, professional, bilingual (English + Nepali) one-page website showcasing the four Acharya brothers and their expertise in pharma, education, business, politics, and textile manufacturing.

## 🌟 Features

- **Bilingual Support**: Switch between English and Nepali seamlessly
- **Responsive Design**: Mobile-friendly with modern UI/UX
- **Smooth Animations**: Framer Motion powered transitions
- **Professional Sections**:
  - Hero Section with compelling tagline
  - About Section featuring all four brothers
  - Expertise grid showcasing 8 service areas
  - Impact statistics
  - Testimonials/reviews
  - Achievements timeline
  - Contact form with details

## 🚀 Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

## 📁 Project Structure

```
np-consultancy/
├── src/
│   ├── components/     # (Optional) Reusable components
│   ├── data/
│   │   └── translations.js  # All bilingual content
│   ├── assets/         # Images and static files
│   ├── App.jsx         # Main application
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
└── package.json
```

## 📸 Adding Profile Pictures

Currently, the website uses circular avatar placeholders with initials. To add real photos:

1. Add profile images to `src/assets/`:
   - `yamnath.jpg`
   - `narayan.jpg`
   - `tulsi.jpg`
   - `naraprasad.jpg`

2. Update `App.jsx` line 163-166:
```jsx
<img 
  src="/src/assets/yamnath.jpg" 
  alt="Yamnath Acharya" 
  className="w-32 h-32 rounded-full object-cover shadow-lg"
/>
```

## 🎨 Customization

### Colors
The website uses a blue theme. To change colors, update in `App.jsx`:
- Primary: `blue-900`
- Accent: `blue-700`
- Background: Various shades of `blue-50`, `white`, `slate-50`

### Content
All text content is in `src/data/translations.js`:
- Update English content in `translations.en`
- Update Nepali content in `translations.ne`

### Contact Information
Update contact details in the Contact section:
- Email: `acharya.family@consultancy.com`
- Phone: `+977-XXX-XXXXXXX`
- Location: Narayanghat, Madi, & Kathmandu, Nepal

## 🌍 Language Support

The website supports both English and Nepali:
- Toggle language using the "EN | NP" button in the navigation
- All sections are fully translated
- Navigation menu adapts to selected language

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🛠️ Tech Stack

- **React**: UI framework
- **Tailwind CSS v4**: Styling
- **Framer Motion**: Animations
- **Vite**: Build tool

## 📝 Sections Overview

1. **Hero**: Welcome message and call-to-action
2. **About**: Individual brother profiles with contributions
3. **Expertise**: 8 service areas in a grid layout
4. **Impact**: Key statistics in cards
5. **Testimonials**: Community reviews and feedback
6. **Achievements**: Interactive timeline of milestones
7. **Contact**: Form and contact details

## 🎯 Future Enhancements

- Add real profile photos
- Connect contact form to email service
- Add blog/news section
- Integrate social media links
- Add photo gallery section
- Include Google Maps for locations

## 📄 License

© 2025 Acharya Brothers. All rights reserved.

## 👥 Contact

For consultation, partnership, or community support:
- Email: acharya.family@consultancy.com
- Locations: Narayanghat, Madi, & Kathmandu, Nepal

---

**Built with ❤️ for the Acharya brothers and their community**
