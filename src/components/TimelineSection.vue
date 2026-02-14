<template>
  <v-container class="py-16 timeline-section d-flex flex-column justify-center" fluid>
    <v-fade-transition appear>
      <h2 class="text-h4 text-md-h3 text-center mb-12 text-primary font-weight-regular" style="font-family: 'Cormorant Garamond', serif;">
        การเดินทางของเรา
      </h2>
    </v-fade-transition>

    <v-timeline 
      density="default"
      line-color="primary" 
      line-thickness="2"
      truncate-line="both"
    >
      <v-timeline-item 
        v-for="(item, i) in timelineItems" 
        :key="i" 
        :dot-color="item.color || 'primary'" 
        size="small" 
        fill-dot
        class="timeline-item"
      >
        <template v-slot:opposite v-if="!mobile">
          <div class="text-caption text-grey font-weight-bold timeline-date-opposite">{{ item.date }}</div>
        </template>
        
        <v-card class="elevation-0 bg-transparent timeline-card">
          <div :class="['d-flex flex-column', mobile ? 'align-start' : (i % 2 !== 0 ? 'align-start' : 'align-end')]">
             <div v-if="mobile" class="text-caption text-primary font-weight-bold mb-1">{{ item.date }}</div>
             
             <div 
               class="image-placeholder rounded-circle bg-secondary mb-4 elevation-3 cursor-pointer" 
               :class="{'pulse-glow': i === timelineItems.length - 1, 'align-self-center': mobile, 'align-self-start': !mobile && (i % 2 !== 0), 'align-self-end': !mobile && (i % 2 === 0)}"
               style="width: 120px; height: 120px; overflow: hidden; border: 4px solid white;"
               @click="openImage(item.image)"
             >
                <v-img :src="item.image" cover></v-img>
             </div>
             
             <h3 class="text-h6 text-md-h5 font-weight-medium mb-1">{{ item.title }}</h3>
             <p class="text-body-2 text-grey-darken-1">{{ item.caption }}</p>
          </div>
        </v-card>
      </v-timeline-item>
    </v-timeline>

    <div class="d-flex justify-center mt-12">
      <v-btn
        color="primary"
        variant="tonal"
        rounded="xl"
        size="large"
        prepend-icon="mdi-arrow-right"
        class="px-8"
        @click="$emit('next')"
      >
        ไปต่อ
      </v-btn>
    </div>

    <!-- Image Preview Dialog -->
    <v-dialog v-model="showDialog" width="auto" max-width="95vw">
      <v-card class="bg-transparent elevation-0 overflow-visible" style="max-height: 90vh;">
        <v-btn
          icon="mdi-close"
          color="white"
          variant="flat"
          class="dialog-close-btn"
          @click="showDialog = false"
        ></v-btn>
        <v-img
          :src="selectedImage"
          max-height="80vh"
          min-width="400"
          width="100%"
          class="rounded-lg shadow-xl mx-auto"
          style="background-color: rgba(0,0,0,0.1)"
          contain
        >
          <template v-slot:placeholder>
            <div class="d-flex align-center justify-center fill-height">
              <v-progress-circular indeterminate color="primary"></v-progress-circular>
            </div>
          </template>
        </v-img>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useDisplay } from 'vuetify'

defineEmits(['next'])

const { mobile } = useDisplay()

const showDialog = ref(false)
const selectedImage = ref('')

const openImage = (img: string) => {
  selectedImage.value = img
  showDialog.value = true
}

const timelineItems = [
  {
    date: '15 พฤษภา 66',
    title: 'เป็นยุ้กหมาครั้งแรกก',
    caption: '',
    color: 'primary',
    image: '/image/1.jpg'
  },
  {
    date: '20 พฤษภา 66',
    title: 'เปงแฟนแล้ววววว',
    caption: '',
    color: 'secondary',
    image: '/image/2.jpg'
  },
  {
    date: '21 พฤษภา 66',
    title: 'ถ่ายตู้รูปแรก',
    caption: '',
    color: 'primary',
    image: '/image/3.JPG'
  },
  {
    date: '11 มิถุนา 66',
    title: 'ทำเล็บกับสวนสาครั้งแรก',
    caption: '',
    color: 'secondary',
    image: '/image/4.JPG'
  },
  {
    date: '8 กรกฏา 66',
    title: 'คอนเสิร์ตแรกที่ไปด้วยกัน',
    caption: '',
    color: 'primary',
    image: '/image/5.jpg'
  },
  {
    date: '29 กันยา 66',
    title: 'เป็นรอยฟันเลยอะ',
    caption: '',
    color: 'secondary',
    image: '/image/7.jpg'
  },
  {
    date: '29 กันยา 66',
    title: 'โดดดึ๋งๆ กันเป็นเด็กเลยย',
    caption: '',
    color: 'primary',
    image: '/image/8.jpg'
  },
  {
    date: '29 ตุลา 66',
    title: 'หลับน่ารักสุบๆ',
    caption: '',
    color: 'secondary',
    image: '/image/99.jpg'
  },
  {
    date: '27 มีนา 67',
    title: 'ทะเลลลลลลลลลลล',
    caption: '',
    color: 'primary',
    image: '/image/88.jpg'
  },
  {
    date: '22 พฤษภา 67',
    title: 'ถ่ายตู้รูปที่สอง',
    caption: '',
    color: 'secondary',
    image: '/image/10.JPG'
  },
  {
    date: '21 กันยา 67',
    title: 'รับปริญญาบี๋สวยมากกกกกกก',
    caption: '',
    color: 'primary',
    image: '/image/12.JPG'
  },
  {
    date: '6 พฤศจิ 67',
    title: 'โดนหมาหลอกด้วยกัน',
    caption: '',
    color: 'secondary',
    image: '/image/17.jpg'
  },
  {
    date: '12 ธันวา 67',
    title: 'ได้แฮปแฮปบี๋บี๋ครั้งแรก',
    caption: '',
    color: 'primary',
    image: '/image/14.jpg'
  },
  {
    date: '14 กุมภา 68',
    title: 'หมูทะวาเลยไทนน์',
    caption: '',
    color: 'secondary',
    image: '/image/23.JPG'
  },
  {
    date: '24 กุมภา 68',
    title: 'นอนก็ยังสวยย',
    caption: '',
    color: 'primary',
    image: '/image/13.JPG'
  },
  {
    date: '26 เมษา 68',
    title: 'ถูกจริตย์ไหมละะ',
    caption: '',
    color: 'secondary',
    image: '/image/15.JPG'
  },
  {
    date: '11 พฤษภา 68',
    title: 'orderมาสนุกมากก',
    caption: '',
    color: 'primary',
    image: '/image/16.JPG'
  },
  {
    date: '31 ตุลา 68',
    title: 'เสวว 😳',
    caption: '',
    color: 'secondary',
    image: '/image/18.JPG'
  },
  {
    date: '12 ธันวา 68',
    title: 'แฮปแฮปอีกรอบแน้ว',
    caption: '',
    color: 'primary',
    image: '/image/19.JPG'
  },
  {
    date: '1 มกรา 69',
    title: 'countdownด้วยกันครั้งแรกก',
    caption: '',
    color: 'secondary',
    image: '/image/20.jpg'
  },
  {
    date: '11 มกรา 69',
    title: 'โดนหมาหลอกอีกล้ะะ',
    caption: '',
    color: 'primary',
    image: '/image/21.jpg'
  },
  {
    date: '14 กุมภา 69',
    title: 'รักที่รักนะคั้บบบ',
    caption: '',
    color: 'secondary',
    image: '/image/22.jpg'
  }
]
</script>

<style scoped>
.timeline-section {
  min-height: 100vh;
}
.image-placeholder {
  border: 4px solid white;
  transition: transform 0.3s ease;
}
.image-placeholder:hover {
  transform: scale(1.05);
}

.pulse-glow {
  animation: softPulse 3s infinite;
  box-shadow: 0 0 0 0 rgba(216, 167, 177, 0.7);
}

@keyframes softPulse {
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(216, 167, 177, 0.7);
  }
  70% {
    transform: scale(1.05);
    box-shadow: 0 0 0 15px rgba(216, 167, 177, 0);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(216, 167, 177, 0);
  }
}
.cursor-pointer {
  cursor: pointer;
}

.dialog-close-btn {
  position: absolute;
  top: -20px;
  right: -20px;
  z-index: 10;
}

.shadow-xl {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}
</style>
