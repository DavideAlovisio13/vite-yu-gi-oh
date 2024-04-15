<template>
  <HeaderComponent />
  <MainComponent />
</template>

<script>
import MainComponent from './components/MainComponent.vue';
import HeaderComponent from './components/HeaderComponent.vue';
import axios from 'axios';
import { store } from './data/store.js';
import MainComponentVue from './components/MainComponent.vue';
import CardComponentVue from './components/CardComponent.vue';
import { createApp } from 'vue';
  export default {
    name: 'App',
    components: {
      HeaderComponent,
      MainComponent
    },
    data() {
      return {
        store: store
      }
    },
    created() {
      axios.get(this.store.apiUrl).then(response => {
        this.store.cards = response.data.data;
        // console.log(this.store.cards);
      });
    }
  }
</script>

<style lang="scss" scoped>

</style>