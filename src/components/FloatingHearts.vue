<template>
  <div class="floating-hearts-container">
    <div v-for="n in 15" :key="n" class="heart-wrapper">
      <v-icon icon="mdi-heart" color="rgba(255, 182, 193, 0.6)" size="24" class="heart-icon"></v-icon>
    </div>
  </div>
</template>

<script setup lang="ts">
// No script needed for CSS animation
</script>

<style scoped>
.floating-hearts-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
}

.heart-wrapper {
  position: absolute;
  bottom: -50px;
  animation: floatUp 15s linear infinite;
  opacity: 0;
}

/* Randomize hearts */
.heart-wrapper:nth-child(1) { left: 10%; animation-duration: 12s; animation-delay: 0s; }
.heart-wrapper:nth-child(2) { left: 20%; animation-duration: 15s; animation-delay: 2s; transform: scale(0.8); }
.heart-wrapper:nth-child(3) { left: 30%; animation-duration: 10s; animation-delay: 4s; }
.heart-wrapper:nth-child(4) { left: 40%; animation-duration: 14s; animation-delay: 1s; transform: scale(1.2); }
.heart-wrapper:nth-child(5) { left: 50%; animation-duration: 18s; animation-delay: 5s; }
.heart-wrapper:nth-child(6) { left: 60%; animation-duration: 11s; animation-delay: 3s; transform: scale(0.9); }
.heart-wrapper:nth-child(7) { left: 70%; animation-duration: 16s; animation-delay: 6s; }
.heart-wrapper:nth-child(8) { left: 80%; animation-duration: 13s; animation-delay: 2s; transform: scale(1.1); }
.heart-wrapper:nth-child(9) { left: 90%; animation-duration: 17s; animation-delay: 4s; }
.heart-wrapper:nth-child(10) { left: 5%; animation-duration: 19s; animation-delay: 1s; transform: scale(0.7); }
.heart-wrapper:nth-child(11) { left: 15%; animation-duration: 14s; animation-delay: 3s; }
.heart-wrapper:nth-child(12) { left: 25%; animation-duration: 12s; animation-delay: 5s; transform: scale(0.8); }
.heart-wrapper:nth-child(13) { left: 35%; animation-duration: 16s; animation-delay: 0s; }
.heart-wrapper:nth-child(14) { left: 45%; animation-duration: 11s; animation-delay: 2s; transform: scale(1.2); }
.heart-wrapper:nth-child(15) { left: 55%; animation-duration: 15s; animation-delay: 4s; }

@keyframes floatUp {
  0% {
    bottom: -50px;
    transform: translateX(0);
    opacity: 0;
  }
  20% {
    opacity: 0.8;
  }
  50% {
    transform: translateX(20px);
  }
  80% {
    opacity: 0.6;
  }
  100% {
    bottom: 110%;
    transform: translateX(-20px);
    opacity: 0;
  }
}
</style>
