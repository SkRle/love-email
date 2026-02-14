<template>
  <v-container fluid class="hero-section d-flex flex-column align-center justify-center text-center pa-0">
    <!-- Enhanced Floating Hearts Background -->
    <div class="floating-hearts">
      <v-icon 
        v-for="n in 30" 
        :key="n" 
        class="heart-particle"
        :style="generateHeartStyle()"
        color="secondary"
      >
        mdi-heart
      </v-icon>
    </div>

    <v-fade-transition appear>
      <div v-show="showContent" class="hero-container z-index-1 mx-4">
        <v-card class="glass-card pa-8 pa-md-16 rounded-xl" elevation="0">
          <div class="elegant-sub mb-2" style="font-family: 'Dancing Script', cursive;">
            สวัสดีคุณ สิริกุล ศรีชมภู
          </div>
        
          
          <div class="heart-container my-10">
            <div class="main-heart-wrapper">
              <v-icon size="120" color="primary" class="main-heart">mdi-heart</v-icon>
              <div class="heart-ring"></div>
              <div class="heart-ring delay-1"></div>
            </div>
          </div>

          <p class="text-h6 text-md-h5 text-grey-darken-1 font-weight-light mt-4 px-4" style="font-family: 'Cormorant Garamond', serif; letter-spacing: 1px;">
            "รักเค้าไหมม"
          </p>

          <div class="mt-12">
            <v-btn
              variant="flat"
              color="primary"
              size="x-large"
              rounded="pill"
              class="start-btn px-10 elevation-8"
              append-icon="mdi-heart-outline"
              @click="$emit('next')"
            >
              รัก
            </v-btn>
            <v-btn
              variant="flat"
              color="primary"
              size="x-large"
              rounded="pill"
              class="start-btn ml-4 px-10 elevation-8 runaway-btn"
              append-icon="mdi-heart-outline"
              :style="{ transform: `translate(${noX}px, ${noY}px)` }"
              @mouseover="runAway"
            >
              ไม่รัก
            </v-btn>
          </div>
        </v-card>
      </div>
    </v-fade-transition>

    <div class="scroll-hint">
      <v-icon color="secondary" class="animate-bounce">mdi-chevron-down</v-icon>
    </div>
  </v-container>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

defineEmits(['next'])

const showContent = ref(false)
const noX = ref(0)
const noY = ref(0)

const runAway = () => {
  // Move to a random position within a reasonable range
  noX.value = (Math.random() - 0.5) * 400
  noY.value = (Math.random() - 0.5) * 300
}

onMounted(() => {
  setTimeout(() => {
    showContent.value = true
  }, 300)
})

const generateHeartStyle = () => {
  const left = Math.random() * 100
  const duration = 15 + Math.random() * 20
  const delay = Math.random() * 10
  const size = 12 + Math.random() * 24
  const opacity = 0.1 + Math.random() * 0.3
  
  return {
    left: `${left}%`,
    animationDuration: `${duration}s`,
    animationDelay: `-${delay}s`,
    fontSize: `${size}px`,
    opacity: opacity
  }
}
</script>

<style scoped>
.hero-section {
  height: 100vh;
  width: 100%;
  position: relative;
  /* background: radial-gradient(circle at center, #fae6e6 0%, #f7d7d7 100%); */
  overflow: hidden;
}

.hero-container {
  max-width: 800px;
  width: 100%;
}

.glass-card {
  background: rgba(255, 255, 255, 0.4) !important;
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.5);
  box-shadow: 0 25px 50px -12px rgba(216, 167, 177, 0.3) !important;
}

.elegant-sub {
  font-size: 1.5rem;
  color: #D8A7B1;
  letter-spacing: 2px;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 300;
  line-height: 1.2;
  letter-spacing: 2px;
  text-shadow: 0 2px 4px rgba(216, 167, 177, 0.2);
}

@media (min-width: 600px) {
  .hero-title {
    font-size: 5.5rem;
  }
  .elegant-sub {
    font-size: 2rem;
  }
}

.z-index-1 {
  position: relative;
  z-index: 10;
}

/* Main Heart Animation */
.main-heart-wrapper {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.main-heart {
  animation: heartbeat 2s infinite ease-in-out;
  z-index: 2;
}

.heart-ring {
  position: absolute;
  width: 100px;
  height: 100px;
  border: 2px solid #D8A7B1;
  border-radius: 50%;
  animation: ripple 3s infinite;
  opacity: 0;
}

.heart-ring.delay-1 {
  animation-delay: 1.5s;
}

@keyframes heartbeat {
  0% { transform: scale(1); filter: drop-shadow(0 0 0 rgba(216, 167, 177, 0)); }
  50% { transform: scale(1.1); filter: drop-shadow(0 0 15px rgba(216, 167, 177, 0.5)); }
  100% { transform: scale(1); filter: drop-shadow(0 0 0 rgba(216, 167, 177, 0)); }
}

@keyframes ripple {
  0% { transform: scale(0.8); opacity: 0.5; }
  100% { transform: scale(2.5); opacity: 0; }
}

/* Particles */
.floating-hearts {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
}

.heart-particle {
  position: absolute;
  animation: floatUp linear infinite;
  bottom: -50px;
}

@keyframes floatUp {
  0% { transform: translateY(0) rotate(0deg) scale(0.8); }
  25% { transform: translateY(-25vh) rotate(10deg); }
  50% { transform: translateY(-50vh) rotate(-10deg) scale(1.1); }
  75% { transform: translateY(-75vh) rotate(5deg); }
  100% { transform: translateY(-120vh) rotate(0deg) scale(0.9); }
}

.start-btn {
  letter-spacing: 2px;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.runaway-btn {
  transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1) !important;
}

.start-btn:hover {
  transform: translateY(-5px) scale(1.02);
  box-shadow: 0 15px 30px -5px rgba(216, 167, 177, 0.4) !important;
}

.scroll-hint {
  position: absolute;
  bottom: 2rem;
  opacity: 0.6;
}

.animate-bounce {
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
</style>

