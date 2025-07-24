<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import Wholepage from "./components/Wholepage.vue";
import Navigation from "./components/Navigation.vue";
import HeroSection from "./components/HeroSection.vue";
import ContentSections from "./components/ContentSections.vue";
import ScrollToTop from "./components/ui/ScrollToTop.vue";

const skills = {
  languages: [
    { name: "JavaScript", logo: "javascript" },
    { name: "TypeScript", logo: "typescript" },
    { name: "MySQL", logo: "mysql" },
  ],
  frontend: [{ name: "Vue.js", logo: "vuedotjs" }],
  backend: [
    { name: "Nest.js", logo: "nestjs" },
    { name: "Node.js", logo: "nodedotjs" },
    { name: "Laravel", logo: "laravel" },
  ],
  db_orm: [
    { name: "Firebase", logo: "firebase" },
    { name: "Prisma", logo: "prisma" },
  ],
  dev_tools: [
    { name: "Git", logo: "git" },
    { name: "GitHub", logo: "github" },
    { name: "npm", logo: "npm" },
    { name: "Arduino", logo: "arduino" },
  ],
  design_prod: [
    { name: "Canva", logo: "canva" },
    { name: "Figma", logo: "figma" },
  ],
  office: [{ name: "Microsoft Office", logo: "microsoftoffice" }],
};

// Theme management
const isDarkMode = ref(true);

const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value;
  document.body.classList.toggle("light-mode", !isDarkMode.value);
};

// Active section for navigation highlighting
const activeSection = ref("home");

// Define the sections array for auto-scroll detection
const sections = [
  "home", // Changed from "hero" to match actual HTML id
  "about",
  "experience",
  "projects",
  "education",
  "leadership",
  "skills",
];

// Enhanced scroll function with consistent offset support
const scrollToSection = (sectionId) => {
  console.log(`Attempting to scroll to: ${sectionId}`);

  // Try the simple approach first (like your working hero buttons originally used)
  const element = document.getElementById(sectionId);
  if (element) {
    console.log(`Found element:`, element);

    // Use simple scrollIntoView method that we know works
    element.scrollIntoView({ behavior: "smooth", block: "start" });

    // Update active section after scroll animation starts
    setTimeout(() => {
      activeSection.value = sectionId;
      console.log(`Active section updated to: ${sectionId}`);
    }, 100);
  } else {
    console.error(`Section with id "${sectionId}" not found`);
    console.log(
      "Available elements with IDs:",
      Array.from(document.querySelectorAll("[id]")).map((el) => el.id)
    );
  }
};

// Update active section based on scroll position using Intersection Observer
let observer = null;

const setupIntersectionObserver = () => {
  // Clean up existing observer
  if (observer) {
    observer.disconnect();
  }

  const options = {
    root: document.querySelector(".portfolio-container"),
    rootMargin: "-20% 0px -70% 0px", // Trigger when section is 20% visible from top
    threshold: 0,
  };

  observer = new IntersectionObserver((entries) => {
    let mostVisibleSection = null;
    let maxVisibility = 0;

    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const sectionId = entry.target.id;

        // Calculate actual visibility based on intersection rectangle
        const rect = entry.intersectionRect;
        const targetRect = entry.boundingClientRect;
        const visibility =
          (rect.height * rect.width) / (targetRect.height * targetRect.width);

        console.log(`Section ${sectionId} visibility:`, visibility);

        if (visibility > maxVisibility && sections.includes(sectionId)) {
          maxVisibility = visibility;
          mostVisibleSection = sectionId;
        }
      }
    });

    // Update active section if we found a more visible one
    if (mostVisibleSection && mostVisibleSection !== activeSection.value) {
      activeSection.value = mostVisibleSection;
      console.log(`Active section updated to: ${mostVisibleSection}`);
    }
  }, options);

  // Observe all sections
  sections.forEach((sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      observer.observe(element);
      console.log(`Observing section: ${sectionId}`);
    }
  });
};

// Fallback scroll-based detection (simplified)
const updateActiveSection = () => {
  const scrollContainer = document.querySelector(".portfolio-container");
  if (!scrollContainer) {
    if (activeSection.value !== "home") {
      activeSection.value = "home";
    }
    return;
  }

  const scrollTop = scrollContainer.scrollTop;

  // If at the very top, always show home
  if (scrollTop < 100) {
    if (activeSection.value !== "home") {
      activeSection.value = "home";
      console.log(`Active section updated to: home (at top)`);
    }
  }
};

// Throttle function for better scroll performance
const throttle = (func, limit) => {
  let inThrottle;
  return function () {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

onMounted(() => {
  // Wait for the DOM to be ready
  setTimeout(() => {
    // Set up the Intersection Observer for more reliable detection
    setupIntersectionObserver();

    // Also keep the scroll-based fallback for edge cases
    const throttledUpdateActiveSection = throttle(updateActiveSection, 100);
    const scrollContainer = document.querySelector(".portfolio-container");

    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", throttledUpdateActiveSection, {
        passive: true,
      });
    }

    // Initial check to ensure we start with "home"
    activeSection.value = "home";
    console.log("Navigation initialized with home section active");
  }, 200);
});

onUnmounted(() => {
  // Clean up intersection observer
  if (observer) {
    observer.disconnect();
    observer = null;
  }

  // Clean up scroll listeners
  const throttledUpdateActiveSection = throttle(updateActiveSection, 100);
  const scrollContainer = document.querySelector(".portfolio-container");

  if (scrollContainer) {
    scrollContainer.removeEventListener("scroll", throttledUpdateActiveSection);
  }
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

  <!-- Scroll to Top Button -->
  <ScrollToTop />
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
  font-family:
    "Inter",
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    sans-serif;
  overflow-x: hidden;
  line-height: 1.6;
  transition: all 0.3s ease;
  margin: 0;
  padding: 0;
  min-height: 100vh;
  width: 100vw;
}

/* Light mode styles - Enhanced and Improved */
body.light-mode {
  background: linear-gradient(
    135deg,
    #ffffff 0%,
    #f8fafc 25%,
    #f1f5f9 50%,
    #e2e8f0 75%,
    #f8fafc 100%
  );
  color: #1f2937;
  transition: all 0.5s ease;
}

body.light-mode .portfolio-container {
  color: #1f2937;
  background: transparent;
}

/* Light mode stars/background effects - Completely hidden */
body.light-mode .stars-container {
  background: #ffffff !important;
  opacity: 1;
}

/* Remove all star styling in light mode */
body.light-mode .star,
body.light-mode .star:nth-child(3n),
body.light-mode .star:nth-child(5n) {
  display: none !important;
}

/* Light mode navigation - Premium glassmorphism */
body.light-mode .navigation {
  background: rgba(255, 255, 255, 0.95);
  border: 1px solid rgba(139, 92, 246, 0.15);
  backdrop-filter: blur(20px);
  box-shadow:
    0 8px 32px rgba(139, 92, 246, 0.1),
    0 0 0 1px rgba(255, 255, 255, 0.8);
}

body.light-mode .navigation:hover {
  background: rgba(255, 255, 255, 0.98);
  border-color: rgba(139, 92, 246, 0.3);
  box-shadow:
    0 12px 40px rgba(139, 92, 246, 0.15),
    0 0 0 1px rgba(255, 255, 255, 0.9);
}

/* Light mode navigation links */
body.light-mode .nav-link {
  color: #4b5563;
  background: transparent;
}

body.light-mode .nav-link.active,
body.light-mode .nav-link:hover {
  color: #1f2937;
  background: rgba(139, 92, 246, 0.1);
  box-shadow: 0 4px 20px rgba(139, 92, 246, 0.15);
  border: 1px solid rgba(139, 92, 246, 0.2);
}

/* Light mode navigation actions */
body.light-mode .nav-actions button {
  background: rgba(139, 92, 246, 0.1);
  border: 1px solid rgba(139, 92, 246, 0.2);
  color: #6b7280;
}

body.light-mode .nav-actions button:hover {
  color: #1f2937;
  background: rgba(139, 92, 246, 0.2);
  border-color: rgba(139, 92, 246, 0.4);
  box-shadow: 0 6px 20px rgba(139, 92, 246, 0.25);
}

/* Light mode hero section - Enhanced */
body.light-mode .hero-section {
  color: #1f2937;
}

body.light-mode .hero-name {
  background: linear-gradient(
    135deg,
    #1f2937 0%,
    #4338ca 25%,
    #6366f1 50%,
    #8b5cf6 75%,
    #a855f7 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

body.light-mode .hero-title {
  color: #374151;
}

body.light-mode .hero-handle {
  color: #8b5cf6;
}

/* Light mode social icons - Enhanced */
body.light-mode .social-icon {
  background: rgba(139, 92, 246, 0.15);
  border: 1px solid rgba(139, 92, 246, 0.3);
  color: #4b5563;
}

body.light-mode .social-icon:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(139, 92, 246, 0.4);
  background: rgba(139, 92, 246, 0.2);
  border-color: rgba(139, 92, 246, 0.5);
  color: #1f2937;
}

body.light-mode .email-btn {
  background: rgba(139, 92, 246, 0.15);
  border: 1px solid rgba(139, 92, 246, 0.3);
  color: #374151;
}

body.light-mode .email-btn:hover {
  background: rgba(139, 92, 246, 0.2);
  border-color: rgba(139, 92, 246, 0.5);
  color: #1f2937;
  box-shadow: 0 8px 25px rgba(139, 92, 246, 0.3);
}

/* Light mode content sections - Enhanced */
body.light-mode .content-section-base {
  color: #1f2937;
}

body.light-mode .content-section-base::before {
  background: rgba(255, 255, 255, 0.7);
  border-top: 1px solid rgba(139, 92, 246, 0.15);
  backdrop-filter: blur(15px);
}

body.light-mode .content-section-base:hover::before {
  background: rgba(255, 255, 255, 0.85);
  border-top-color: rgba(139, 92, 246, 0.3);
}

body.light-mode .content-section-base h3 {
  background: linear-gradient(
    135deg,
    #1f2937 0%,
    #4338ca 25%,
    #6366f1 50%,
    #8b5cf6 75%,
    #a855f7 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Light mode cards and components - Enhanced */
body.light-mode .skills-category {
  background: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(139, 92, 246, 0.2);
  color: #1f2937;
  box-shadow: 0 4px 15px rgba(139, 92, 246, 0.05);
}

body.light-mode .skills-category:hover {
  background: rgba(255, 255, 255, 0.95);
  border-color: rgba(139, 92, 246, 0.4);
  box-shadow: 0 8px 30px rgba(139, 92, 246, 0.2);
  transform: translateY(-3px);
}

body.light-mode .skills-category h4 {
  color: #1f2937;
  border-bottom-color: rgba(139, 92, 246, 0.4);
}

body.light-mode .skill-name {
  color: #374151;
}

/* Individual component overrides */
body.light-mode .experience-item,
body.light-mode .education-item,
body.light-mode .project-card {
  background: rgba(255, 255, 255, 0.8) !important;
  border: 1px solid rgba(139, 92, 246, 0.2) !important;
  color: #1f2937 !important;
  box-shadow: 0 4px 15px rgba(139, 92, 246, 0.05) !important;
}

body.light-mode .experience-item:hover,
body.light-mode .education-item:hover,
body.light-mode .project-card:hover {
  background: rgba(255, 255, 255, 0.95) !important;
  border-color: rgba(139, 92, 246, 0.4) !important;
  box-shadow: 0 8px 30px rgba(139, 92, 246, 0.2) !important;
}

body.light-mode .experience-item h4,
body.light-mode .education-item h4,
body.light-mode .project-card h4 {
  color: #1f2937 !important;
}

body.light-mode .experience-company,
body.light-mode .education-institution {
  color: #6b7280 !important;
}

body.light-mode .experience-description,
body.light-mode .education-description,
body.light-mode .project-description {
  color: #374151 !important;
}

body.light-mode .experience-period {
  color: #8b5cf6 !important;
}

body.light-mode .education-year {
  color: #22c55e !important;
}

body.light-mode .education-location {
  color: #6b7280 !important;
}

body.light-mode .experience-achievements li,
body.light-mode .education-achievements li {
  color: #374151 !important;
}

body.light-mode .leadership-item {
  background: rgba(255, 255, 255, 0.8) !important;
  border-left-color: #f59e0b !important;
  color: #1f2937 !important;
  box-shadow: 0 4px 15px rgba(245, 158, 11, 0.05) !important;
}

body.light-mode .leadership-item:hover {
  background: rgba(255, 255, 255, 0.95) !important;
  box-shadow: 0 8px 30px rgba(245, 158, 11, 0.2) !important;
}

body.light-mode .leadership-header h5 {
  color: #1f2937 !important;
}

body.light-mode .leadership-organization {
  color: #6b7280 !important;
}

body.light-mode .leadership-description {
  color: #374151 !important;
}

body.light-mode .leadership-period {
  color: #f59e0b !important;
}

body.light-mode .leadership-achievements li {
  color: #374151 !important;
}

body.light-mode .certification-card {
  background: rgba(255, 255, 255, 0.8) !important;
  border: 1px solid rgba(139, 92, 246, 0.2) !important;
  color: #1f2937 !important;
}

body.light-mode .certification-card:hover {
  background: rgba(255, 255, 255, 0.95) !important;
  border-color: rgba(139, 92, 246, 0.4) !important;
}

body.light-mode .certification-card h5 {
  color: #1f2937 !important;
}

body.light-mode .cert-issuer {
  color: #8b5cf6 !important;
}

body.light-mode .cert-year {
  color: #22c55e !important;
}

body.light-mode .cert-id {
  color: #6b7280 !important;
}

body.light-mode .contact-info {
  background: rgba(255, 255, 255, 0.8) !important;
  border: 1px solid rgba(139, 92, 246, 0.2) !important;
  color: #1f2937 !important;
  box-shadow: 0 4px 15px rgba(139, 92, 246, 0.05) !important;
}

body.light-mode .contact-info:hover {
  background: rgba(255, 255, 255, 0.95) !important;
  border-color: rgba(139, 92, 246, 0.4) !important;
  box-shadow: 0 8px 30px rgba(139, 92, 246, 0.2) !important;
}

body.light-mode .contact-info strong {
  color: #1f2937 !important;
}

body.light-mode .contact-info a {
  color: #8b5cf6 !important;
}

body.light-mode .contact-info a:hover {
  color: #6366f1 !important;
}

/* Light mode tech tags and skill items - Enhanced */
body.light-mode .tech-tag {
  background: rgba(139, 92, 246, 0.15) !important;
  border: 1px solid rgba(139, 92, 246, 0.4) !important;
  color: #6366f1 !important;
}

body.light-mode .tech-tag:hover {
  background: rgba(139, 92, 246, 0.25) !important;
  border-color: rgba(139, 92, 246, 0.6) !important;
  color: #4338ca !important;
}

body.light-mode .skill-item {
  background: rgba(139, 92, 246, 0.15) !important;
  color: #374151 !important;
}

body.light-mode .skill-item:hover {
  background: rgba(139, 92, 246, 0.25) !important;
  color: #1f2937 !important;
}

/* Light mode buttons - Enhanced */
body.light-mode .base-button.btn-primary,
body.light-mode .base-button.btn-secondary,
body.light-mode .btn-primary,
body.light-mode .btn-secondary {
  background: linear-gradient(135deg, #6366f1, #8b5cf6) !important;
  color: #fff !important;
  box-shadow: 0 8px 25px rgba(139, 92, 246, 0.4) !important;
}

body.light-mode .base-button:hover,
body.light-mode .btn-primary:hover,
body.light-mode .btn-secondary:hover {
  box-shadow: 0 12px 35px rgba(139, 92, 246, 0.5) !important;
}

/* Light mode profile photo - Enhanced */
body.light-mode .profile-photo,
body.light-mode .hero-photo {
  box-shadow: 0 25px 50px rgba(139, 92, 246, 0.4) !important;
  border-color: rgba(139, 92, 246, 0.3) !important;
}

body.light-mode .profile-photo:hover,
body.light-mode .hero-photo:hover {
  box-shadow: 0 30px 60px rgba(139, 92, 246, 0.5) !important;
}

/* Light mode scroll to top button */
body.light-mode .scroll-to-top {
  background: linear-gradient(135deg, #6366f1, #8b5cf6) !important;
  box-shadow: 0 8px 25px rgba(139, 92, 246, 0.4) !important;
}

body.light-mode .scroll-to-top:hover {
  box-shadow: 0 12px 35px rgba(139, 92, 246, 0.5) !important;
}

/* Light mode about description */
body.light-mode .about-description {
  color: #374151 !important;
}

body.light-mode .about-description p {
  color: #4b5563 !important;
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
  box-shadow:
    0 8px 32px rgba(139, 92, 246, 0.15),
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
  box-shadow:
    0 12px 40px rgba(139, 92, 246, 0.4),
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
  content: "";
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
  box-shadow:
    0 4px 20px rgba(139, 92, 246, 0.2),
    0 0 0 1px rgba(139, 92, 246, 0.1);
}

.nav-link.active,
.nav-link.active:hover {
  color: #fff;
  background: rgba(139, 92, 246, 0.15);
  box-shadow:
    0 4px 20px rgba(139, 92, 246, 0.3),
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
  box-shadow:
    0 8px 25px rgba(139, 92, 246, 0.2),
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
  box-shadow:
    0 8px 25px rgba(139, 92, 246, 0.3),
    0 0 20px rgba(139, 92, 246, 0.2),
    0 0 0 1px rgba(139, 92, 246, 0.1);
  background: rgba(139, 92, 246, 0.1);
  border-color: rgba(139, 92, 246, 0.3);
}

.social-icon.linkedin:hover {
  background: #0077b5;
  border-color: #0077b5;
  color: #fff;
  box-shadow:
    0 8px 25px rgba(0, 119, 181, 0.4),
    0 0 20px rgba(0, 119, 181, 0.3);
}

.social-icon.github:hover {
  background: #333;
  border-color: #333;
  color: #fff;
  box-shadow:
    0 8px 25px rgba(51, 51, 51, 0.4),
    0 0 20px rgba(51, 51, 51, 0.3);
}

.social-icon.email:hover {
  background: #ea4335;
  border-color: #ea4335;
  color: #fff;
  box-shadow:
    0 8px 25px rgba(234, 67, 53, 0.4),
    0 0 20px rgba(234, 67, 53, 0.3);
}

.social-icon.twitter:hover {
  background: #1da1f2;
  border-color: #1da1f2;
  color: #fff;
  box-shadow:
    0 8px 25px rgba(29, 161, 242, 0.4),
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
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.2),
    transparent
  );
  transition: left 0.5s;
}

.btn-primary:hover::before {
  left: 100%;
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow:
    0 12px 35px rgba(139, 92, 246, 0.4),
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
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.2),
    transparent
  );
  transition: left 0.5s;
}

.btn-secondary:hover::before {
  left: 100%;
}

.btn-secondary:hover {
  transform: translateY(-3px);
  box-shadow:
    0 12px 35px rgba(139, 92, 246, 0.4),
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
  box-shadow:
    0 8px 25px rgba(139, 92, 246, 0.2),
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
  background: transparent; /* Changed from inherit to transparent */
  display: flex;
  flex-direction: column;
  scroll-snap-type: y proximity;
  scroll-snap-stop: normal;
  overscroll-behavior: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  z-index: 10; /* Increased z-index but keep stars behind */
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

/* Light mode mobile menu improvements */
body.light-mode .mobile-menu-button {
  background: rgba(139, 92, 246, 0.1);
  border: 1px solid rgba(139, 92, 246, 0.2);
  color: #6b7280;
}

body.light-mode .mobile-menu-button:hover {
  background: rgba(139, 92, 246, 0.2);
  border-color: rgba(139, 92, 246, 0.4);
  color: #1f2937;
  box-shadow: 0 4px 15px rgba(139, 92, 246, 0.2);
}

body.light-mode .mobile-nav {
  background: rgba(255, 255, 255, 0.98) !important;
  backdrop-filter: blur(20px) !important;
  border: 1px solid rgba(139, 92, 246, 0.15) !important;
  box-shadow: 0 12px 40px rgba(139, 92, 246, 0.15) !important;
}

body.light-mode .mobile-nav-link {
  color: #4b5563 !important;
}

body.light-mode .mobile-nav-link:hover,
body.light-mode .mobile-nav-link.active {
  background: rgba(139, 92, 246, 0.1) !important;
  color: #1f2937 !important;
}

/* Light mode project features and tech stack improvements */
body.light-mode .project-features {
  color: #374151 !important;
}

body.light-mode .project-features h5 {
  color: #1f2937 !important;
}

body.light-mode .project-features li {
  color: #4b5563 !important;
}

body.light-mode .project-tech-stack {
  margin-bottom: 1.5rem;
}

/* Enhanced light mode gradients and shadows */
body.light-mode .hero-photo {
  background: linear-gradient(135deg, #6366f1, #8b5cf6, #a855f7) !important;
  box-shadow:
    0 25px 50px rgba(139, 92, 246, 0.3),
    0 0 0 4px rgba(255, 255, 255, 0.8),
    0 0 0 6px rgba(139, 92, 246, 0.2) !important;
}

body.light-mode .hero-photo:hover {
  box-shadow:
    0 30px 60px rgba(139, 92, 246, 0.4),
    0 0 0 4px rgba(255, 255, 255, 0.9),
    0 0 0 6px rgba(139, 92, 246, 0.3) !important;
}

/* Light mode skill items with better visual hierarchy */
body.light-mode .skill-item {
  background: rgba(255, 255, 255, 0.7) !important;
  border: 1px solid rgba(139, 92, 246, 0.15) !important;
  color: #374151 !important;
  box-shadow: 0 2px 8px rgba(139, 92, 246, 0.05) !important;
}

body.light-mode .skill-item:hover {
  background: rgba(255, 255, 255, 0.9) !important;
  border-color: rgba(139, 92, 246, 0.3) !important;
  color: #1f2937 !important;
  box-shadow: 0 4px 15px rgba(139, 92, 246, 0.15) !important;
  transform: translateY(-2px) !important;
}

/* Light mode about section enhancements */
body.light-mode .about-description {
  background: rgba(255, 255, 255, 0.8) !important;
  border: 1px solid rgba(139, 92, 246, 0.15) !important;
  border-radius: 12px !important;
  padding: 2rem !important;
  box-shadow: 0 4px 20px rgba(139, 92, 246, 0.05) !important;
}

body.light-mode .about-description:hover {
  background: rgba(255, 255, 255, 0.95) !important;
  border-color: rgba(139, 92, 246, 0.25) !important;
  box-shadow: 0 8px 30px rgba(139, 92, 246, 0.1) !important;
  transform: translateY(-2px) !important;
}

/* Light mode scroll indicator improvements */
body.light-mode .portfolio-container::-webkit-scrollbar {
  width: 6px;
}

body.light-mode .portfolio-container::-webkit-scrollbar-track {
  background: rgba(139, 92, 246, 0.1);
  border-radius: 3px;
}

body.light-mode .portfolio-container::-webkit-scrollbar-thumb {
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  border-radius: 3px;
}

body.light-mode .portfolio-container::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(135deg, #4338ca, #7c3aed);
}
</style>
