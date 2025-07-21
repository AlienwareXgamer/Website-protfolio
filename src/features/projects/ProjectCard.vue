<script setup>
defineProps({
  project: {
    type: Object,
    required: true,
    validator: (project) => {
      return (
        project &&
        typeof project.title === "string" &&
        typeof project.description === "string" &&
        Array.isArray(project.techStack) &&
        Array.isArray(project.features)
      );
    },
  },
});
</script>

<template>
  <div class="project-card">
    <div class="project-header">
      <h4>{{ project.title }}</h4>
      <div class="project-links" v-if="project.links">
        <a
          v-for="link in project.links"
          :key="link.type"
          :href="link.url"
          target="_blank"
          :class="`project-link ${link.type}`"
          :title="link.title"
        >
          <svg
            v-if="link.type === 'github'"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
            />
          </svg>
          <svg
            v-else-if="link.type === 'demo'"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"
            />
          </svg>
        </a>
      </div>
    </div>

    <p class="project-description">{{ project.description }}</p>

    <div class="project-tech-stack" v-if="project.techStack">
      <span v-for="tech in project.techStack" :key="tech" class="tech-tag">
        {{ tech }}
      </span>
    </div>

    <div class="project-features" v-if="project.features">
      <h5>Key Features:</h5>
      <ul>
        <li v-for="feature in project.features" :key="feature">
          {{ feature }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.project-card {
  margin-bottom: 0;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  width: 100%;
  box-sizing: border-box;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.project-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(139, 92, 246, 0.15),
    rgba(59, 130, 246, 0.1)
  );
  opacity: 0;
  transition: opacity 0.3s ease;
  border-radius: 16px;
}

.project-card:hover {
  transform: translateY(-8px);
  border-color: rgba(139, 92, 246, 0.4);
  box-shadow:
    0 20px 40px rgba(0, 0, 0, 0.3),
    0 0 0 1px rgba(139, 92, 246, 0.2);
}

.project-card:hover::before {
  opacity: 1;
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 1;
}

.project-header h4 {
  margin: 0;
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  line-height: 1.3;
  flex-grow: 1;
  margin-right: 1rem;
}

.project-links {
  display: flex;
  gap: 0.75rem;
  flex-shrink: 0;
}

.project-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: all 0.3s ease;
}

.project-link:hover {
  background: rgba(139, 92, 246, 0.2);
  border-color: rgba(139, 92, 246, 0.4);
  color: white;
  transform: scale(1.1);
}

.project-link.github:hover {
  background: rgba(255, 255, 255, 0.15);
  border-color: rgba(255, 255, 255, 0.3);
}

.project-link.demo:hover {
  background: rgba(34, 197, 94, 0.2);
  border-color: rgba(34, 197, 94, 0.4);
}

.project-description {
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-size: 1rem;
  position: relative;
  z-index: 1;
}

.project-tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 1;
}

.tech-tag {
  display: inline-block;
  padding: 0.4rem 0.8rem;
  background: rgba(139, 92, 246, 0.15);
  border: 1px solid rgba(139, 92, 246, 0.3);
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.9);
  transition: all 0.3s ease;
}

.tech-tag:hover {
  background: rgba(139, 92, 246, 0.25);
  border-color: rgba(139, 92, 246, 0.5);
  transform: scale(1.05);
}

.project-features {
  margin-top: auto;
  position: relative;
  z-index: 1;
}

.project-features h5 {
  margin: 0 0 1rem 0;
  font-size: 1.1rem;
  font-weight: 600;
  color: white;
}

.project-features ul {
  margin: 0;
  padding-left: 1.2rem;
  list-style: none;
}

.project-features li {
  position: relative;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.5;
  margin-bottom: 0.5rem;
  font-size: 0.95rem;
}

.project-features li::before {
  content: "→";
  position: absolute;
  left: -1.2rem;
  color: rgba(139, 92, 246, 0.8);
  font-weight: bold;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .project-card {
    padding: 1.5rem;
  }

  .project-header {
    flex-direction: column;
    gap: 1rem;
  }

  .project-header h4 {
    margin-right: 0;
    font-size: 1.3rem;
  }

  .project-links {
    align-self: flex-start;
  }

  .project-link {
    width: 36px;
    height: 36px;
  }
}

@media (min-width: 1200px) {
  .project-card {
    padding: 2.5rem;
  }

  .project-header h4 {
    font-size: 1.6rem;
  }

  .project-description {
    font-size: 1.1rem;
  }
}
</style>
