# Francis Allen Prado Portfolio Website

> **📱 Important Note**: This is the **Desktop Version Build (Final Build V1.1)**. This version is optimized for desktop and larger screen viewing. Mobile version optimization is currently in development and will be released in a future update.

This is a modern, stylish personal portfolio website for Francis Allen Prado, built with Vue 3 and Vite. It features a glassmorphic design, smooth scroll-snapping, dynamic navigation highlighting, interactive starfield animations, and both dark and light themes with enhanced UI/UX design.

## 🖥️ Desktop Version Status

- ✅ **Desktop Optimized**: Fully optimized for desktop and laptop screens
- ✅ **Large Screen Support**: Perfect viewing experience on monitors 1024px and above
- 🚧 **Mobile Version**: Currently under development - mobile responsiveness improvements coming soon
- 🎯 **Target Devices**: Desktop computers, laptops, and tablets in landscape mode

## ✨ Latest Updates (v3.1 - Navigation & Auto-Scroll Improvements) - August 1, 2025

### 🎯 Enhanced Navigation & Auto-Scroll System

- **Fixed Auto-Scroll Functionality**: Resolved navigation link clicking issues where smooth scrolling was broken
- **Custom Scroll Container Support**: Updated scroll function to work with the portfolio's custom scroll container instead of window scrolling
- **Precise Section Targeting**: Navigation links now properly scroll to sections with accurate positioning
- **Navigation Bar Offset**: Added proper offset calculation (100px) to prevent section titles from being cut off by the fixed navigation bar
- **Smooth Scroll Animation**: Maintained smooth scrolling behavior while fixing positioning accuracy
- **Section Order Optimization**: Updated navigation order to match content flow (About → Skills → Experience → Projects → Education → Leadership)

### 🛠️ Technical Navigation Fixes

- **Container-Based Scrolling**: Modified `scrollToSection` function to use `.portfolio-container` element instead of window
- **Relative Position Calculations**: Improved element positioning relative to the scroll container
- **Enhanced Padding System**: Added strategic padding to prevent title cutting:
  - Desktop: 8rem top padding for content sections
  - Mobile: 4.5rem top padding optimized for smaller screens
  - Hero Section: 6rem top padding for proper navigation clearance
- **Cross-Device Compatibility**: Ensured scroll behavior works consistently across all screen sizes

### 🎨 Enhanced Visual Design System (Previous Updates)

- **Clean Color Palette**: Replaced messy gradients with cohesive solid colors
- **Typography Refinements**: Improved font sizes, spacing, and readability
- **Gradient Text Highlights**: Beautiful color-coded text highlighting for:
  - 🟦 **Key Skills** - Purple highlights for primary skills
  - 🔄 **Data Insights** - Cyan for analytics focus
  - 💚 **Technical Stack** - Green for technologies
  - 🟡 **Achievements** - Orange for accomplishments

### 🌟 Enhanced Hero Section

- **Structured Text Layout**: Replaced plain paragraphs with intelligent text segmentation
- **Visual Hierarchy**: Key phrases now stand out with color highlights
- **Optimized Spacing**: Reduced font sizes and margins to prevent overlapping
- **Responsive Typography**: Scales beautifully across all device sizes
- **Clean Presentation**: Professional layout that guides the eye naturally

### 📖 Improved About Section

- **Paragraph Structure**: Automatic text parsing into digestible sections
- **Rich Text Rendering**: Support for highlighted phrases within descriptions
- **Contact Info Fixes**: Resolved visibility issues for location and phone display
- **Enhanced Readability**: Better line spacing and font weights
- **Professional Narrative**: Comprehensive story showcasing education, experience, and community involvement

### 🎯 Light Mode Enhancements

- **Premium Glassmorphism**: Enhanced transparency and blur effects
- **Professional Color Scheme**: Sophisticated light theme with proper contrast
- **Plain White Background**: Clean starfield removal in light mode
- **Consistent Styling**: All components adapt beautifully to light theme
- **Enhanced Navigation**: Improved visibility and interaction states

### 🔧 Technical Improvements

- **Theme Toggle Visibility**: Fixed missing sun/moon icons in navigation
- **Contact Information Display**: Resolved template logic for proper data rendering
- **Responsive Design**: Better mobile experience with optimized spacing
- **Performance Optimization**: Cleaner CSS and reduced complexity

## Features

- **Modern glassmorphism UI** with enhanced visual effects
- **Interactive starfield background** with plain white light mode
- **Responsive and mobile-friendly** design with optimized typography
- **Scroll-snapping sections** for smooth navigation
- **Dynamic navigation highlighting** with enhanced visual feedback
- **Dark/Light mode toggle** with comprehensive theme support
- **Performance optimized animations** running at 60fps
- **Accessibility compliant** with reduced motion support
- **Section-based layout**: Hero, About, Experience, Projects, Education, Leadership, Skills
- **Enhanced visual hierarchy** with color-coded highlights
- **Professional contact display** with fixed visibility issues

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
_Inspired by modern web design trends and built for a professional online presence._
