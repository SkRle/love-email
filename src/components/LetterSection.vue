<template>
  <v-container class="letter-section d-flex align-center justify-center py-8 py-md-16" fluid>
    <v-sheet
      max-width="800"
      class="pa-6 pa-md-16 letter-sheet elevation-2 position-relative"
      rounded="xl"
    >
      <!-- Wax Seal -->
      <div class="wax-seal">
        <svg width="80" height="80" viewBox="0 0 100 100" fill="#B00020">
          <circle cx="50" cy="50" r="45" fill="#B00020" opacity="0.8" />
          <circle cx="50" cy="50" r="35" stroke="#800000" stroke-width="2" fill="none" />
          <path d="M50 25 C65 25, 75 35, 75 50 C75 65, 65 75, 50 75 C35 75, 25 65, 25 50 C25 35, 35 25, 50 25" fill="#900000" />
          <text x="50" y="65" font-family="serif" font-size="40" fill="#600000" text-anchor="middle">♥</text>
        </svg>
      </div>

      <div class="letter-content text-justify">
        <p class="text-h6 text-md-h5 mb-8 font-italic text-grey">ถึงปิ่น</p>
        
        <p class="letter-text mb-6">
          ขอบคูณนะคะที่เข้ามาในชีวิตเค้า เข้ามาเป็นกำลังใจได้มาอยู่ด้วยกันถึงทุกวันนี้ เค้าอาจทำตัวไม่ดีไปบ้างทำให้เธอรู้สึกไม่ดีบ้างแต่เค้าดีใจนะที่มีเธออยู่ด้วย
        </p>
        
        <p class="letter-text mb-6">
          อยากไปเที่ยวด้วยกันอีกหลายๆที่ อยู่ด้วยกันในหลายๆเทศกาล กินของอร่อยๆด้วยกันอีกหลายๆมื้อ อยากทำกิจกรรมกันหลายๆอย่างอยากอยู่ด้วยกันไปนานๆ
        </p>

        <p class="letter-text mb-12">
          ขอบคุณที่เป็นวาเลนไทน์ของเค้า ทั้งวันนี้และตลอดไปนะ สู้ๆนะครับคนเก่งของเค้า ไม่ว่าจะเจออะไรเค้าอยู่กับเธอเสมอนะ🩶
        </p>

        <p class="text-right text-h6 text-md-h5 font-italic signature text-primary mb-8">
          รักบี๋นะ
        </p>
        
        <div class="d-flex justify-center mt-8">
          <v-btn
            color="primary"
            variant="outlined"
            icon="mdi-ticket-confirmation"
            size="large"
            @click="$emit('next')"
          >
          </v-btn>
        </div>
      </div>
    </v-sheet>
  </v-container>
</template>

<script setup lang="ts">
defineEmits(['next'])
</script>

<style scoped>
.letter-section {
  min-height: 100vh;
  background-color: #fae6e6;
}

.letter-sheet {
  background: rgba(255, 255, 255, 0.95) !important;
  transition: transform 0.3s ease;
  border: 1px solid rgba(216, 167, 177, 0.3);
}

.letter-sheet:hover {
  transform: translateY(-5px);
}

.letter-text {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.1rem;
  line-height: 1.8;
  color: #4a4a4a;
}

@media (min-width: 600px) {
  .letter-text {
    font-size: 1.35rem;
    line-height: 2;
  }
}

.signature {
  font-family: 'Cormorant Garamond', serif;
}

.wax-seal {
  position: absolute;
  top: -30px;
  right: 30px;
  filter: drop-shadow(0 4px 4px rgba(0,0,0,0.2));
  transform: rotate(15deg);
}

@media (max-width: 600px) {
  .wax-seal {
    top: -20px;
    right: 10px;
    transform: scale(0.8) rotate(15deg);
  }
}
</style>
