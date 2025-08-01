<script setup>
import AboutSection from "./sections/AboutSection.vue";
import ExperienceSection from "./sections/ExperienceSection.vue";
import ProjectsSection from "./sections/ProjectsSection.vue";
import EducationSection from "./sections/EducationSection.vue";
import LeadershipSection from "./sections/LeadershipSection.vue";
import SkillsSection from "./sections/SkillsSection.vue";

defineProps({
  skills: Object,
});
</script>

<template>
  <!-- About Section -->
  <AboutSection />

  <!-- Skills Sections (Technical & Other) -->
  <SkillsSection :skills="skills" />

  <!-- Experience Section -->
  <ExperienceSection />

  <!-- Projects Section -->
  <ProjectsSection />

  <!-- Education Section -->
  <EducationSection />

  <!-- Leadership & Certifications Section -->
  <LeadershipSection />
</template>

<style scoped>
/* No additional styles needed - all handled by individual components */
</style>
