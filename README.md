# CrownPoint - Payment Gateway Application

**Version 2.0.0** 🚀✨

A modern, responsive web application for payment gateway and point of sale solutions, built with React.js and styled with Tailwind CSS. Inspired by Clover.com with a beautiful purple and white theme.

**NEW in v2.0**: Advanced 3D animations, particle effects, parallax scrolling, and stunning visual effects!

## Features

- 🎨 **Modern UI/UX** - Beautiful purple and white theme designed for payment gateway aesthetics
- 📱 **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile devices
- 🚀 **Fast Performance** - Optimized React components with efficient rendering
- 🔒 **Secure Design** - UI elements that convey trust and security
- 📊 **Analytics Ready** - Dashboard-ready components for business insights
- 🛍️ **Multiple Solutions** - Retail, Restaurant, E-commerce, and Mobile POS solutions

## Technology Stack

- **React.js** - Frontend framework
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - CSS processing
- **Create React App** - Build tooling

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (one-way operation)

## Project Structure

```
crownpoint/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header/
│   │   ├── Footer/
│   │   ├── Hero/
│   │   ├── Features/
│   │   ├── Stats/
│   │   ├── Testimonials/
│   │   └── CTA/
│   ├── pages/
│   │   ├── Home/
│   │   ├── Solutions/
│   │   ├── Hardware/
│   │   ├── Pricing/
│   │   └── Contact/
│   ├── App.js
│   ├── index.js
│   └── index.css
├── package.json
├── tailwind.config.js
└── postcss.config.js
```

## Pages

- **Home** - Landing page with hero section, features, stats, and testimonials
- **Solutions** - Overview of different business solutions (Retail, Restaurant, E-commerce, Mobile)
- **Hardware** - Payment terminal and hardware options
- **Pricing** - Pricing plans (Starter, Professional, Enterprise)
- **Contact** - Contact form and business information

## Color Theme

The application uses a purple and white color scheme:

- **Primary Purple**: `#7c3aed` (purple-600)
- **Dark Purple**: `#6d28d9` (purple-700)
- **Light Purple**: `#8b5cf6` (purple-500)
- **Background**: White and light gray tones
- **Accents**: Purple gradients and highlights

## Customization

### Changing Colors

Edit `tailwind.config.js` to modify the color scheme:

```javascript
colors: {
  primary: {
    // Your custom colors
  }
}
```

### Adding New Pages

1. Create a new component in `src/pages/`
2. Add a route in `src/App.js`
3. Add navigation link in `src/components/Header/Header.js`

## Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

### Deploy to Hosting Services

The `build` folder can be deployed to:
- Netlify
- Vercel
- AWS S3 + CloudFront
- GitHub Pages
- Any static hosting service

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Version History

### Version 2.0.0 (Current) 🚀
- **Advanced 3D Animations** - Interactive 3D card effects with mouse tracking
- **Particle Background System** - Animated floating particles
- **Parallax Scrolling** - Multi-layer parallax effects
- **Page Transitions** - Smooth animated page transitions
- **Loading Animations** - Beautiful multi-ring loading spinner
- **Animated Gradients** - Morphing gradient backgrounds
- **Enhanced Micro-interactions** - Advanced hover effects
- **GPU-Accelerated** - Optimized performance with hardware acceleration

### Version 1.0.0
- Initial stable release
- Complete multi-page application
- Industry-specific solutions (Liquor Stores, Retail, Restaurants, QSR)
- Hardware catalog with bundles
- Pricing plans
- Full animation system with Framer Motion
- Responsive design
- Security and compliance features

See [CHANGELOG.md](./CHANGELOG.md) for detailed version history.

## License

This project is created for CrownPoint payment gateway application.

## Support

For questions or support, please contact the development team.

---

**Version 2.0.0** - Built with ❤️ using React, Tailwind CSS, and Framer Motion with Advanced 3D Animations
