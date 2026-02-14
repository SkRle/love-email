<template>
  <v-container class="ticket-section d-flex align-center justify-center py-8 py-md-16 overflow-hidden position-relative" fluid>
    <!-- Confetti Background -->
    <div class="confetti-container">
      <div v-for="n in 20" :key="n" class="confetti"></div>
    </div>

    <v-scale-transition appear>
      <div class="ticket-container elevation-10">
        <div class="ticket-part ticket-left pa-6 pa-sm-10 text-center d-flex flex-column justify-center align-center">
          <v-icon color="primary" size="56" class="mb-4">mdi-ticket-confirmation</v-icon>
          <h2 class="text-h5 text-sm-h4 text-primary font-weight-bold mb-2" style="font-family: 'Cormorant Garamond', serif;">
            ตั๋วแห่งความรัก
          </h2>
          <p class="text-caption text-grey text-uppercase mb-6 tracking-wide">สำหรับ 2 ที่นั่ง &bull; ไม่มีวันหมดอายุ</p>
          
          <v-divider class="mb-6 w-100" color="secondary"></v-divider>
          
          <v-row class="w-100 mb-2" no-gutters>
            <v-col cols="6" class="text-left">
              <div class="text-caption text-grey font-weight-bold">วันที่</div>
              <div class="text-body-1 font-weight-medium">14 ก.พ. 2567</div>
            </v-col>
            <v-col cols="6" class="text-right">
              <div class="text-caption text-grey font-weight-bold">เวลา</div>
              <div class="text-body-1 font-weight-medium">ตลอดไป</div>
            </v-col>
          </v-row>
          
          <v-row class="w-100 mb-8" no-gutters>
             <v-col cols="6" class="text-left">
              <div class="text-caption text-grey font-weight-bold">สถานที่</div>
              <div class="text-body-1 font-weight-medium">หัวใจของเค้า</div>
            </v-col>
            <v-col cols="6" class="text-right">
              <div class="text-caption text-grey font-weight-bold">ที่นั่ง</div>
              <div class="text-body-1 font-weight-medium">VIP</div>
            </v-col>
          </v-row>
        </div>
        
        <div class="perforation-line"></div>
        
        <div class="ticket-part ticket-right pa-6 pa-sm-10 d-flex flex-column justify-center align-center bg-grey-lighten-4">
          <!-- QR Code Placeholder -->
          <div class="qr-code mb-4 bg-white pa-2 rounded-lg elevation-2">
             <v-img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=I%20Love%20You" width="140" height="140"></v-img>
          </div>
          <p class="text-caption text-grey font-italic">สแกนเพื่อยืนยัน</p>
        </div>
      </div>
    </v-scale-transition>

    <v-snackbar v-model="snackbar" color="success" timeout="3000" location="top">
      เพิ่มลงใน Wallet แล้ว!
      <template v-slot:actions>
        <v-btn variant="text" @click="snackbar = false">ปิด</v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const loading = ref(false)
const snackbar = ref(false)

const saveToWallet = () => {
  loading.value = true
  setTimeout(() => {
    loading.value = false
    snackbar.value = true
  }, 1500)
}
</script>

<style scoped>
.ticket-section {
  min-height: 100vh;
  /* background: #FFF8F0; */
}

.ticket-container {
  display: flex;
  flex-direction: column; /* Default to column for small screens */
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 24px;
  overflow: hidden;
  width: fit-content;
  max-width: 900px;
  min-width: 300px; /* Prevet it from being too narrow on tiny screens */
  position: relative;
  z-index: 2;
}

@media (min-width: 600px) {
  .ticket-container {
    flex-direction: row;
  }
}

.ticket-part {
  flex: 1;
}

.ticket-right {
  flex: 0 1 auto;
  min-width: 200px;
  position: relative;
  border-top: 2px dashed #e0e0e0;
}

@media (min-width: 600px) {
  .ticket-right {
    border-top: none;
    border-left: 2px dashed #e0e0e0;
  }
}

.perforation-line {
  /* Hide the old distinct div, use border on ticket-right instead for responsiveness */
  display: none;
}

.tracking-wide {
  letter-spacing: 0.15em;
}

/* Confetti Animation */
.confetti-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
}

.confetti {
  position: absolute;
  width: 10px;
  height: 10px;
  background-color: #D8A7B1;
  animation: confetti-fall 4s linear infinite;
  top: -10px;
}

.confetti:nth-child(even) { background-color: #E6C9C9; }
.confetti:nth-child(3n) { background-color: #B00020; }
.confetti:nth-child(4n) { background-color: #FFD700; }

.confetti:nth-child(1) { left: 10%; animation-duration: 3s; animation-delay: 0s; }
.confetti:nth-child(2) { left: 20%; animation-duration: 4s; animation-delay: 2s; }
.confetti:nth-child(3) { left: 30%; animation-duration: 2.5s; animation-delay: 4s; }
.confetti:nth-child(4) { left: 40%; animation-duration: 3.5s; animation-delay: 1s; }
.confetti:nth-child(5) { left: 50%; animation-duration: 4s; animation-delay: 3s; }
.confetti:nth-child(6) { left: 60%; animation-duration: 3s; animation-delay: 5s; }
.confetti:nth-child(7) { left: 70%; animation-duration: 3.5s; animation-delay: 5s; }
.confetti:nth-child(8) { left: 80%; animation-duration: 2.5s; animation-delay: 2s; }
.confetti:nth-child(9) { left: 90%; animation-duration: 4s; animation-delay: 4s; }
.confetti:nth-child(10) { left: 15%; animation-duration: 3s; animation-delay: 6s; }
/* ... add more if needed */

@keyframes confetti-fall {
  0% { transform: translateY(0) rotate(0deg); opacity: 1; }
  100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
}
</style>
