<script setup>
defineProps({
  size: {
    type: String,
    default: "large", // 'small' | 'medium' | 'large'
    validator: (value) => ["small", "medium", "large"].includes(value),
  },
});
</script>

<template>
  <div :class="['profile-photo', `photo-${size}`]">
    <img
      src="/src/assets/profile-photo.jpg"
      alt="Francis Allen Prado"
      class="profile-image"
      loading="lazy"
      decoding="async"
    />
  </div>
</template>

<style scoped>
.profile-photo {
  border-radius: 50%;
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #a855f7 100%);
  margin: 0 auto 2rem;
  position: relative;
  overflow: hidden;
  box-shadow: 0 25px 50px rgba(139, 92, 246, 0.4);
  border: 4px solid rgba(255, 255, 255, 0.1);
  transition: all 0.5s ease;
}

.profile-photo:hover {
  transform: scale(1.05);
  box-shadow: 0 30px 60px rgba(139, 92, 246, 0.5);
}

.profile-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  border-radius: 50%;
}

/* Sizes */
.photo-small {
  width: 80px;
  height: 80px;
}

.photo-medium {
  width: 120px;
  height: 120px;
}

.photo-large {
  width: 160px;
  height: 160px;
}

/* Responsive */
@media (max-width: 768px) {
  .photo-large {
    width: 140px;
    height: 140px;
  }
}

@media (max-width: 480px) {
  .photo-large {
    width: 120px;
    height: 120px;
  }
}
</style>
