<template>
  <div class="w-100 position-relative">
    <div v-for="(video, index) in store.videos" :key="index">
        <video v-if="currentSlide === index" muted autoplay loop :src="video.src" :alt="video.alt" class="w-100 videos"></video>
    </div>
    <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev" @click="prevSlide()"
    >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    </button>
    <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next" @click="nextSlide()"
    >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
    </button>
    <VideoBottomComponent />
  </div>
</template>

<script>
import VideoBottomComponent from "./VideoBottomComponent.vue";
import { store } from "../data/store.js";
import gsap from 'gsap';
export default {
  name: "JumboComponent",
  components: {
    VideoBottomComponent,
  },
  data() {
    return {
        currentSlide: 0,
        store: store,
    };
  },
  methods: {
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.store.videos.length;
      gsap.fromTo('.videos', {opacity: 0}, {opacity: 1, duration: 1});
    },
    prevSlide() {
      this.currentSlide = (this.currentSlide - 1 + this.store.videos.length) % this.store.videos.length;
      gsap.fromTo('.videos', {opacity: 0}, {opacity: 1, duration: 1});
    }
  },
    mounted() {

  },
};
</script>

<style lang="scss" scoped>

.carousel-item {
  height: 400px;
}
video {
  display: inline-block;
}
</style>
