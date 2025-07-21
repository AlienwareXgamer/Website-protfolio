<template>
  <div class="starfield" ref="starfieldContainer">
    <canvas 
      ref="starCanvas" 
      :width="canvasWidth" 
      :height="canvasHeight"
      class="star-canvas"
    ></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const starfieldContainer = ref(null)
const starCanvas = ref(null)
const canvasWidth = ref(window.innerWidth)
const canvasHeight = ref(window.innerHeight)

let animationId = null
let stars = []
let ctx = null

// Star class for individual stars
class Star {
  constructor(canvas) {
    this.canvas = canvas
    this.reset()
    this.y = Math.random() * canvas.height
  }
  
  reset() {
    this.x = Math.random() * this.canvas.width
    this.y = 0
    this.z = Math.random() * 1000 + 1
    this.prevZ = this.z
    this.speed = Math.random() * 2 + 1
    this.opacity = Math.random() * 0.8 + 0.2
    this.size = Math.random() * 2 + 0.5
  }
  
  update(speed = 1) {
    this.prevZ = this.z
    this.z -= speed * this.speed
    
    if (this.z <= 0) {
      this.reset()
    }
    
    // Add subtle twinkling effect
    this.opacity = 0.2 + Math.abs(Math.sin(Date.now() * 0.001 + this.x)) * 0.6
  }
  
  draw(ctx) {
    const x = (this.x - this.canvas.width / 2) * (200 / this.z) + this.canvas.width / 2
    const y = (this.y - this.canvas.height / 2) * (200 / this.z) + this.canvas.height / 2
    
    const prevX = (this.x - this.canvas.width / 2) * (200 / this.prevZ) + this.canvas.width / 2
    const prevY = (this.y - this.canvas.height / 2) * (200 / this.prevZ) + this.canvas.height / 2
    
    const size = (1 - this.z / 1000) * this.size
    
    ctx.save()
    ctx.globalAlpha = this.opacity
    
    // Draw star trail
    ctx.strokeStyle = `rgba(147, 197, 253, ${this.opacity * 0.5})`
    ctx.lineWidth = size
    ctx.beginPath()
    ctx.moveTo(prevX, prevY)
    ctx.lineTo(x, y)
    ctx.stroke()
    
    // Draw star point
    ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`
    ctx.beginPath()
    ctx.arc(x, y, size, 0, Math.PI * 2)
    ctx.fill()
    
    ctx.restore()
  }
}

const initStars = () => {
  if (!starCanvas.value) return
  
  ctx = starCanvas.value.getContext('2d')
  const canvas = starCanvas.value
  
  stars = []
  const numStars = Math.floor((canvas.width * canvas.height) / 8000)
  
  for (let i = 0; i < numStars; i++) {
    stars.push(new Star(canvas))
  }
}

const animate = () => {
  if (!ctx || !starCanvas.value) return
  
  const canvas = starCanvas.value
  
  // Clear with fade effect
  ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'
  ctx.fillRect(0, 0, canvas.width, canvas.height)
  
  // Update and draw stars
  stars.forEach(star => {
    star.update(0.5)
    star.draw(ctx)
  })
  
  animationId = requestAnimationFrame(animate)
}

const handleResize = () => {
  canvasWidth.value = window.innerWidth
  canvasHeight.value = window.innerHeight
  
  if (starCanvas.value) {
    initStars()
  }
}

onMounted(() => {
  initStars()
  animate()
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  if (animationId) {
    cancelAnimationFrame(animationId)
  }
  window.removeEventListener('resize', handleResize)
})
</script>

<style scoped>
.starfield {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: linear-gradient(135deg, #0f0f23 0%, #1a1a3e 50%, #0f0f23 100%);
  overflow: hidden;
}

.star-canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>