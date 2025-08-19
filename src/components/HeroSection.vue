<script setup>
import ProfilePhoto from "./ui/ProfilePhoto.vue";
import HeroIdentity from "./ui/HeroIdentity.vue";
import BaseButton from "./ui/BaseButton.vue";
import SocialIcons from "./ui/SocialIcons.vue";

const emit = defineEmits(["scroll-request"]);

defineProps({
  isDarkMode: Boolean,
});

const requestScroll = (sectionId) => emit("scroll-request", sectionId);
</script>

<template>
  <section class="hero-section" id="home">
    <div class="hero-content">
      <ProfilePhoto size="large" />
      <HeroIdentity name="Francis Allen Prado" handle="@francis_allen_dev" />
      <SocialIcons class="hero-contact-inline" />
      <div class="hero-title">
        <span class="intro-text">Full-stack developer and data analyst passionate about creating</span>
        <span class="highlight-primary"> innovative web solutions</span>
        <span class="intro-text"> and driving</span>
        <span class="highlight-secondary"> insights through data</span><span class="intro-text">.</span>
        <br /><br />
        <span class="intro-text"> Experienced in</span>
        <span class="highlight-tech"> modern JavaScript frameworks</span><span class="intro-text">,</span>
        <span class="highlight-tech"> backend development</span><span class="intro-text">, and</span>
        <span class="highlight-tech"> data visualization</span><span class="intro-text">, with a</span>
        <span class="highlight-accent"> proven track record</span>
        <span class="intro-text"> of delivering impactful projects in corporate and community settings.</span>
      </div>
      <div class="hero-buttons">
        <BaseButton variant="primary" @click="requestScroll('about')">Get to Know Me</BaseButton>
        <BaseButton variant="secondary" @click="requestScroll('projects')">View Projects</BaseButton>
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
  padding-top: 6rem; /* Added top padding to prevent navigation overlap */
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
  font-size: 1.3rem;
  color: var(--color-text-secondary); /* token-based */
  margin-bottom: 2rem;
  line-height: 1.6;
  font-weight: 300;
  max-width: none;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  letter-spacing: 0.01em;
  opacity: 0.95;
  font-family: "Inter", sans-serif;
  background: none;
}

.intro-text { color: var(--color-text-secondary); font-weight: 300; }

.highlight-primary,
.highlight-secondary,
.highlight-tech,
.highlight-accent { color: var(--color-text-accent); background:none; }

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
    padding: 3rem 3rem;
  }

  .hero-content {
    max-width: none;
    padding: 0 4rem;
  }

  .hero-title {
    font-size: 1.5rem; /* Increased from 1.2rem */
    max-width: none;
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
    max-width: none;
    padding: 0 6rem;
  }

  .hero-title {
    font-size: 1.7rem; /* Increased from 1.3rem */
    max-width: none;
  }
}

/* Mobile responsive styles - Enhanced for phone browsers */
@media (max-width: 768px) {
  .hero-section {
    /* Re-introduce top padding removed when overriding padding earlier */
    /* Ensure enough space for fixed nav + safe area (iOS notch) */
    padding: 2rem 1rem; /* existing */
    padding-top: max(6rem, calc(env(safe-area-inset-top, 0px) + 5rem));
    min-height: 100vh;
    min-height: 100dvh; /* Use dynamic viewport height for mobile */
  }

  .hero-content {
    padding: 0 0.75rem; /* Reduced mobile padding for more space */
    max-width: 100%;
  }

  .hero-photo {
    width: 120px;
    height: 120px;
    margin-bottom: 1.5rem;
  }

  .hero-name {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    line-height: 1.1;
  }

  .hero-handle {
    font-size: 1rem;
    margin-bottom: 1.25rem;
  }

  .hero-title {
    font-size: 1.1rem; /* Increased from 0.95rem */
    margin-bottom: 1.5rem;
    max-width: none;
    line-height: 1.6; /* Improved readability */
    padding: 0 0.5rem;
  }

  .hero-buttons {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem; /* Reduced spacing */
  }

  .btn-primary,
  .btn-secondary {
    width: 100%;
    max-width: 280px;
    padding: 0.875rem 1.5rem;
    font-size: 1rem;
    min-height: 48px; /* Touch-friendly height */
  }

  .social-icons {
    gap: 1.5rem;
    margin-bottom: 1.5rem;
  }

  .social-icon {
    width: 44px; /* Touch-friendly size */
    height: 44px;
    border-radius: 12px;
  }

  .hero-contact {
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
    margin-top: 1rem;
  }

  .email-btn {
    width: 100%;
    max-width: 240px;
    min-height: 44px; /* Touch-friendly */
    font-size: 0.95rem;
  }
}

@media (max-width: 480px) {
  .hero-section {
    /* Keep consistent clearance on very small devices */
    padding: 1.5rem 0.75rem;
    padding-top: max(6rem, calc(env(safe-area-inset-top, 0px) + 5rem));
  }

  .hero-content {
    padding: 0 0.5rem; /* Minimal padding for maximum width usage */
  }

  .hero-photo {
    width: 100px;
    height: 100px;
    margin-bottom: 1.25rem;
  }

  .hero-name {
    font-size: 2rem;
    margin-bottom: 0.75rem;
  }

  .hero-handle {
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }

  .hero-title {
    font-size: 1rem; /* Increased from 0.85rem */
    margin-bottom: 1.25rem;
    padding: 0 0.25rem;
  }

  .hero-buttons {
    gap: 0.75rem;
    margin-bottom: 1rem;
  }

  .btn-primary,
  .btn-secondary {
    max-width: 260px;
    padding: 0.75rem 1.25rem;
    font-size: 0.95rem;
  }

  .social-icons {
    gap: 1.25rem;
    margin-bottom: 1.25rem;
  }

  .social-icon {
    width: 40px;
    height: 40px;
    font-size: 1.1rem;
  }

  .email-btn {
    max-width: 220px;
    padding: 0.625rem 1rem;
    font-size: 0.9rem;
  }
}

/* iOS Safari specific optimizations */
@supports (-webkit-touch-callout: none) {
  @media (max-width: 768px) {
    .hero-section {
      /* Maintain safe area while preserving space for nav */
      min-height: -webkit-fill-available;
      padding-top: max(env(safe-area-inset-top, 0px) + 5rem, 6rem);
    }
  }
}

/* Android Chrome specific optimizations */
@media screen and (max-width: 768px) and (orientation: portrait) {
  .hero-section {
    /* Better handling of address bar on Android Chrome */
    min-height: 100vh;
    min-height: 100dvh;
  }
}

/* Landscape mode optimizations for mobile */
@media (max-width: 768px) and (orientation: landscape) {
  .hero-section {
    padding: 1.5rem 1rem;
    min-height: 100vh;
  }

  .hero-photo {
    width: 80px;
    height: 80px;
    margin-bottom: 1rem;
  }

  .hero-name {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }

  .hero-title {
    font-size: 0.95rem; /* Increased from 0.8rem */
    margin-bottom: 1rem;
  }

  .hero-buttons {
    flex-direction: row;
    gap: 1rem;
    margin-bottom: 0.75rem;
  }

  .btn-primary,
  .btn-secondary {
    width: auto;
    max-width: 160px;
    padding: 0.625rem 1rem;
    font-size: 0.85rem;
  }

  .social-icons {
    gap: 1rem;
    margin-bottom: 1rem;
  }
}

/* Touch and interaction improvements */
@media (max-width: 768px) {
  .hero-photo,
  .social-icon,
  .btn-primary,
  .btn-secondary,
  .email-btn {
    -webkit-tap-highlight-color: rgba(139, 92, 246, 0.3);
    -webkit-user-select: none;
    user-select: none;
    touch-action: manipulation;
  }

  /* Improve tap targets */
  .social-icon,
  .btn-primary,
  .btn-secondary,
  .email-btn {
    cursor: pointer;
    position: relative;
  }

  /* Add subtle press effects for better mobile feedback */
  .social-icon:active,
  .btn-primary:active,
  .btn-secondary:active,
  .email-btn:active {
    transform: scale(0.98);
  }
}
</style>
