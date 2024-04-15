<template>
<div class="card">
    <img src="" class="" alt="..." />
    <div class="card-body">
      <h5 class="card-title">{{ name }}</h5>
      <p class="card-text">
        {{ desc }}
      </p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardComponent",
  props: ["id", "name", "type", "frameType", "desc", "img"],
  data() {
    return {
    };
  },
  methods: {
    
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/_variables.scss" as *;
</style>
