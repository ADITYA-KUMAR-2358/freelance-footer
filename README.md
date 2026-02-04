# Invisia Contact Page

A modern, responsive contact page built with Next.js 16, TypeScript, and Tailwind CSS featuring a stunning glassmorphism design with orbital background animations.

![Next.js](https://img.shields.io/badge/Next.js-16.1.6-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-38bdf8?style=flat-square&logo=tailwind-css)

## ✨ Features

- 🎨 **Glassmorphism Design** - Modern frosted glass UI elements with backdrop blur effects
- 🌌 **Animated Background** - Dynamic orbital ring animations with gradient effects
- 📱 **Fully Responsive** - Optimized for all screen sizes from mobile to desktop
- 🎯 **Custom Dropdown** - Beautiful select component with glass effect and smooth animations
- ⚡ **Performance Optimized** - Built with Next.js 16 and Turbopack for fast development
- 🎭 **Smooth Animations** - Hover effects, transitions, and micro-interactions
- ♿ **Accessible** - Keyboard navigation and focus states
- 🔒 **Form Validation Ready** - Structure ready for form validation integration

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/invisia-contact.git
cd invisia-contact
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000/legal/contact-us](http://localhost:3000/legal/contact-us) in your browser.

## 📁 Project Structure

```
├── app/
│   ├── legal/
│   │   └── contact-us/
│   │       ├── page.tsx           # Main contact page component
│   │       └── CustomSelect.tsx   # Custom dropdown component
│   ├── components/
│   │   └── BackButton.tsx         # Back navigation button
│   ├── layout.tsx                 # Root layout
│   └── globals.css                # Global styles + custom scrollbar
├── public/
├── next.config.ts
├── tailwind.config.ts
└── package.json
```

## 🎨 Custom Components

### CustomSelect Component

A fully custom dropdown component with:
- Glassmorphism design
- Smooth open/close animations
- Click-outside-to-close functionality
- Custom scrollbar styling
- Keyboard accessible

```tsx
<CustomSelect 
  label="Subject" 
  options={[
    "General Inquiry",
    "Technical Support",
    "Partnership Opportunities",
    "Billing & Payments",
    "Feature Request",
    "Other"
  ]}
/>
```

### Form Components

- **Input** - Text/email input fields with focus states
- **Textarea** - Multi-line text input
- **CustomSelect** - Custom dropdown selector

## 🎯 Styling

### Color Palette

- **Primary Purple**: `#d36efa`
- **Dark Background**: `#050509`
- **Glass Effect**: `rgba(255, 255, 255, 0.15)` with `backdrop-blur-3xl`

### Custom Scrollbar

Add this to your `globals.css`:

```css
/* Custom Scrollbar for Dropdown */
.custom-dropdown-scroll::-webkit-scrollbar {
  width: 8px;
}

.custom-dropdown-scroll::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
}

.custom-dropdown-scroll::-webkit-scrollbar-thumb {
  background: rgba(211, 110, 250, 0.5);
  border-radius: 8px;
}

.custom-dropdown-scroll::-webkit-scrollbar-thumb:hover {
  background: rgba(211, 110, 250, 0.7);
}

/* Firefox scrollbar */
.custom-dropdown-scroll {
  scrollbar-width: thin;
  scrollbar-color: rgba(211, 110, 250, 0.5) rgba(255, 255, 255, 0.05);
}
```

## 🔧 Configuration

### Next.js Config

The project includes hydration warning suppression for development (caused by browser extensions):

```typescript
const nextConfig: NextConfig = {
  reactStrictMode: true,
  ...(process.env.NODE_ENV === 'development' && {
    onDemandEntries: {
      maxInactiveAge: 25 * 1000,
      pagesBufferLength: 2,
    },
  }),
};
```

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🛠️ Built With

- [Next.js 16](https://nextjs.org/) - React framework with Turbopack
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [React](https://react.dev/) - UI library

## 🚀 Deployment

### Deploy to Vercel

The easiest way to deploy is using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

```bash
npm run build
npm start
```

### Deploy to Netlify

```bash
npm run build
# Deploy the .next folder
```

## 🐛 Known Issues

- **Hydration Warning**: Browser extensions (like Grammarly) may cause hydration warnings in development. This is suppressed in the config and doesn't affect production.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🙏 Acknowledgments

- Design inspired by modern glassmorphism trends
- Orbital animations inspired by space-themed interfaces
- Color palette optimized for dark mode aesthetics

## 📧 Contact

For questions or support, please contact: support@invisia.io

---

Made with ❤️ by Invisia Team
