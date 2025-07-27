<script setup>
import ProfilePhoto from "./ui/ProfilePhoto.vue";
import HeroIdentity from "./ui/HeroIdentity.vue";
import SocialIcons from "./ui/SocialIcons.vue";
import BaseButton from "./ui/BaseButton.vue";

defineProps({
  isDarkMode: Boolean,
});

// Simple, reliable scroll function (same as navigation now uses)
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

const openEmail = () => {
  window.location.href = "mailto:francisallen148@gmail.com";
};
</script>

<template>
  <section class="hero-section" id="home">
    <div class="hero-content">
      <ProfilePhoto size="large" />

      <HeroIdentity name="Francis Allen Prado" handle="@francis_allen_dev" />

      <div class="social-icons hero-contact-inline">
        <a
          class="social-icon"
          href="mailto:francisallen148@gmail.com"
          title="Email"
        >
          <i class="fas fa-envelope"></i>
        </a>
        <a
          class="social-icon"
          href="https://www.linkedin.com/in/francis-allen-prado"
          target="_blank"
          title="LinkedIn"
        >
          <i class="fab fa-linkedin"></i>
        </a>
        <a
          class="social-icon"
          href="https://github.com/AlienwareXgamer"
          target="_blank"
          title="GitHub"
        >
          <i class="fab fa-github"></i>
        </a>
        <a
          class="social-icon"
          href="https://twitter.com/francis_allen_dev"
          target="_blank"
          title="Twitter"
        >
          <i class="fab fa-twitter"></i>
        </a>
        <a class="social-icon" href="tel:+639762404193" title="Call">
          <i class="fas fa-phone"></i>
        </a>
        <a
          class="social-icon"
          href="https://maps.google.com/?q=Davao+Del+Sur,+Davao+City,+Roxas+Ave."
          target="_blank"
          title="Location"
        >
          <i class="fas fa-map-marker-alt"></i>
        </a>
      </div>

      <div class="hero-title">
        <span class="intro-text"
          >Full-stack developer and data analyst passionate about creating</span
        >
        <span class="highlight-primary"> innovative web solutions</span>
        <span class="intro-text"> and driving</span>
        <span class="highlight-secondary"> insights through data</span
        ><span class="intro-text">.</span>

        <br /><br />

        <span class="intro-text"> Experienced in</span>
        <span class="highlight-tech"> modern JavaScript frameworks</span
        ><span class="intro-text">,</span>
        <span class="highlight-tech"> backend development</span
        ><span class="intro-text">, and</span>
        <span class="highlight-tech"> data visualization</span
        ><span class="intro-text">, with a</span>
        <span class="highlight-accent"> proven track record</span>
        <span class="intro-text">
          of delivering impactful projects in corporate and community
          settings.</span
        >
      </div>

      <div class="hero-buttons">
        <BaseButton variant="primary" @click="scrollToSection('about')">
          Get to Know Me
        </BaseButton>
        <BaseButton variant="secondary" @click="scrollToSection('projects')">
          View Projects
        </BaseButton>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  text-align: center;
  padding: 2rem 1.5rem; /* Reduced padding to minimize dead space */
  box-sizing: border-box;
  background: linear-gradient(
    135deg,
    rgba(139, 92, 246, 0.05) 0%,
    rgba(59, 130, 246, 0.05) 100%
  );
}

.hero-content {
  max-width: none; /* Remove max-width constraint */
  width: 100%;
  padding: 0 2rem; /* Increased horizontal padding for edge-to-edge feel */
}

.hero-title {
  font-size: 1rem; /* Increased from 0.95rem */
  color: #d1d5db;
  margin-bottom: 2rem; /* Reduced from 2.5rem */
  line-height: 1.5; /* Tightened line height */
  font-weight: 300;
  max-width: none; /* Remove max-width to allow full screen width */
  width: 100%; /* Full width */
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  letter-spacing: 0.01em;
  opacity: 0.95;
  font-family: "Inter", sans-serif;
}

.intro-text {
  color: #d1d5db;
  font-weight: 300;
}

.highlight-primary {
  color: #8b5cf6;
  font-weight: 500;
}

.highlight-secondary {
  color: #06b6d4;
  font-weight: 500;
}

.highlight-tech {
  color: #10b981;
  font-weight: 500;
}

.highlight-accent {
  color: #f59e0b;
  font-weight: 500;
}

/* Light mode text colors */
body.light-mode .intro-text {
  color: #374151;
}

body.light-mode .highlight-primary {
  color: #8b5cf6;
}

body.light-mode .highlight-secondary {
  color: #0891b2;
}

body.light-mode .highlight-tech {
  color: #059669;
}

body.light-mode .highlight-accent {
  color: #d97706;
}

.hero-buttons {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  margin-bottom: 1.5rem; /* Reduced from 2rem */
  flex-wrap: wrap;
}

.hero-contact {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 1.5rem;
}

.hero-contact-inline {
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  margin-top: 1.5rem;
}

/* Desktop optimizations */
@media (min-width: 1200px) {
  .hero-section {
    padding: 3rem 3rem; /* Reduced from 4rem */
  }

  .hero-content {
    max-width: none; /* Remove max-width for large screens */
    padding: 0 4rem; /* Increase padding for better edge spacing */
  }

  .hero-title {
    font-size: 1.2rem;
    max-width: none; /* Full width on large screens */
    margin-bottom: 2.5rem;
  }

  .hero-buttons {
    gap: 2rem;
    margin-bottom: 2rem; /* Reduced spacing */
  }

  .hero-contact {
    margin-top: 2rem;
  }
}

@media (min-width: 1440px) {
  .hero-content {
    max-width: none; /* Full width on extra large screens */
    padding: 0 6rem; /* More padding for very large screens */
  }

  .hero-title {
    font-size: 1.3rem; /* Slightly increased */
    max-width: none; /* Full width */
  }
}

/* Mobile responsive styles */
@media (max-width: 768px) {
  .hero-section {
    padding: 2rem 1rem; /* Reduced mobile padding */
  }

  .hero-content {
    padding: 0 1rem; /* Reduced mobile padding for more space */
  }

  .hero-title {
    font-size: 0.9rem;
    margin-bottom: 1.5rem; /* Reduced spacing */
    max-width: none; /* Full width on mobile too */
  }

  .hero-buttons {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem; /* Reduced spacing */
  }

  .hero-contact {
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    margin-top: 1rem;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 0.85rem;
    margin-bottom: 1.25rem; /* Reduced spacing */
  }

  .hero-section {
    padding: 2rem 0.5rem; /* Further reduced padding */
  }

  .hero-content {
    padding: 0 0.5rem; /* Minimal padding for maximum width usage */
  }
}
</style>
