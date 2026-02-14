<template>
  <v-container class="quiz-section d-flex flex-column justify-center align-center position-relative overflow-hidden" fluid>
    <!-- Background Decor -->
    <div class="glow-orb orb-1"></div>
    <div class="glow-orb orb-2"></div>

    <v-fade-transition appear>
      <v-card 
        width="100%" 
        max-width="700" 
        class="quiz-card text-center pa-6 pa-md-10"
        elevation="4"
        rounded="xl"
      >
        <div class="lives-container mb-4">
          <v-icon 
            v-for="n in 2" 
            :key="n" 
            :color="n <= lives ? 'red' : 'grey-lighten-2'" 
            class="mx-1"
            size="24"
          >
            mdi-heart
          </v-icon>
        </div>

        <v-window v-model="currentQuestion" class="py-4">
          <v-window-item v-for="(q, index) in questions" :key="index" :value="index">
            <div class="mb-2 text-caption text-uppercase text-grey-darken-1 tracking-wide">
              คำถามที่ {{ index + 1 }} / {{ questions.length }}
            </div>
            
            <h2 class="text-h5 text-md-h4 mb-8 text-primary font-weight-regular" style="font-family: 'Cormorant Garamond', serif;">
              {{ q.text }}
            </h2>
            
            <v-row dense class="button-grid">
              <v-col v-for="(option, optIndex) in q.options" :key="optIndex" cols="12" sm="6">
                <v-hover v-slot="{ isHovering, props }">
                  <v-btn
                    v-bind="props"
                    block
                    variant="outlined"
                    :color="isHovering ? 'primary' : 'secondary'"
                    class="mb-3 py-6 text-body-1 quiz-btn"
                    rounded="xl"
                    style="text-transform: none; border-color: #D8A7B1; height: auto; min-height: 64px;"
                    @click="handleAnswer(option)"
                  >
                    {{ option }}
                  </v-btn>
                </v-hover>
              </v-col>
            </v-row>
          </v-window-item>

          <v-window-item :value="questions.length">
            <div class="result-view d-flex flex-column align-center">
               <v-scale-transition appear>
                 <v-icon color="primary" size="80" class="animate-pulse mb-6">mdi-heart</v-icon>
               </v-scale-transition>

               <h2 class="text-h4 text-md-h3 mb-4 text-primary" style="font-family: 'Cormorant Garamond', serif;">
                 ที่รักเก่งจังงง
               </h2>
               <p class="text-body-1 text-grey-darken-1 mb-8" style="max-width: 400px;">
                 ตอบถูกหมดเลย เก่งมากกก
               </p>
               
               <div class="mt-4">
                 <v-btn
                   color="primary"
                   variant="flat"
                   rounded="xl"
                   size="x-large"
                   prepend-icon="mdi-email-outline"
                   class="px-8"
                   @click="$emit('next')"
                 >
                   เปิดจดหมาย
                 </v-btn>
               </div>
            </div>
          </v-window-item>
        </v-window>
        
        <v-progress-linear
          v-if="currentQuestion < questions.length"
          :model-value="((currentQuestion + 1) / questions.length) * 100"
          color="primary"
          height="6"
          rounded
          class="mt-8 opacity-50"
        ></v-progress-linear>
      </v-card>
    </v-fade-transition>

    <!-- Heartbreak Dialog -->
    <v-dialog v-model="showHeartbreak" max-width="400">
      <v-card class="pa-6 text-center rounded-xl" elevation="10">
        <v-icon color="red" size="64" class="mb-4 animate-pulse mx-auto">mdi-heart-broken</v-icon>
        <h3 class="text-h5 text-primary mb-2" style="font-family: 'Cormorant Garamond', serif;">
          ม่ายช่ายยยยยย
        </h3>
        <p class="text-body-1 text-grey-darken-1 mb-6">
          บี๋จำไม่ได้อ่ออ คิดอีกทีนะะ
        </p>
        <v-btn color="primary" rounded="xl" @click="showHeartbreak = false">ลองอีกครั้ง</v-btn>
      </v-card>
    </v-dialog>

    <!-- Game Over Dialog -->
    <v-dialog v-model="showGameOver" persistent max-width="400">
      <v-card class="pa-6 text-center rounded-xl" elevation="10">
        <v-icon color="grey" size="64" class="mb-4 mx-auto">mdi-emoticon-sad</v-icon>
        <h3 class="text-h5 text-primary mb-2" style="font-family: 'Cormorant Garamond', serif;">
          บี๋อะะ
        </h3>
        <p class="text-body-1 text-grey-darken-1 mb-6">
          แงงงงงงง ตอบใหม่เลยยยยย
        </p>
        <v-btn color="primary" rounded="xl" @click="restartQuiz">เริ่มใหม่</v-btn>
      </v-card>
    </v-dialog>

    <!-- Success Dialog -->
    <!-- <v-dialog v-model="showSuccess" max-width="400">
      <v-card class="pa-6 text-center rounded-xl" elevation="10">
        <v-icon color="pink-lighten-2" size="64" class="mb-4 animate-pulse mx-auto">mdi-heart-multiple</v-icon>
        <h3 class="text-h5 text-primary mb-2" style="font-family: 'Cormorant Garamond', serif;">
          ที่รักเก่งจังงง
        </h3>
        <p class="text-body-1 text-grey-darken-1 mb-6">
          ตอบถูกหมดเลย เก่งที่สุดในโลก!
        </p>
        <v-btn color="primary" rounded="xl" @click="showSuccess = false">ไปต่อเลยยย</v-btn>
      </v-card>
    </v-dialog> -->
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'

defineEmits(['next'])

const currentQuestion = ref(0)
const lives = ref(2)
const showHeartbreak = ref(false)
const showGameOver = ref(false)
const showSuccess = ref(false)

const questions = [
  {
    text: "เราเจอกันครั้งแรกที่ไหน",
    options: ["Big C", "สวนสาธารณะ", "โรงหนัง", "Central", "บขส", "มหาลัย"],
    correct: "Central" 
  },
  {
    text: "เราเคยไปเที่ยวทะเลที่ไหนกันน",
    options: ["เกาะแก้วพิสดาร", "เกาะล้าน", "เกาะหลีเป๊ะ", "เกาะสิมิลัน", "เกาะหมี", "เกาะช้าง"],
    correct: "เกาะล้าน"
  },
  {
    text: "ทริปหน้าเราจะไปที่ไหนนนน",
    options: ["เขาใหญ่", "เชียงใหม่", "เกาะหลีเป๊ะ", "ภูเก็ต", "เกาะช้าง", "สงขลา"],
    correct: "เกาะหลีเป๊ะ"
  },
  {
    text: "เราเป็นแฟนกันวันที่เท่าไหร่",
    options: ["วันที่ 14", "วันที่ 1", "วันที่ 30", "วันที่ 25", "วันที่ 20", "วันที่ 15"],
    correct: "วันที่ 20"
  },
  {
    text: "มื้อแรกที่เรากินอะไรกัน",
    options: ["ชาบู", "หมูกระทะ", "ส้มตำ", "อาหารญี่ปุ่น", "ก๋วยเตี๋ยว", "หมาล่า"], 
    correct: "หมาล่า"
  }
]

const handleAnswer = (answer: string) => {
  const currentQ = questions[currentQuestion.value]
  
  if (!currentQ) return

  if (answer === currentQ.correct) {
    // Correct Answer
    setTimeout(() => {
      currentQuestion.value++
      if (currentQuestion.value === questions.length) {
        showSuccess.value = true
      }
    }, 200)
  } else {
    // Wrong Answer
    lives.value--
    if (lives.value > 0) {
      showHeartbreak.value = true
    } else {
      showGameOver.value = true
    }
  }
}

const restartQuiz = () => {
  currentQuestion.value = 0
  lives.value = 2
  showGameOver.value = false
  showSuccess.value = false
}
</script>

<style scoped>
.quiz-section {
  min-height: 100vh;
}

.quiz-card {
  background: rgba(255, 255, 255, 0.4) !important;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.6);
  z-index: 2;
}

.quiz-btn {
  white-space: normal;
  transition: all 0.3s ease;
}

.glow-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  z-index: 1;
  opacity: 0.6;
}

.orb-1 {
  background: #E6C9C9;
  top: 10%;
  left: -50px;
}

.orb-2 {
  background: #D8A7B1;
  bottom: 10%;
  right: -50px;
}

.tracking-wide {
  letter-spacing: 0.1em;
}

.animate-pulse {
  animation: pulse 2s infinite;
}
@keyframes pulse {
  0% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.1); opacity: 0.8; }
  100% { transform: scale(1); opacity: 1; }
}
</style>
