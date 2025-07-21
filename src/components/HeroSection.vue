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

      <p class="hero-title">
        Experienced web developer and data analyst with a strong foundation in
        public sector projects, volunteer leadership, and technical skills.
      </p>

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
  font-size: 1.5rem;
  color: #d1d5db;
  margin-bottom: 4rem;
  line-height: 1.7;
  font-weight: 400;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  letter-spacing: 0.02em;
}

.hero-buttons {
  display: flex;
  gap: 2rem;
  justify-content: center;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.hero-contact {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
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
    padding: 6rem 4rem;
  }

  .hero-title {
    font-size: 1.75rem;
    max-width: 700px;
  }

  .hero-buttons {
    gap: 2.5rem;
  }
}

@media (min-width: 1440px) {
  .hero-content {
    max-width: 1000px;
  }

  .hero-title {
    font-size: 2rem;
    max-width: 800px;
  }
}

/* Keep existing responsive styles for later mobile optimization */
@media (max-width: 768px) {
  .hero-title {
    font-size: 1.2rem;
  }

  .hero-buttons {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 1rem;
  }
}
</style>
