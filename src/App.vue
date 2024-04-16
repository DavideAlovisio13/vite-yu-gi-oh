<template>
  <HeaderComponent />
  <MainComponent />
</template>

<script>
import MainComponent from './components/MainComponent.vue';
import HeaderComponent from './components/HeaderComponent.vue';
import axios from 'axios';
import { store } from './data/store.js';
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
      this.store.loading = true;
      axios.get(this.store.apiUrl).then(response => {
        this.store.cards = response.data.data;
      }).catch(error => {
        console.log(error);
      }).finally(() => {
        this.store.loading = false;
      });
    },
    methods: {
    }
  }
</script>

<style lang="scss" scoped>

</style>