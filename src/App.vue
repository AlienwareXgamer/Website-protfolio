<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Theme management
const isDarkMode = ref(true)

const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value
  document.body.classList.toggle('light-mode', !isDarkMode.value)
}

// Active section for navigation highlighting
const activeSection = ref('home')
let observer;

// Smooth scroll snap functionality
let isScrolling = false;
let scrollTimer = null;

const handleWheelScroll = (e) => {
  e.preventDefault();
  
  if (isScrolling) return;
  
  const container = document.querySelector('.portfolio-container');
  const sections = document.querySelectorAll('.hero-section, .content-section');
  const currentScrollTop = container.scrollTop;
  
  // Find current section
  let currentSectionIndex = 0;
  sections.forEach((section, index) => {
    if (section.offsetTop <= currentScrollTop + 100) {
      currentSectionIndex = index;
    }
  });
  
  // Determine scroll direction
  const isScrollingDown = e.deltaY > 0;
  
  // Calculate target section
  let targetSectionIndex;
  if (isScrollingDown && currentSectionIndex < sections.length - 1) {
    targetSectionIndex = currentSectionIndex + 1;
  } else if (!isScrollingDown && currentSectionIndex > 0) {
    targetSectionIndex = currentSectionIndex - 1;
  } else {
    return; // Already at the edge
  }
  
  // Scroll to target section
  const targetSection = sections[targetSectionIndex];
  isScrolling = true;
  
  container.scrollTo({
    top: targetSection.offsetTop,
    behavior: 'smooth'
  });
  
  // Reset scrolling flag after animation
  setTimeout(() => {
    isScrolling = false;
  }, 800);
};

onMounted(() => {
  const sections = document.querySelectorAll('section[id]');
  const container = document.querySelector('.portfolio-container');
  
  const observerOptions = {
    root: container,
    rootMargin: '0px',
    threshold: 0.5
  };

  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        activeSection.value = entry.target.id;
      }
    });
  }, observerOptions);

  sections.forEach(section => {
    observer.observe(section);
  });
  
  // Add wheel event listener for smooth snap scrolling
  container.addEventListener('wheel', handleWheelScroll, { passive: false });
});

onUnmounted(() => {
  if (observer) {
    observer.disconnect();
  }
  
  const container = document.querySelector('.portfolio-container');
  if (container) {
    container.removeEventListener('wheel', handleWheelScroll);
  }
});

// Smooth scroll to section
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  const container = document.querySelector('.portfolio-container');
  if (element && container) {
    container.scrollTo({ 
      top: element.offsetTop,
      behavior: 'smooth'
    });
  }
}
</script>

<template>
  <div class="portfolio-container">
    <!-- Navigation -->
    <nav class="navigation">
      <div class="nav-logo">
        <div class="logo-circle">FP</div>
      </div>
      <div class="nav-links">
        <a href="#home" class="nav-link" :class="{ active: activeSection === 'home' }" @click.prevent="scrollToSection('home')">Home</a>
        <a href="#about" class="nav-link" :class="{ active: activeSection === 'about' }" @click.prevent="scrollToSection('about')">About</a>
        <a href="#experience" class="nav-link" :class="{ active: activeSection === 'experience' }" @click.prevent="scrollToSection('experience')">Experience</a>
        <a href="#projects" class="nav-link" :class="{ active: activeSection === 'projects' }" @click.prevent="scrollToSection('projects')">Projects</a>
        <a href="#education" class="nav-link" :class="{ active: activeSection === 'education' }" @click.prevent="scrollToSection('education')">Education</a>
        <a href="#leadership" class="nav-link" :class="{ active: activeSection === 'leadership' }" @click.prevent="scrollToSection('leadership')">Leadership</a>
        <a href="#skills" class="nav-link" :class="{ active: activeSection === 'skills' }" @click.prevent="scrollToSection('skills')">Skills</a>
      </div>
      <div class="nav-actions">
        <button class="theme-btn" @click="toggleTheme">
          {{ isDarkMode ? '☀️' : '🌙' }}
        </button>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="hero-section" id="home">
      <div class="hero-content">
        <div class="hero-photo"></div>
        <h1 class="hero-name">Francis Allen A. Prado</h1>
        <p class="hero-handle">@francis.allen.dev</p>
        
        <!-- Social Icons -->
        <div class="social-icons">
          <a href="https://www.linkedin.com/in/francis-allen-prado" target="_blank" class="social-icon linkedin">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a href="https://github.com/francis-allen-prado" target="_blank" class="social-icon github">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a href="mailto:francisallen148@gmail.com" class="social-icon email">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h1.25L12 9.958l9.114-6.137h1.25c.904 0 1.636.732 1.636 1.636z"/>
            </svg>
          </a>
          <a href="https://twitter.com/francis_allen_dev" target="_blank" class="social-icon twitter">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
            </svg>
          </a>
        </div>
        
        <p class="hero-title">Fullstack & ML Engineer | BS CS from Ateneo University</p>
        <div class="hero-buttons">
          <button class="btn-secondary">View my work</button>
        </div>
        <div class="hero-contact">
          <button class="email-btn">Email ✉</button>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="content-section about-section" id="about">
      <h3>About</h3>
      <p>Experienced web developer and data analyst with a strong foundation in public sector projects, volunteer leadership, and technical skills. Passionate about building scalable web solutions and contributing to community-driven tech initiatives.</p>
      <div class="contact-info">
        <p><strong>Location:</strong> Davao City, Philippines Davao del Sur Roxas Avenue, 8000</p>
        <p><strong>Email:</strong> <a href="mailto:francisallen148@gmail.com">francisallen148@gmail.com</a></p>
        <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/francis-allen-prado" target="_blank">www.linkedin.com/in/francis-allen-prado</a></p>
      </div>
    </section>

    <!-- Work Experience Section -->
    <section class="content-section experience-section" id="experience">
      <h3>Work Experience</h3>
      <div class="experience-item">
        <strong>Globe Telecom Inc. | Davao</strong><br>
        <em>Data Analyst | January 2025 - May 2025</em>
        <ul>
          <li>Managed lessor data for assigned locations, primarily in the Mindanao and Visayas regions.</li>
          <li>Contributed to the making of the prototype updated lessor management system.</li>
        </ul>
      </div>
    </section>

    <!-- Projects Section -->
    <section class="content-section projects-section" id="projects">
      <h3>Projects</h3>
      <div class="experience-item">
        <strong>Fullstack Granville 2 Subdivision | Ateneo Thesis Project</strong><br>
        <em>Web-based Homeowner and Guest Tracking System | June 2024 - December 2024</em>
        <ul>
          <li>Developed a Web-based Homeowner and Guest Tracking System for residential subdivision security using RFID and QR Code.</li>
        </ul>
      </div>
      <div class="experience-item">
        <strong>Dormitory Management System | Ateneo System Integration Development Project</strong><br>
        <em>Web-based System | January 2023 - May 2023</em>
        <ul>
          <li>Developed a Web-based Management System for tenants' ease of access to their bills like water, electricity, wifi, request for repairs and for logging of past and present tenants data.</li>
        </ul>
      </div>
    </section>

    <!-- Education Section -->
    <section class="content-section education-section" id="education">
      <h3>Education</h3>
      <div class="education-item">
        <strong>Ateneo de Davao University</strong><br>
        Bachelor of Science in Information Technology
      </div>
      <div class="education-item">
        <strong>Notre Dame of Midsayap College</strong><br>
        SeniorHS, TVL Computer System Servicing
      </div>
    </section>

    <!-- Leadership & Other Affiliations Section -->
    <section class="content-section leadership-section" id="leadership">
      <h3>Leadership & Volunteer Experience</h3>
      <div class="leadership-item">
        <strong>UI/UX Davao Organization | Davao Volunteer | 2024 - 2025</strong>
        <p><em>Volunteered for multiple events, including "UXACTLY Your Path to Being the Exact Fit at Work" (May 2025), "UXD Women Who Design" (March 2025), "UXD Project Management" (February 2025), "Web Accessibility Workshop" (February 2024), "Level up your Prototypes in Figma" (August 2024), and "UX Portfolio Pasko" (December 2024).</em></p>
      </div>
      <div class="leadership-item">
        <strong>Google Developers Group | Davao Volunteer | 2023</strong>
        <p><em>Volunteered in the 2023 GDG Convention.</em></p>
      </div>
      <div class="leadership-item">
        <strong>IT Week 2025 (SysDev Committee Member) | 2025</strong>
        <p><em>In recognition of invaluable contributions as SysDev Committee Member during IT Week 2025.</em></p>
      </div>
      <div class="leadership-item">
        <strong>Google I/O Extended Davao 2024 | 2024</strong>
        <p><em>For dedicated volunteer service and instrumental role in the seamless execution of Google I/O Extended Davao 2024.</em></p>
      </div>
      <div class="leadership-item">
        <strong>DevFest Davao 2023 | 2023</strong>
        <p><em>For dedicated volunteer service, significantly contributing to the success of DevFest Davao 2023.</em></p>
      </div>
    </section>

    <!-- Certifications & Achievements Section -->
    <section class="content-section certifications-section">
      <h3>Certifications & Achievements</h3>
      <div class="leadership-item">
        <strong>CS Alumni Connect Talk/Workshop Series | 2021</strong>
        <p><em>For participation in the "Dissecting the Full Stack: Front-end Development" Talk/Workshop.</em></p>
      </div>
      <div class="leadership-item">
        <strong>Ateneo Sui Generis Leadership Online Hub | 2020</strong>
        <p><em>For active participation during the Ateneo Sui Generis Leadership Online Hub 2020.</em></p>
      </div>
      <div class="leadership-item">
        <strong>Cisco Networking Basics Certification</strong>
        <p><em>Certified in Cisco Networking Basics</em></p>
      </div>
    </section>

    <!-- Skills Section -->
    <section class="content-section skills-section" id="skills">
      <h3>Technical Skills</h3>
      <div class="skills-grid">
        <div class="skills-category">
          <h4>Programming Languages</h4>
          <div class="skill-group">
            <strong>Languages:</strong>
            <span>JavaScript, TypeScript, MySQL</span>
          </div>
        </div>
        
        <div class="skills-category">
          <h4>Frameworks & Tools</h4>
          <div class="skill-group">
            <strong>Frontend:</strong>
            <span>Vue.js</span>
          </div>
          <div class="skill-group">
            <strong>Backend:</strong>
            <span>Nest.js, Node.js, Laravel</span>
          </div>
          <div class="skill-group">
            <strong>Database & ORM:</strong>
            <span>Firebase Firestore, Prisma</span>
          </div>
          <div class="skill-group">
            <strong>Development Tools:</strong>
            <span>Git, GitHub, npm, Arduino IDE</span>
          </div>
        </div>
        
        <div class="skills-category">
          <h4>Design & Productivity</h4>
          <div class="skill-group">
            <strong>Design Tools:</strong>
            <span>Canva, Figma</span>
          </div>
          <div class="skill-group">
            <strong>Office Suite:</strong>
            <span>Microsoft Office (Proficient with Pivot Tables)</span>
          </div>
        </div>
        
        <div class="skills-category">
          <h4>Hardware & Networking</h4>
          <p>Skilled in diagnosing and repairing devices, updating systems, and installing drivers.</p>
          <p>Experienced in troubleshooting Network and Wi-Fi configurations.</p>
        </div>
        
        <div class="skills-category">
          <h4>Languages</h4>
          <p>English (Basic communication skills)</p>
        </div>
      </div>
    </section>
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

.portfolio-container {
  height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  width: 100%;
  position: relative;
  background: inherit;
  display: flex;
  flex-direction: column;
  /* Custom scrollbar for portfolio container */
  scrollbar-width: thin;
  scrollbar-color: #8b5cf6 #18181b;
  /* Hide scrollbar for Firefox */
  scrollbar-width: none;
  /* Enhanced scroll snap properties */
  scroll-snap-stop: always;
  overscroll-behavior: contain;
}

/* Hide scrollbar for Chrome, Edge, Safari */
.portfolio-container::-webkit-scrollbar {
  display: none;
}

/* Chrome, Edge, Safari */
.portfolio-container::-webkit-scrollbar {
  width: 10px;
}
.portfolio-container::-webkit-scrollbar-track {
  background: #18181b;
  border-radius: 10px;
}
.portfolio-container::-webkit-scrollbar-thumb {
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  border-radius: 10px;
  border: 2px solid #18181b;
}

body.light-mode .portfolio-container::-webkit-scrollbar-track {
  background: #e2e8f0;
}
body.light-mode .portfolio-container::-webkit-scrollbar-thumb {
  background: linear-gradient(135deg, #8b5cf6, #6366f1);
  border: 2px solid #e2e8f0;
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
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  text-align: center;
  padding: 2rem;
  box-sizing: border-box;
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

.hero-photo::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90px;
  height: 90px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  backdrop-filter: blur(10px);
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

.hero-section,
.content-section {
  scroll-snap-align: start;
  scroll-snap-stop: always;
  width: 95%;
  max-width: 1200px;
  min-width: 320px;
  margin: 0 auto;
  padding: 8rem 2rem 4rem;
  color: #d1d5db;
  position: relative;
  box-sizing: border-box;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* Smooth transition for section changes */
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.content-section {
  scroll-margin-top: 0; /* Reset for better snap alignment */
}

.content-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  z-index: -1;
  transition: all 0.3s ease;
}

.content-section:hover::before {
  background: rgba(255, 255, 255, 0.04);
  border-color: rgba(139, 92, 246, 0.2);
  box-shadow: 0 8px 32px rgba(139, 92, 246, 0.1);
}

.content-section h3 {
  color: #fff;
  margin-bottom: 2.5rem;
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  background: linear-gradient(135deg, #fff, #8b5cf6);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
}

.content-section h3::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, #6366f1, #8b5cf6);
  border-radius: 2px;
}

.contact-info {
  background: rgba(255, 255, 255, 0.08);
  padding: 2rem;
  border-radius: 16px;
  margin-top: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.contact-info:hover {
  background: rgba(255, 255, 255, 0.12);
  border-color: rgba(139, 92, 246, 0.3);
  box-shadow: 0 8px 25px rgba(139, 92, 246, 0.15),
              0 0 0 1px rgba(139, 92, 246, 0.1);
  transform: translateY(-2px);
}

.contact-info p {
  margin-bottom: 0.75rem;
  font-size: 1.1rem;
}

.contact-info a {
  color: #8b5cf6;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
}

.contact-info a:hover {
  color: #a855f7;
  text-decoration: underline;
}

.experience-item,
.education-item,
.leadership-item {
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  border-left: 4px solid #8b5cf6;
  transition: all 0.3s ease;
  position: relative;
}

.experience-item:hover,
.education-item:hover,
.leadership-item:hover {
  background: rgba(255, 255, 255, 0.08);
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(139, 92, 246, 0.15),
              0 0 15px rgba(139, 92, 246, 0.1),
              0 0 0 1px rgba(139, 92, 246, 0.1);
  border-left-color: #a855f7;
}

.experience-item::before,
.education-item::before,
.leadership-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 12px;
  background: linear-gradient(135deg, rgba(139, 92, 246, 0.1), transparent);
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
}

.experience-item:hover::before,
.education-item:hover::before,
.leadership-item:hover::before {
  opacity: 1;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  width: 100%;
}

.skills-category {
  background: rgba(255, 255, 255, 0.08);
  padding: 2rem;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(15px);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.skills-category::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, #6366f1, #8b5cf6, #a855f7);
  border-radius: 20px 20px 0 0;
  transition: all 0.3s ease;
}

.skills-category:hover {
  transform: translateY(-8px);
  background: rgba(255, 255, 255, 0.12);
  border-color: rgba(139, 92, 246, 0.3);
  box-shadow: 0 25px 50px rgba(139, 92, 246, 0.2),
              0 0 30px rgba(139, 92, 246, 0.15),
              0 0 0 1px rgba(139, 92, 246, 0.1);
}

.skills-category:hover::before {
  height: 4px;
  box-shadow: 0 0 15px rgba(139, 92, 246, 0.5);
}

.skills-category h4 {
  color: #fff;
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  text-align: center;
  background: linear-gradient(135deg, #fff, #8b5cf6);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.skill-group {
  margin-bottom: 1.5rem;
  line-height: 1.8;
  position: relative;
  padding-left: 1.5rem;
  transition: all 0.3s ease;
  border-radius: 8px;
  padding: 0.5rem 0.5rem 0.5rem 1.5rem;
}

.skill-group::before {
  content: '▸';
  position: absolute;
  left: 0.5rem;
  top: 0.5rem;
  color: #8b5cf6;
  font-weight: bold;
  transition: all 0.3s ease;
}

.skill-group:hover {
  background: rgba(139, 92, 246, 0.1);
  padding-left: 2rem;
  box-shadow: 0 4px 15px rgba(139, 92, 246, 0.1),
              0 0 0 1px rgba(139, 92, 246, 0.05);
}

.skill-group:hover::before {
  color: #a855f7;
  transform: scale(1.2);
  left: 0.7rem;
  text-shadow: 0 0 8px rgba(139, 92, 246, 0.5);
}

.skill-group strong {
  color: #fff;
  display: block;
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
  font-weight: 600;
}

.skill-group span {
  color: #d1d5db;
  font-size: 1rem;
}

/* Responsive */
@media (max-width: 1024px) {
  .content-section {
    max-width: 900px;
    width: 90%;
    padding: 6rem 1.5rem 3rem;
    min-height: 100vh;
  }
  
  .skills-grid {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
  }
  
  .navigation {
    padding: 1rem 1.5rem;
    width: 90%;
  }
  
  .nav-links {
    gap: 1.5rem;
  }
}

@media (max-width: 768px) {
  .navigation {
    padding: 1rem 1.5rem;
    backdrop-filter: blur(15px);
    width: 95%;
    top: 0.5rem;
  }
  
  .nav-links {
    display: none;
  }
  
  .hero-name {
    font-size: 2.5rem;
  }
  
  .hero-title {
    font-size: 1.2rem;
  }
  
  .hero-buttons {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
  
  .btn-primary,
  .btn-secondary {
    width: 100%;
    max-width: 280px;
    font-size: 1rem;
    padding: 1rem 2rem;
  }
  
  .social-icons {
    gap: 1.5rem;
  }
  
  .social-icon {
    width: 40px;
    height: 40px;
  }

  .content-section {
    padding: 5rem 1rem 2rem;
    margin: 0;
    max-width: 100%;
    width: 95%;
    min-height: 100vh;
  }

  .content-section h3 {
    font-size: 2rem;
  }

  .skills-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .skills-category {
    padding: 1.5rem;
  }

  .hero-profile-img {
    width: 180px;
    height: 180px;
  }
}

@media (max-width: 480px) {
  .hero-name {
    font-size: 2rem;
  }
  
  .hero-title {
    font-size: 1rem;
  }
  
  .content-section {
    padding: 4rem 0.5rem 2rem;
    margin: 0;
    min-height: 100vh;
  }
  
  .content-section h3 {
    font-size: 1.8rem;
  }
  
  .navigation {
    padding: 0.8rem 1rem;
  }
  
  .nav-logo .logo-circle {
    width: 35px;
    height: 35px;
    font-size: 14px;
  }
}

@media (min-width: 1440px) {
  .content-section {
    max-width: 1400px;
    width: 95%;
    padding: 8rem 3rem 4rem;
    min-height: 100vh;
  }
  
  .skills-grid {
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2.5rem;
  }
  
  .hero-content {
    max-width: 1000px;
  }
}

/* Remove bullet points from experience and leadership items */
.experience-item ul,
.leadership-item ul {
  margin-top: 1rem;
  margin-left: 1.5rem;
  list-style: none;
}

.experience-item li,
.leadership-item li {
  margin-bottom: 0.5rem;
  line-height: 1.6;
  position: relative;
  padding-left: 0;
}

.experience-item li::before,
.leadership-item li::before {
  display: none;
}
</style>
