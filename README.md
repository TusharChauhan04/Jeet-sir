# Limitless - Exact Template Replica

A pixel-perfect replica of the Limitless Framer template with **EXACT** content, colors, fonts, and animations. Available as both React app AND static HTML for direct hosting.

## 🎯 What's Inside

### ✅ EXACT Design Match
- **Colors**: #6214D9 (purple), #1AFF75 (green), #000000 (black)
- **Fonts**: Satoshi, Instrument Serif, Inter
- **Pricing**: $2,989/month (exact from template)
- **Content**: "The truly Limitless design subscription" + all exact text

### ✅ Two Versions

**1. React App (src/)**
- Modern React components
- Vite build tool
- Tailwind CSS + Bootstrap
- Perfect for Vercel/Netlify deployment

**2. Static HTML (static-export/)**
- Pure HTML/CSS/JavaScript
- NO build step required
- Upload anywhere and go live
- Works on ANY web server

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ installed
- npm or yarn package manager

### Local Development

1. **Install Dependencies**
```bash
cd limitless-replica
npm install
```

2. **Run Development Server**
```bash
npm run dev
```

The app will open automatically at `http://localhost:3000`

3. **Build for Production**
```bash
npm run build
```

The production-ready files will be in the `dist` folder.

4. **Preview Production Build**
```bash
npm run preview
```

## 📁 Project Structure

```
limitless-replica/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── Navigation.jsx
│   │   ├── Hero.jsx
│   │   ├── Process.jsx
│   │   ├── Portfolio.jsx
│   │   ├── Benefits.jsx
│   │   ├── Marquee.jsx
│   │   ├── FAQ.jsx
│   │   └── Footer.jsx
│   ├── utils/
│   │   └── scrollAnimations.js  # Intersection Observer setup
│   ├── index.css        # Global styles + Tailwind
│   ├── App.jsx          # Main app component
│   └── main.jsx         # Entry point
├── index.html           # HTML template
├── package.json         # Dependencies
├── tailwind.config.js   # Tailwind configuration
├── vite.config.js       # Vite build configuration
└── postcss.config.js    # PostCSS configuration
```

## 🎨 Tech Stack

- **React 18** - Component-based UI
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Bootstrap** - Grid system and utilities
- **CSS3** - Custom animations and effects
- **Intersection Observer API** - Scroll animations

## ✨ Features

### Design Elements
- 🌑 **Dark Theme** - Pure black background with purple accents
- 🔮 **Glassmorphism** - Frosted glass navigation and cards
- 🎭 **Typography** - Inter + Playfair Display font pairing
- 🎨 **Color Palette** - #000000, #7B2FF7, #FFFFFF, #A1A1A1

### Animations
- 📜 **Scroll-Triggered** - Elements fade and slide in on scroll
- 🎪 **Marquee** - Continuous auto-scrolling logos
- 🎯 **Hover Effects** - Scale, glow, and color transitions
- ⚡ **Parallax** - Multi-speed scrolling effects
- 🎬 **Entrance Animations** - Staggered hero section entry

### Components
1. **Navigation** - Sticky header with glassmorphism and dropdown
2. **Hero** - Full-height section with gradient backgrounds
3. **Process** - 3-step "How It Works" cards
4. **Portfolio** - Project showcase with image hover effects
5. **Benefits** - 6-feature grid layout
6. **Marquee** - Logo carousel with continuous scroll
7. **FAQ** - Accordion with smooth expand/collapse
8. **Footer** - Multi-column with CTA and social links

### Responsive Design
- 📱 Mobile-first approach
- 🖥️ Desktop: 1440px+ optimized
- 💻 Tablet: 768px - 1023px
- 📲 Mobile: < 768px with hamburger menu

## 🌐 Deployment

### Netlify
1. Push code to GitHub
2. Connect repository in Netlify
3. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Deploy!

### Vercel
1. Push code to GitHub
2. Import project in Vercel
3. Vercel auto-detects Vite configuration
4. Deploy!

### GitHub Pages
1. Build the project: `npm run build`
2. Install gh-pages: `npm install -D gh-pages`
3. Add to package.json scripts:
   ```json
   "deploy": "gh-pages -d dist"
   ```
4. Run: `npm run deploy`

### Manual Hosting
1. Build: `npm run build`
2. Upload the entire `dist` folder to your hosting provider
3. Point your domain to the `dist` folder

## 🎯 Customization

### Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  'limitless-purple': '#7B2FF7', // Change primary color
  'limitless-grey': '#A1A1A1',   // Change text color
}
```

### Fonts
Edit `index.html` Google Fonts import and `tailwind.config.js`:
```javascript
fontFamily: {
  'sans': ['Your-Font', 'sans-serif'],
}
```

### Content
Edit component files in `src/components/` to change:
- Text content
- Images (replace Unsplash URLs)
- Icons (use emoji or SVG)
- Section order

### Animations
Edit `src/index.css` for timing adjustments:
```css
:root {
  --transition-base: 0.3s ease; /* Adjust speed */
}
```

## 📦 Dependencies

### Production
- `react` - UI library
- `react-dom` - React DOM rendering
- `bootstrap` - Grid system

### Development
- `vite` - Build tool
- `@vitejs/plugin-react` - React plugin for Vite
- `tailwindcss` - CSS framework
- `postcss` - CSS processor
- `autoprefixer` - CSS vendor prefixing

## 🐛 Troubleshooting

### Build Fails
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Styles Not Loading
- Ensure `postcss.config.js` and `tailwind.config.js` exist
- Check that `index.css` imports Tailwind directives
- Clear browser cache

### Animations Not Working
- Check browser console for JavaScript errors
- Ensure Intersection Observer is supported (modern browsers)
- Verify `animate-on-scroll` class is applied to elements

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Support

For issues or questions:
- Check existing issues on GitHub
- Review this README thoroughly
- Contact via project repository

---

**Built with ❤️ using React, Tailwind CSS, and modern web technologies**
