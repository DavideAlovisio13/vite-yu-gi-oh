<template>
  <HeaderComponent />
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import axios from 'axios';
import { store } from './data/store.js';
  export default {
    name: 'App',
    components: {
      HeaderComponent
    },
    data() {
      return {
        store: store
      }
    },
    created() {
      axios.get(this.store.apiUrl).then(response => {
        console.log(response.data.data);
      });
    }
  }
</script>

<style lang="scss" scoped>

</style>