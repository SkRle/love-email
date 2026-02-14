<template>
  <v-app class="app-background">
    <FloatingHearts />
    <v-main>
      <v-fade-transition mode="out-in">
        <component :is="currentStepComponent" @next="nextStep" />
      </v-fade-transition>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import HeroSection from './components/HeroSection.vue'
import TimelineSection from './components/TimelineSection.vue'
import QuizSection from './components/QuizSection.vue'
import LetterSection from './components/LetterSection.vue'
import TicketSection from './components/TicketSection.vue'
import FloatingHearts from './components/FloatingHearts.vue'

const step = ref(1)

const currentStepComponent = computed(() => {
  switch (step.value) {
    case 1: return HeroSection
    case 2: return TimelineSection
    case 3: return QuizSection
    case 4: return LetterSection
    case 5: return TicketSection
    default: return HeroSection
  }
})

const nextStep = () => {
  step.value++
}
</script>

<style>
.app-background {
  background-color: #fae6e6 !important;
}

/* Global scrollbar styling for that ultra-minimal feel */
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  background: #FFF8F0;
}
::-webkit-scrollbar-thumb {
  background: #E6C9C9;
  border-radius: 4px;
}
::-webkit-scrollbar-thumb:hover {
  background: #D8A7B1;
}
</style>
