<script setup>
import ContentSectionBase from '../shared/ContentSectionBase.vue'
import SkillsCategory from '../skills/SkillsCategory.vue'

const skillsCategories = [
  {
    name: "Programming Languages",
    skills: [
      { name: "JavaScript", proficiency: 85 },
      { name: "TypeScript", proficiency: 75 },
      { name: "MySQL", proficiency: 80 }
    ]
  },
  {
    name: "Frameworks & Runtimes",
    skills: [
      { name: "Vue.js", proficiency: 85 },
      { name: "Next.js", proficiency: 75 },
      { name: "Node.js", proficiency: 80 },
      { name: "Laravel", proficiency: 70 }
    ]
  },
  {
    name: "Databases & ORMs",
    skills: [
      { name: "Firebase", proficiency: 80 },
      { name: "Firestore", proficiency: 78 },
      { name: "Prisma", proficiency: 75 }
    ]
  },
  {
    name: "Developer Tools",
    skills: [
      { name: "Git", proficiency: 85 },
      { name: "GitHub", proficiency: 85 },
      { name: "npm", proficiency: 80 }
    ]
  },
  {
    name: "Software & Design",
    skills: [
      { name: "Microsoft Office", level: "Proficient with Pivot Tables" },
      { name: "Canva", level: "Advanced" },
      { name: "Figma", level: "Intermediate" },
      { name: "Arduino IDE", level: "Development Environment" }
    ]
  },
  {
    name: "Hardware & Networking",
    skills: [
      { name: "Hardware Troubleshooting", level: "Skilled in diagnosing and repairing devices" },
      { name: "System Updates & Driver Installation", level: "Experienced" },
      { name: "Network Troubleshooting", level: "Wi-Fi configurations" },
      { name: "Cisco Networking Basics", level: "Certified" }
    ]
  },
  {
    name: "Additional Skills",
    skills: [
      { name: "Photography", level: "Professional - Creative and artistic ability" },
      { name: "Technical Proficiency", level: "Photo equipment operation (cameras, lenses, lighting)" },
      { name: "Adobe Photoshop", level: "Photo editing and composition" },
      { name: "English Communication", level: "Basic communication skills" }
    ]
  }
]
</script>

<template>
  <ContentSectionBase>
    <section id="skills">
      <h3>Technical Skills</h3>
      <div class="skills-grid">
        <SkillsCategory 
          v-for="category in skillsCategories" 
          :key="category.name"
          :category="category"
        />
      </div>
    </section>
  </ContentSectionBase>
</template>

<style scoped>
.skills-grid {
  margin-top: 2rem;
  display: grid;
  gap: 2.5rem; /* Increased gap for desktop */
  grid-template-columns: 1fr;
}

/* Desktop-optimized layouts */
@media (min-width: 1400px) {
  .skills-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    max-width: 1600px;
    margin: 2rem auto 0;
  }
}

@media (min-width: 1024px) and (max-width: 1399px) {
  .skills-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 2.5rem;
    max-width: 1200px;
    margin: 2rem auto 0;
  }
}

@media (min-width: 768px) and (max-width: 1023px) {
  .skills-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
}
</style>