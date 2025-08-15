<script setup>
import { defineAsyncComponent } from 'vue';
import AboutSection from "./sections/AboutSection.vue";
import ExperienceSection from "./sections/ExperienceSection.vue";
import EducationSection from "./sections/EducationSection.vue";
import LeadershipSection from "./sections/LeadershipSection.vue";

// Lazy load heavy components for faster initial page load
const ProjectsSection = defineAsyncComponent(() => import('./sections/ProjectsSection.vue'));
const SkillsSection = defineAsyncComponent(() => import('./sections/SkillsSection.vue'));

defineProps({
  skills: Object,
});
</script>

<template>
  <!-- About Section -->
  <AboutSection />

  <!-- Skills Sections (Technical & Other) -->
  <Suspense>
    <SkillsSection :skills="skills" />
    <template #fallback>
      <div class="section-fallback">Loading Skills...</div>
    </template>
  </Suspense>

  <!-- Experience Section -->
  <ExperienceSection />

  <!-- Projects Section -->
  <Suspense>
    <ProjectsSection />
    <template #fallback>
      <div class="section-fallback">Loading Projects...</div>
    </template>
  </Suspense>

  <!-- Education Section -->
  <EducationSection />

  <!-- Leadership & Certifications Section -->
  <LeadershipSection />
</template>

<style scoped>
.section-fallback {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
  font-size: 1.5rem;
  color: #9ca3af;
}
</style>
