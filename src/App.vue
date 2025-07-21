<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Wholepage from './components/Wholepage.vue'
import Navigation from './components/Navigation.vue'
import HeroSection from './components/HeroSection.vue'
import ContentSections from './components/ContentSections.vue'

const skills = {
  languages: [
    { name: 'JavaScript', logo: 'javascript' },
    { name: 'TypeScript', logo: 'typescript' },
    { name: 'MySQL', logo: 'mysql' },
  ],
  frontend: [
    { name: 'Vue.js', logo: 'vuedotjs' },
  ],
  backend: [
    { name: 'Nest.js', logo: 'nestjs' },
    { name: 'Node.js', logo: 'nodedotjs' },
    { name: 'Laravel', logo: 'laravel' },
  ],
  db_orm: [
    { name: 'Firebase', logo: 'firebase' },
    { name: 'Prisma', logo: 'prisma' },
  ],
  dev_tools: [
    { name: 'Git', logo: 'git' },
    { name: 'GitHub', logo: 'github' },
    { name: 'npm', logo: 'npm' },
    { name: 'Arduino', logo: 'arduino' },
  ],
  design_prod: [
    { name: 'Canva', logo: 'canva' },
    { name: 'Figma', logo: 'figma' },
  ],
   office: [
    { name: 'Microsoft Office', logo: 'microsoftoffice' },
  ]
};

// Theme management
const isDarkMode = ref(true)

const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value
  document.body.classList.toggle('light-mode', !isDarkMode.value)
}

// Active section for navigation highlighting
const activeSection = ref('home')

// Define the sections array for auto-scroll detection
const sections = ['hero', 'about', 'experience', 'education', 'leadership', 'projects', 'skills']

// Scroll to section function for navigation clicks
const scrollToSection = (sectionId) => {
  console.log(`Attempting to scroll to: ${sectionId}`);
  
  // Wait a bit to ensure DOM is fully rendered
  setTimeout(() => {
    const element = document.getElementById(sectionId);
    
    if (element) {
      console.log(`Found element:`, element);
      
      // Get the navigation height to offset scroll position
      const nav = document.querySelector('.navigation');
      const navHeight = nav ? nav.offsetHeight + 20 : 80; // 20px for extra spacing
      
      console.log(`Navigation height: ${navHeight}`);
      
      // Get the element's position relative to the document
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navHeight;
      
      console.log(`Element position: ${elementPosition}, Offset position: ${offsetPosition}`);
      
      // Smooth scroll to the section
      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: 'smooth'
      });
      
      // Update active section after scroll animation completes
      setTimeout(() => {
        activeSection.value = sectionId;
        console.log(`Active section updated to: ${sectionId}`);
      }, 100);
      
    } else {
      console.error(`Section with id "${sectionId}" not found`);
      console.log('Available elements with IDs:', Array.from(document.querySelectorAll('[id]')).map(el => el.id));
    }
  }, 100);
}

// Update active section based on scroll position
const updateActiveSection = () => {
  const scrollPosition = window.scrollY;
  const windowHeight = window.innerHeight;
  const offset = windowHeight * 0.3; // Trigger when section is 30% visible
  
  let newActiveSection = 'hero'; // Default to hero section
  
  sections.forEach(section => {
    const element = document.getElementById(section);
    if (element) {
      const rect = element.getBoundingClientRect();
      const elementTop = rect.top + scrollPosition;
      const elementBottom = elementTop + rect.height;
      
      // Check if section is prominently visible (accounting for navbar height)
      const navbarHeight = 80; // Approximate navbar height
      const adjustedScrollTop = scrollPosition + navbarHeight + offset;
      
      if (adjustedScrollTop >= elementTop && adjustedScrollTop < elementBottom) {
        newActiveSection = section;
      }
    }
  });
  
  // Special handling for the last section to ensure it gets highlighted when at bottom
  const lastSection = sections[sections.length - 1];
  const lastElement = document.getElementById(lastSection);
  if (lastElement) {
    const rect = lastElement.getBoundingClientRect();
    const isAtBottom = (window.innerHeight + scrollPosition) >= document.documentElement.scrollHeight - 10;
    if (isAtBottom) {
      newActiveSection = lastSection;
    }
  }
  
  if (newActiveSection !== activeSection.value) {
    activeSection.value = newActiveSection;
  }
};

// Throttle function for better scroll performance
const throttle = (func, limit) => {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

onMounted(() => {
  // Throttled scroll handler for better performance
  const throttledUpdateActiveSection = throttle(updateActiveSection, 50);
  
  window.addEventListener('scroll', throttledUpdateActiveSection, { passive: true });
  window.addEventListener('resize', throttledUpdateActiveSection, { passive: true });
  
  // Initial check
  updateActiveSection();
});

onUnmounted(() => {
  // Clean up throttled listeners
  const throttledUpdateActiveSection = throttle(updateActiveSection, 50);
  window.removeEventListener('scroll', throttledUpdateActiveSection);
  window.removeEventListener('resize', throttledUpdateActiveSection);
});
</script>

<template>
  <!-- Stars Background Animation -->
  <Wholepage />
  
  <!-- Navigation -->
  <Navigation 
    :activeSection="activeSection" 
    :isDarkMode="isDarkMode"
    @scroll-to-section="scrollToSection"
    @toggle-theme="toggleTheme"
  />
  
  <div class="portfolio-container">
    <!-- Hero Section -->
    <HeroSection :isDarkMode="isDarkMode" />

    <!-- Content Sections -->
    <ContentSections :skills="skills" />
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: linear-gradient(135deg, #0c0c0c 0%, #1a1a1a 50%, #0a0a0a 100%);
  color: #fff;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  overflow-x: hidden;
  line-height: 1.6;
  transition: all 0.3s ease;
  margin: 0;
  padding: 0;
  min-height: 100vh;
  width: 100vw;
}

/* Light mode styles */
body.light-mode {
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #f1f5f9 100%);
  color: #1f2937;
}

body.light-mode .portfolio-container {
  color: #1f2937;
}

body.light-mode .navigation {
  background: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.1);
}

body.light-mode .nav-link {
  color: #6b7280;
}

body.light-mode .nav-link.active,
body.light-mode .nav-link:hover {
  color: #1f2937;
}

body.light-mode .nav-actions button {
  background: rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.2);
  color: #6b7280;
}

body.light-mode .nav-actions button:hover {
  color: #1f2937;
  background: rgba(0, 0, 0, 0.15);
}

body.light-mode .hero-name {
  background: linear-gradient(135deg, #1f2937, #6b7280);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

body.light-mode .hero-title {
  color: #4b5563;
}

body.light-mode .content-section {
  color: #374151;
}

body.light-mode .content-section::before {
  background: rgba(0, 0, 0, 0.02);
  border: 1px solid rgba(0, 0, 0, 0.1);
}

body.light-mode .content-section h3 {
  background: linear-gradient(135deg, #1f2937, #8b5cf6);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

body.light-mode .skills-category {
  background: rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(0, 0, 0, 0.1);
}

body.light-mode .skills-category:hover {
  background: rgba(0, 0, 0, 0.08);
}

body.light-mode .experience-item,
body.light-mode .education-item,
body.light-mode .leadership-item {
  background: rgba(0, 0, 0, 0.03);
}

body.light-mode .contact-info {
  background: rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(0, 0, 0, 0.1);
}

body.light-mode .skill-group strong {
  color: #1f2937;
}

body.light-mode .skill-group span {
  color: #4b5563;
}

.skill-items {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 0.5rem;
}

.skill-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.1);
  padding: 0.25rem 0.75rem;
  border-radius: 8px;
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

.skill-item:hover {
  background: rgba(139, 92, 246, 0.2);
  transform: translateY(-2px);
}

.skill-logo {
  width: 16px;
  height: 16px;
  fill: currentColor;
}

/* Navigation */
.navigation {
  position: fixed;
  top: 1rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 1rem 2rem;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  z-index: 1000;
  transition: all 0.3s ease;
  width: 95%;
  max-width: 1200px;
  min-width: 320px;
}

.navigation:hover {
  background: rgba(0, 0, 0, 0.8);
  border-color: rgba(139, 92, 246, 0.3);
  box-shadow: 0 8px 32px rgba(139, 92, 246, 0.15),
              0 0 0 1px rgba(139, 92, 246, 0.1),
              inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

.nav-logo .logo-circle {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 16px;
  color: #fff;
  box-shadow: 0 8px 32px rgba(139, 92, 246, 0.3);
  transition: all 0.3s ease;
}

.nav-logo .logo-circle:hover {
  transform: scale(1.05);
  box-shadow: 0 12px 40px rgba(139, 92, 246, 0.4),
              0 0 0 2px rgba(139, 92, 246, 0.2),
              inset 0 1px 0 rgba(255, 255, 255, 0.2);
}

.nav-links {
  display: flex;
  gap: 2.5rem;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.nav-link {
  color: #a1a1aa;
  text-decoration: none;
  font-size: 15px;
  font-weight: 500;
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  padding: 0.5rem 1rem;
  border-radius: 8px;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #6366f1, #8b5cf6);
  transition: width 0.3s ease;
}

.nav-link:hover {
  color: #fff;
  background: rgba(139, 92, 246, 0.1);
  box-shadow: 0 4px 20px rgba(139, 92, 246, 0.2),
              0 0 0 1px rgba(139, 92, 246, 0.1);
}

.nav-link.active,
.nav-link.active:hover {
  color: #fff;
  background: rgba(139, 92, 246, 0.15);
  box-shadow: 0 4px 20px rgba(139, 92, 246, 0.3),
              0 0 0 1px rgba(139, 92, 246, 0.2);
}

.nav-actions {
  display: flex;
  gap: 1rem;
}

.nav-actions button {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #a1a1aa;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0.5rem;
  border-radius: 8px;
  backdrop-filter: blur(10px);
}

.nav-actions button:hover {
  color: #fff;
  background: rgba(255, 255, 255, 0.15);
  border-color: rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(139, 92, 246, 0.2),
              0 0 0 1px rgba(139, 92, 246, 0.1);
}

/* Hero Section */
.hero-section {
  width: 100%;
  margin: 0;
  padding: 2rem;
  color: #d5d5db;
  position: relative;
  box-sizing: border-box;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  scroll-snap-align: start;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.hero-content {
  max-width: 800px;
  width: 100%;
  padding: 0 1rem;
}

.hero-photo {
  width: 160px;
  height: 160px;
  border-radius: 50%;
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #a855f7 100%);
  margin: 0 auto 2rem;
  position: relative;
  overflow: hidden;
  box-shadow: 0 25px 50px rgba(139, 92, 246, 0.4);
  border: 4px solid rgba(255, 255, 255, 0.1);
  transition: all 0.5s ease;
}

.hero-photo:hover {
  transform: scale(1.05);
  box-shadow: 0 30px 60px rgba(139, 92, 246, 0.5);
}

.profile-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top; /* Focus on the top/face area of the image */
  border-radius: 50%;
}

.hero-photo::before {
  display: none; /* Hide the placeholder background when image is loaded */
}

.hero-name {
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
  color: #fff;
  letter-spacing: -0.03em;
  background: linear-gradient(135deg, #fff, #a1a1aa);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-handle {
  font-size: 1.1rem;
  color: #8b5cf6;
  margin-bottom: 1.5rem;
  font-weight: 600;
  opacity: 0.9;
}

/* Social Icons */
.social-icons {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 2rem;
}

.social-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #a1a1aa;
  text-decoration: none;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.social-icon:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(139, 92, 246, 0.3),
              0 0 20px rgba(139, 92, 246, 0.2),
              0 0 0 1px rgba(139, 92, 246, 0.1);
  background: rgba(139, 92, 246, 0.1);
  border-color: rgba(139, 92, 246, 0.3);
}

.social-icon.linkedin:hover {
  background: #0077b5;
  border-color: #0077b5;
  color: #fff;
  box-shadow: 0 8px 25px rgba(0, 119, 181, 0.4),
              0 0 20px rgba(0, 119, 181, 0.3);
}

.social-icon.github:hover {
  background: #333;
  border-color: #333;
  color: #fff;
  box-shadow: 0 8px 25px rgba(51, 51, 51, 0.4),
              0 0 20px rgba(51, 51, 51, 0.3);
}

.social-icon.email:hover {
  background: #ea4335;
  border-color: #ea4335;
  color: #fff;
  box-shadow: 0 8px 25px rgba(234, 67, 53, 0.4),
              0 0 20px rgba(234, 67, 53, 0.3);
}

.social-icon.twitter:hover {
  background: #1da1f2;
  border-color: #1da1f2;
  color: #fff;
  box-shadow: 0 8px 25px rgba(29, 161, 242, 0.4),
              0 0 20px rgba(29, 161, 242, 0.3);
}

.hero-title {
  font-size: 1.25rem;
  color: #d1d5db;
  margin-bottom: 3rem;
  line-height: 1.6;
  font-weight: 400;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
}

.hero-buttons {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  margin-bottom: 2.5rem;
}

.btn-primary {
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  color: #fff;
  border: none;
  padding: 1rem 2rem;
  border-radius: 12px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 8px 25px rgba(139, 92, 246, 0.3);
  position: relative;
  overflow: hidden;
}

.btn-primary::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s;
}

.btn-primary:hover::before {
  left: 100%;
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 35px rgba(139, 92, 246, 0.4),
              0 0 20px rgba(139, 92, 246, 0.3),
              0 0 0 1px rgba(139, 92, 246, 0.2);
}

.btn-secondary {
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  color: #fff;
  border: none;
  padding: 1rem 2rem;
  border-radius: 12px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 8px 25px rgba(139, 92, 246, 0.3);
  position: relative;
  overflow: hidden;
}

.btn-secondary::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s;
}

.btn-secondary:hover::before {
  left: 100%;
}

.btn-secondary:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 35px rgba(139, 92, 246, 0.4),
              0 0 20px rgba(139, 92, 246, 0.3),
              0 0 0 1px rgba(139, 92, 246, 0.2);
}

.hero-contact {
  display: flex;
  justify-content: center;
}

.email-btn {
  background: rgba(255, 255, 255, 0.05);
  color: #9ca3af;
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 0.75rem 1.5rem;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.email-btn:hover {
  background: rgba(255, 255, 255, 0.1);
  color: #d1d5db;
  border-color: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(139, 92, 246, 0.2),
              0 0 15px rgba(139, 92, 246, 0.15);
}

/* Portfolio Container */
.portfolio-container {
  height: 100vh;
  width: 100vw;
  overflow-y: auto;
  overflow-x: hidden; /* Prevent horizontal scroll */
  scroll-behavior: smooth;
  position: fixed;
  top: 0;
  left: 0;
  background: inherit;
  display: flex;
  flex-direction: column;
  scroll-snap-type: y proximity;
  scroll-snap-stop: normal;
  overscroll-behavior: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  z-index: 1;
}

.portfolio-container::-webkit-scrollbar {
  display: none;
}

/* Remove conflicting section styles since they're handled by ContentSectionBase */
.hero-section {
  width: 100%;
  margin: 0;
  padding: 2rem;
  color: #d5d5db;
  position: relative;
  box-sizing: border-box;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  scroll-snap-align: start;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Remove duplicate .content-section styles - they're handled by ContentSectionBase.vue */
</style>