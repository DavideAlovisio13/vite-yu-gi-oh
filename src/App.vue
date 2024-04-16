<template>
  <HeaderComponent />
  <MainComponent v-if="!store.loading" />
  <LoaderComponent v-else :class="{'d-none': store.cards.length > store.cards.length}"/>
</template>

<script>

import MainComponent from './components/MainComponent.vue';
import HeaderComponent from './components/HeaderComponent.vue';
import LoaderComponent from "./components/LoaderComponent.vue";
import axios from 'axios';
import { store } from './data/store.js';
  export default {
    name: 'App',
    components: {
      HeaderComponent,
      MainComponent,
      LoaderComponent
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