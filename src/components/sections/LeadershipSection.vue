<script setup>
import ContentSectionBase from '../shared/ContentSectionBase.vue'

const leadershipData = [
  {
    title: "UACTLY Your Path to Being the Exact Fit at Work",
    organization: "UI UX Davao Organization Volunteer",
    period: "2024 - Present",
    description: "Volunteered for multiple events, including workshops and professional development sessions.",
    achievements: [
      "2025 May UXACTLY Your Path to Being the Exact Fit at Work",
      "2025 March UXD Women Who Design",
      "2025 February UXD Project Management",
      "2024 February Web Accessibility Workshop",
      "2024 August Level up your Prototypes in Figma"
    ]
  },
  {
    title: "Google Developers Davao Professional Photographer",
    organization: "Google Developers Davao Volunteer",
    period: "November 2023",
    description: "For dedicated volunteer service and instrumental role in the seamless execution of Google I/O Extended Demo.",
    achievements: [
      "Captured high-quality images for Google Developer events",
      "Provided sales support promptly for professional purposes",
      "Collaborated with event organizers to ensure all photography needs were met"
    ]
  },
  {
    title: "IT Week 2025 (SysDev Committee Member)",
    organization: "Ateneo de Davao University",
    period: "2025",
    description: "In recognition of invaluable contributions as SysDev Committee Member during IT Week 2025.",
    achievements: [
      "Contributed to system development initiatives during IT Week",
      "Collaborated with fellow committee members on technical projects"
    ]
  },
  {
    title: "DevFest Davao 2023",
    organization: "Google I/O Extended Davao 2024 | 2023",
    period: "2023",
    description: "For dedicated volunteer service and instrumental role in the seamless execution of Google I/O Extended Demo.",
    achievements: [
      "Provided volunteer service for Google DevFest Davao 2023",
      "Contributed significantly to the success of DevFest Davao 2023"
    ]
  },
  {
    title: "CS Alumni Connect Talk/Workshop Series",
    organization: "Ateneo Sui Generis Leadership Online Hub",
    period: "2021 - 2020",
    description: "For participation in the 'Dissecting the Full-Stack: Front-end Development' Talk/Workshop and active participation during the Ateneo Sui Generis Leadership Online Hub 2020.",
    achievements: [
      "Participated in Full-Stack development workshop series",
      "Active engagement in leadership development programs"
    ]
  }
]

const certifications = [
  {
    name: "Certified Cisco Networking Basics",
    issuer: "Cisco",
    year: "Certified",
    credentialId: "Cisco-NB-2024"
  },
  {
    name: "Technical Skills Development",
    issuer: "Various Organizations",
    year: "2020-2025",
    credentialId: "Multi-Cert"
  }
]
</script>

<template>
  <ContentSectionBase>
    <section id="leadership">
      <h3>Leadership & Certifications</h3>
      
      <div class="leadership-content">
        <div class="leadership-section">
          <h4>Leadership Experience</h4>
          <div class="leadership-list">
            <div v-for="item in leadershipData" :key="item.title" class="leadership-item">
              <div class="leadership-header">
                <h5>{{ item.title }}</h5>
                <span class="leadership-period">{{ item.period }}</span>
              </div>
              <p class="leadership-organization">{{ item.organization }}</p>
              <p class="leadership-description">{{ item.description }}</p>
              <ul class="leadership-achievements">
                <li v-for="achievement in item.achievements" :key="achievement">
                  {{ achievement }}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="certifications-section">
          <h4>Certifications</h4>
          <div class="certifications-grid">
            <div v-for="cert in certifications" :key="cert.name" class="certification-card">
              <h5>{{ cert.name }}</h5>
              <p class="cert-issuer">{{ cert.issuer }}</p>
              <div class="cert-details">
                <span class="cert-year">{{ cert.year }}</span>
                <span class="cert-id">ID: {{ cert.credentialId }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </ContentSectionBase>
</template>

<style scoped>
.leadership-content {
  margin-top: 2rem;
  display: grid;
  gap: 3rem;
}

.leadership-section h4,
.certifications-section h4 {
  color: #fff;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  text-align: center;
  padding-bottom: 0.75rem;
  border-bottom: 2px solid rgba(139, 92, 246, 0.3);
}

/* Leadership Items */
.leadership-list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.leadership-item {
  padding: 2rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  border-left: 4px solid #f59e0b;
  transition: all 0.3s ease;
  position: relative;
}

.leadership-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 16px;
  background: linear-gradient(135deg, rgba(245, 158, 11, 0.1), transparent);
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
}

.leadership-item:hover {
  background: rgba(255, 255, 255, 0.08);
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(245, 158, 11, 0.15),
              0 0 15px rgba(245, 158, 11, 0.1),
              0 0 0 1px rgba(245, 158, 11, 0.1);
  border-left-color: #d97706;
}

.leadership-item:hover::before {
  opacity: 1;
}

.leadership-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.5rem;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.leadership-header h5 {
  color: #fff;
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0;
}

.leadership-period {
  color: #f59e0b;
  font-size: 0.9rem;
  font-weight: 500;
  white-space: nowrap;
}

.leadership-organization {
  color: #a1a1aa;
  font-size: 1rem;
  margin-bottom: 1rem;
  font-weight: 500;
}

.leadership-description {
  color: #d1d5db;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.leadership-achievements {
  list-style: none;
  padding: 0;
  margin: 0;
}

.leadership-achievements li {
  color: #d1d5db;
  margin-bottom: 0.5rem;
  padding-left: 1.5rem;
  position: relative;
}

.leadership-achievements li::before {
  content: '🏆';
  position: absolute;
  left: 0;
}

/* Certifications */
.certifications-grid {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
}

.certification-card {
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  text-align: center;
}

.certification-card:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(139, 92, 246, 0.3);
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(139, 92, 246, 0.15),
              0 0 0 1px rgba(139, 92, 246, 0.1);
}

.certification-card h5 {
  color: #fff;
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  line-height: 1.3;
}

.cert-issuer {
  color: #8b5cf6;
  font-weight: 500;
  margin-bottom: 1rem;
}

.cert-details {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.85rem;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.cert-year {
  color: #22c55e;
  font-weight: 600;
}

.cert-id {
  color: #9ca3af;
  font-family: monospace;
}

/* Responsive */
@media (min-width: 1024px) {
  .leadership-content {
    grid-template-columns: 2fr 1fr;
    gap: 4rem;
  }
}

@media (max-width: 768px) {
  .leadership-header {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .leadership-period {
    white-space: normal;
  }
  
  .cert-details {
    flex-direction: column;
    text-align: center;
    gap: 0.25rem;
  }
}
</style>