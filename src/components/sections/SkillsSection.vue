<script setup>
import ContentSectionBase from "../shared/ContentSectionBase.vue";
import SkillsCategory from "../skills/SkillsCategory.vue";

const skillsCategories = [
  {
    name: "Programming Languages",
    skills: [
      { name: "JavaScript", proficiency: 85 },
      { name: "TypeScript", proficiency: 75 },
      { name: "MySQL", proficiency: 80 },
    ],
  },
  {
    name: "Frameworks & Runtimes",
    skills: [
      { name: "Vue.js", proficiency: 85 },
      { name: "Next.js", proficiency: 75 },
      { name: "Node.js", proficiency: 80 },
      { name: "Laravel", proficiency: 70 },
    ],
  },
  {
    name: "Databases & ORMs",
    skills: [
      { name: "Firebase", proficiency: 80 },
      { name: "Firestore", proficiency: 78 },
      { name: "Prisma", proficiency: 75 },
    ],
  },
  {
    name: "Developer Tools",
    skills: [
      { name: "Git", proficiency: 85 },
      { name: "GitHub", proficiency: 85 },
      { name: "npm", proficiency: 80 },
    ],
  },
  {
    name: "Software & Design",
    skills: [
      { name: "Microsoft Office", level: "Proficient with Pivot Tables" },
      { name: "Canva", level: "Advanced" },
      { name: "Figma", level: "Intermediate" },
      { name: "Arduino IDE", level: "Development Environment" },
    ],
  },
  {
    name: "Hardware & Networking",
    skills: [
      {
        name: "Hardware Troubleshooting",
        level: "Skilled in diagnosing and repairing devices",
      },
      { name: "System Updates & Driver Installation", level: "Experienced" },
      { name: "Network Troubleshooting", level: "Wi-Fi configurations" },
      { name: "Cisco Networking Basics", level: "Certified" },
    ],
  },
  {
    name: "Additional Skills",
    skills: [
      {
        name: "Photography",
        level: "Professional - Creative and artistic ability",
      },
      {
        name: "Technical Proficiency",
        level: "Photo equipment operation (cameras, lenses, lighting)",
      },
      { name: "Adobe Photoshop", level: "Photo editing and composition" },
      { name: "English Communication", level: "Basic communication skills" },
    ],
  },
];

// Group skills for 4 cards per row layout
const firstRowSkills = skillsCategories.slice(0, 4);
const secondRowSkills = skillsCategories.slice(4, 7); // Only 3 cards in the last row

</script>

<template>
  <ContentSectionBase>
    <section id="skills" class="skills-section">
      <h3>Technical Skills</h3>
      <div class="skills-container">
        <!-- First Row: 4 cards -->
        <div class="skills-row four-column-row">
          <SkillsCategory
            v-for="category in firstRowSkills"
            :key="category.name"
            :category="category"
          />
        </div>

        <!-- Second Row: 3 cards -->
        <div class="skills-row three-column-row">
          <SkillsCategory
            v-for="category in secondRowSkills"
            :key="category.name"
            :category="category"
          />
        </div>
      </div>
    </section>
  </ContentSectionBase>
</template>

<style scoped>
.skills-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0 2rem;
}

.skills-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  gap: 2.5rem;
  max-width: none;
}

.skills-row {
  display: grid;
  gap: 2rem;
  width: 100%;
  max-width: 1600px;
  justify-items: center;
  align-items: stretch;
}

/* Four cards per row */
.four-column-row {
  grid-template-columns: repeat(4, 1fr);
}

/* Three cards per row (centered) */
.three-column-row {
  grid-template-columns: repeat(3, 1fr);
  max-width: 1200px;
}

/* Responsive layouts */
@media (min-width: 1400px) {
  .skills-section {
    padding: 0 6rem;
  }

  .skills-row {
    gap: 2.5rem;
  }
}

@media (min-width: 1200px) and (max-width: 1399px) {
  .skills-section {
    padding: 0 4rem;
  }

  .skills-row {
    gap: 2rem;
  }
}

@media (min-width: 1024px) and (max-width: 1199px) {
  .skills-section {
    padding: 0 3rem;
  }

  .four-column-row {
    grid-template-columns: repeat(4, 1fr);
  }

  .three-column-row {
    grid-template-columns: repeat(3, 1fr);
  }

  .skills-row {
    gap: 1.8rem;
  }
}

@media (min-width: 768px) and (max-width: 1023px) {
  .skills-section {
    padding: 0 2rem;
  }

  .four-column-row {
    grid-template-columns: repeat(2, 1fr);
  }

  .three-column-row {
    grid-template-columns: repeat(2, 1fr);
  }

  .skills-row {
    gap: 1.5rem;
  }
}

@media (max-width: 767px) {
  .skills-section {
    padding: 0 1rem;
  }

  .skills-container {
    gap: 2rem;
  }

  .four-column-row,
  .three-column-row {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}

/* Card sizing */
.skills-row :deep(.skills-category) {
  width: 100%;
  max-width: 420px; /* Increased from 350px to make cards wider */
  margin: 0 auto;
}

/* Additional width adjustments for better spacing */
.four-column-row :deep(.skills-category) {
  max-width: 380px; /* Slightly smaller for 4-card row to maintain balance */
}

.three-column-row :deep(.skills-category) {
  max-width: 450px; /* Wider for 3-card row */
}

/* Skill card hover effect */
.skill-card:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-4px) scale(1.02);
  box-shadow:
    0 0 0 2px rgba(139, 92, 246, 0.2),
    0 8px 25px rgba(139, 92, 246, 0.3),
    0 0 15px rgba(139, 92, 246, 0.4);
  border-left-color: #7c3aed;
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
}
</style>
