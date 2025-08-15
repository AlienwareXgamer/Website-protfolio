<script setup>
import { ref, onMounted, onUnmounted, nextTick } from "vue";
import Wholepage from "./components/Wholepage.vue";
import Navigation from "./components/Navigation.vue";
import HeroSection from "./components/HeroSection.vue";
import ContentSections from "./components/ContentSections.vue";
import ScrollToTop from "./components/ui/ScrollToTop.vue";
import Footer from "./components/Footer.vue";

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

const devLog = (...args) => { if (import.meta.env.DEV) console.log(...args); };

// Enhanced scroll function with consistent offset support
const scrollToSection = (sectionId) => {
  devLog(`Attempting to scroll to: ${sectionId}`);

  const element = document.getElementById(sectionId);
  const scrollContainer = document.querySelector(".portfolio-container");

  if (element && scrollContainer) {
    const navHeightVar = (typeof window !== 'undefined' ? window.getComputedStyle(document.documentElement).getPropertyValue('--nav-height') : '80px').trim();
    const navigationHeight = parseInt(navHeightVar.replace('px','')) || 80;
    const extraPadding = 20; // Additional breathing room
    const totalOffset = navigationHeight + extraPadding;

    // Get element position relative to the scroll container
    const containerRect = scrollContainer.getBoundingClientRect();
    const elementRect = element.getBoundingClientRect();
    const relativeTop =
      elementRect.top - containerRect.top + scrollContainer.scrollTop;
    const offsetPosition = relativeTop - totalOffset;

    // Scroll the container with custom offset
    scrollContainer.scrollTo({
      top: Math.max(0, offsetPosition),
      behavior: "smooth",
    });

    // Update active section after scroll animation starts
    setTimeout(() => {
      activeSection.value = sectionId;
      devLog(`Active section updated to: ${sectionId}`);
    }, 100);
  } else {
    devLog(
      `Section with id "${sectionId}" not found or scroll container missing`
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

        if (visibility > maxVisibility && sections.includes(sectionId)) {
          maxVisibility = visibility;
          mostVisibleSection = sectionId;
        }
      }
    });

    // Update active section if we found a more visible one
    if (mostVisibleSection && mostVisibleSection !== activeSection.value) {
      activeSection.value = mostVisibleSection;
      devLog(`Active section updated to: ${mostVisibleSection}`);
    }
  }, options);

  // Observe all sections
  sections.forEach((sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      observer.observe(element);
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
      devLog(`Active section updated to: home (at top)`);
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

onMounted(async () => {
  await nextTick();
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
  <a href="#home" class="skip-link">Skip to main content</a>
  <!-- Stars Background Animation -->
  <Wholepage />

  <!-- Navigation -->
  <Navigation
    :activeSection="activeSection"
    :isDarkMode="isDarkMode"
    @scroll-to-section="scrollToSection"
    @toggle-theme="toggleTheme"
  />

  <main class="portfolio-container" role="main" aria-labelledby="home-heading">
    <!-- Hero Section -->
    <HeroSection :isDarkMode="isDarkMode" @scroll-request="scrollToSection" />

    <!-- Content Sections -->
    <ContentSections :skills="skills" />
    <Footer @scroll-request="scrollToSection" />
  </main>

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
  color: var(--color-text-primary); /* use token so light mode updates automatically */
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
  transition: background 0.3s ease, color 0.3s ease;
  min-height: 100vh;
  width: 100vw;
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
  z-index: var(--z-nav);
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
    0 0 0 2px rgba(139, 92, 246, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

/* Portfolio scroll container */
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
  scrollbar-width: none;
  -ms-overflow-style: none;
  z-index: 10; /* Increased z-index but keep stars behind */
  /* Mobile-specific optimizations */
  -webkit-overflow-scrolling: touch; /* iOS smooth scrolling */
  will-change: scroll-position; /* Performance optimization */
  scroll-padding-top: var(--nav-height, 80px); /* add scroll padding for fixed nav */
}

/* Hide scrollbars but maintain scrollability */
.portfolio-container::-webkit-scrollbar {
  display: none;
}

/* Remove conflicting section styles since they're handled by ContentSectionBase */

/* Mobile-first responsive design improvements */
@media (max-width: 768px) {
  .navigation {
    padding: 0.75rem 1rem;
    backdrop-filter: blur(15px);
    background: rgba(0, 0, 0, 0.4);
    width: 95%;
    top: 0.5rem;
    justify-content: space-between;
    gap: 1rem;
    border-radius: 16px;
  }

  .navigation:hover {
    background: rgba(0, 0, 0, 0.7);
  }
}

@media (max-width: 480px) {
  .navigation {
    padding: 0.6rem 0.8rem;
    top: 0.25rem;
    width: 96%;
  }
}

.skip-link { position:absolute; left:-999px; top:auto; width:1px; height:1px; overflow:hidden; }
.skip-link:focus { position:fixed; left:50%; top:0.5rem; transform:translateX(-50%); width:auto; height:auto; padding:0.75rem 1rem; background:#000; color:#fff; font-weight:600; z-index:2000; border:2px solid var(--color-text-accent,#8b5cf6); border-radius:8px; box-shadow:0 6px 18px rgba(0,0,0,.5); }
body.light-mode .skip-link:focus { background:#ffffff; color:#1f2937; }
</style>
