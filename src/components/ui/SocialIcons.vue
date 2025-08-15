<script setup>
import Icon from './Icon.vue';
</script>

<template>
  <div class="social-icons">
    <a href="https://www.linkedin.com/in/francis-allen-prado" target="_blank" class="social-icon linkedin" aria-label="LinkedIn profile">
      <Icon name="linkedin" size="20" />
    </a>
    <a href="https://github.com/AlienwareXgamer" target="_blank" class="social-icon github" aria-label="GitHub profile">
      <Icon name="github" size="20" />
    </a>
    <a href="mailto:francisallen148@gmail.com" class="social-icon email" aria-label="Send email">
      <Icon name="email" size="20" />
    </a>
    <a href="https://twitter.com/francis_allen_dev" target="_blank" class="social-icon twitter" aria-label="Twitter profile">
      <Icon name="twitter" size="20" />
    </a>
  </div>
</template>

<style scoped>
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

/* Responsive */
@media (max-width: 768px) {
  .social-icons {
    gap: 1.5rem;
  }

  .social-icon {
    width: 40px;
    height: 40px;
  }
}
</style>
