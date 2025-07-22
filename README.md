# Francis Allen Prado Portfolio Website

This is a modern, stylish personal portfolio website for Francis Allen Prado, built with Vue 3 and Vite. It features a glassmorphic design, smooth scroll-snapping, dynamic navigation highlighting, interactive starfield animations, and both dark and light themes.

## ✨ Latest Updates (v1.0 - Complete Animations)

### 🌟 Starfield Animation System
- **Optimized Performance**: Reduced star count from 100 to 50 stars for 60fps performance
- **Dynamic Star Creation**: JavaScript-powered star generation with randomized positioning
- **Streamlined Animations**: 
  - Optimized twinkle effects with `will-change` properties
  - Simplified shooting star trails (reduced from 40+ shadows to 5 key shadows)
  - Parallax background star movement for depth
- **Accessibility**: `prefers-reduced-motion` support for users with motion sensitivity
- **Mobile Optimization**: Reduced animation complexity on devices ≤768px width

### 🎨 Enhanced UI Components
- **BaseButton**: Improved styling and interaction states
- **ScrollToTop**: Enhanced smooth scroll behavior with optimized animations
- **NavigationActions**: Streamlined action handling and visual feedback
- **Performance**: All components optimized with `will-change` for 60fps animations

### 📱 Responsive Design Improvements
- Mobile-first approach with progressive enhancement
- Optimized animations for different screen sizes
- Better touch interaction handling

## Features

- **Modern glassmorphism UI** with enhanced visual effects
- **Interactive starfield background** with optimized performance
- **Responsive and mobile-friendly** design
- **Scroll-snapping sections** for smooth navigation
- **Dynamic navigation highlighting** with enhanced visual feedback
- **Dark/Light mode toggle** with system preference detection
- **Performance optimized animations** running at 60fps
- **Accessibility compliant** with reduced motion support
- **Section-based layout**: Hero, About, Experience, Projects, Education, Leadership, Skills
- **Social/contact links** with hover effects

## Tech Stack

- **Frontend Framework**: [Vue 3](https://vuejs.org/) (Composition API, `<script setup>`)
- **Build Tool**: [Vite](https://vitejs.dev/) for fast development and optimized builds
- **Styling**: Modern CSS with:
  - CSS3 animations and transitions
  - Flexbox and Grid layouts
  - Custom properties (CSS variables)
  - Media queries for responsive design
  - Performance-optimized keyframes
- **Performance**: 60fps animations with `will-change` optimization
- **Accessibility**: WCAG compliant with motion sensitivity support

## 🚀 Performance Features

- **Optimized Star Count**: Reduced from 100 to 50 stars for better performance
- **Simplified Animations**: Streamlined keyframes and shadow effects
- **GPU Acceleration**: Strategic use of `transform3d` and `will-change`
- **Mobile Optimization**: Reduced animation complexity on smaller devices
- **Memory Efficient**: Minimal DOM manipulation and optimized re-renders

## Getting Started

1. **Clone the repository:**
   ```sh
   git clone https://github.com/AlienwareXgamer/Website-protfolio.git
   cd Website-protfolio
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Run the development server:**
   ```sh
   npm run dev
   ```

4. **Build for production:**
   ```sh
   npm run build
   ```

5. **Preview production build:**
   ```sh
   npm run preview
   ```

## 📁 Project Structure

```
src/
├── components/
│   ├── Wholepage.vue          # Main starfield animation component
│   ├── Navigation.vue         # Enhanced navigation with highlighting
│   ├── ui/                    # Reusable UI components
│   │   ├── BaseButton.vue     # Optimized button component
│   │   ├── ScrollToTop.vue    # Smooth scroll functionality
│   │   └── ...
│   ├── sections/              # Content sections
│   └── navigation/            # Navigation components
├── assets/                    # Static assets and icons
├── styles/                    # Global styles and themes
└── core/                      # Application constants and utilities
```

## 🎯 Recent Optimizations

### Animation Performance
- **60fps targeting**: All animations optimized for smooth 60fps performance
- **Reduced complexity**: Simplified shooting star trails and effects
- **Hardware acceleration**: Strategic use of CSS transforms and GPU layers
- **Memory management**: Efficient star creation and cleanup

### Code Quality
- **Clean architecture**: Modular component structure
- **Performance monitoring**: Console logging for animation system
- **Error handling**: Robust container validation and fallbacks
- **Accessibility**: Motion preference detection and fallbacks

## 🌐 Browser Compatibility

- **Modern browsers**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **Mobile browsers**: iOS Safari 14+, Chrome Mobile 90+
- **Performance**: Optimized for both desktop and mobile devices
- **Fallbacks**: Graceful degradation for older browsers

## Author

**Francis Allen Prado**  
- LinkedIn: [@francis.allen.dev](https://www.linkedin.com/in/francis-allen-prado)
- Email: francisallen148@gmail.com
- GitHub: [@AlienwareXgamer](https://github.com/AlienwareXgamer)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Built with ❤️ and optimized for performance**  
*Inspired by modern web design trends and built for a professional online presence.*
