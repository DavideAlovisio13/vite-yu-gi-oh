<template>
  <HeaderComponent v-if="!store.loading" @select-type="getCards()"/>
  <MainComponent v-if="!store.loading" />
  <LoaderComponent v-else />
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
    methods: {
      getCards() {
        this.store.loading = true;
      axios.get(this.store.apiUrl, this.store.options).then(response => {
        this.store.cards = response.data.data;
      }).catch(error => {
        console.log(error);
      }).finally(() => {
        setTimeout(() => {
           this.store.loading = false;
        }, 10000);
      });
      }
    },
      
    created() {
      this.getCards();
    }
  }
</script>

<style lang="scss"></style>