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

      <SocialIcons />

      <div class="hero-title">
        <span class="intro-text"
          >Full-stack developer and data analyst passionate about creating</span
        >
        <span class="highlight-primary">innovative web solutions</span>
        <span class="intro-text">and driving</span>
        <span class="highlight-secondary">insights through data</span
        ><span class="intro-text">.</span>

        <br /><br />

        <span class="intro-text">Experienced in</span>
        <span class="highlight-tech">modern JavaScript frameworks</span
        ><span class="intro-text">,</span>
        <span class="highlight-tech">backend development</span
        ><span class="intro-text">, and</span>
        <span class="highlight-tech">data visualization</span
        ><span class="intro-text">, with a</span>
        <span class="highlight-accent">proven track record</span>
        <span class="intro-text"
          >of delivering impactful projects in corporate and community
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

      <div class="hero-contact">
        <button class="email-btn" @click="openEmail">
          francisallen148@gmail.com
        </button>
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
  padding: 4rem 2rem;
  box-sizing: border-box;
  background: linear-gradient(
    135deg,
    rgba(139, 92, 246, 0.05) 0%,
    rgba(59, 130, 246, 0.05) 100%
  );
}

.hero-content {
  max-width: 900px;
  width: 100%;
  padding: 0 2rem;
}

.hero-title {
  font-size: 0.95rem;
  color: #d1d5db;
  margin-bottom: 2.5rem;
  line-height: 1.6;
  font-weight: 300;
  max-width: 600px;
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
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.hero-contact {
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
}

.email-btn {
  background: rgba(255, 255, 255, 0.05);
  color: #9ca3af;
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 1rem 2rem;
  border-radius: 12px;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  min-width: 250px;
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

/* Desktop optimizations */
@media (min-width: 1200px) {
  .hero-section {
    padding: 4rem 4rem;
  }

  .hero-title {
    font-size: 1.1rem;
    max-width: 650px;
    margin-bottom: 3rem;
  }

  .hero-buttons {
    gap: 2rem;
    margin-bottom: 2.5rem;
  }
}

@media (min-width: 1440px) {
  .hero-content {
    max-width: 900px;
  }

  .hero-title {
    font-size: 1.2rem;
    max-width: 700px;
  }
}

/* Mobile responsive styles */
@media (max-width: 768px) {
  .hero-title {
    font-size: 0.9rem;
    margin-bottom: 2rem;
  }

  .hero-buttons {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.5rem;
  }

  .hero-contact {
    margin-top: 1rem;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 0.85rem;
    margin-bottom: 1.5rem;
  }

  .hero-section {
    padding: 3rem 1rem;
  }
}
</style>
