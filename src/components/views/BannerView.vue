<template>
  <swiper
    :spaceBetween="30"
    :centeredSlides="true"
    :autoplay="{ delay: 4000, disableOnInteraction: false }"
    :pagination="{ clickable: true }"
    :navigation="true"
    class="mySwiper"
    :modules="swiperModules"
  >
    <SwiperSlide v-for="(slide, index) in slides" :key="index">
      <div class="bg-[#E3FFE6] h-screen">
        <div class="w-10/12 mx-auto flex items-center justify-between">
          <div class="flex-1">
            <h2 class="tracking-wider text-lg mb-3 font-bold">In this season, find the best 🔥</h2>
            <h1 class="text-5xl tracking-widest leading-tight font-bold">{{ slide.title }}</h1>
            <button class="bg-secondary text-white px-8 tracking-wider py-3 rounded-full mt-4">
              Explore Now
            </button>
          </div>
          <div class="flex-1">
            <img :src="slide.image" alt="Slide Image" class="mx-auto" />
          </div>
        </div>
      </div>
    </SwiperSlide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

// Import required Swiper modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      slides: [
        {
          image:
            'https://ciseco-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero-right-2.dc1c84f6.png&w=1080&q=75',
          title: 'Exclusive collection for everyone'
        },
        {
          image:
            'https://ciseco-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero-right-3.010fb6aa.png&w=1080&q=75',
          title: 'Exclusive collection for everyone'
        }
      ],
      // Specify Swiper modules
      swiperModules: [Autoplay, Pagination, Navigation]
    }
  }
}
</script>

<style>
:root {
  --swiper-theme-color: #000;
}
.swiper-pagination-bullet {
  width: var(--swiper-pagination-bullet-width, var(--swiper-pagination-bullet-size, 8px));
  height: var(--swiper-pagination-bullet-height, var(--swiper-pagination-bullet-size, 8px));
  display: inline-block;
  background: #989292;
  border: 10px;
  opacity: var(--swiper-pagination-bullet-inactive-opacity, 0.2);
}

.swiper-pagination-bullet-active {
  width: var(--swiper-pagination-bullet-width, var(--swiper-pagination-bullet-size, 12px));
  height: var(--swiper-pagination-bullet-height, var(--swiper-pagination-bullet-size, 12px));
  opacity: var(--swiper-pagination-bullet-opacity, 1);
  background: var(--swiper-pagination-color, var(--swiper-theme-color));
}
.swiper-pagination-bullet {
  border-radius: 2px;
  border-radius: 100%;
}
</style>
