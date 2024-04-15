<template>
<div class="card">
    <img :src="img[0].image_url" :alt="name" />
    <div class="card-body">
      <h5 class="card-title">{{ name }}</h5>
      <ul>
        <li>Type: {{ type }}</li>
        <li>Frame Type: {{ frameType }}</li>
        <li>Description: {{ desc }}</li>
      </ul>
      <a href="#" class="btn btn-primary">Buy now</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardComponent",
  props: ["id", "name", "type", "frameType", "desc", "img", "archetype"],
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
.card {
    width: 18rem;
    margin: 1rem;
    img {
      height: 100%;
      object-fit: contain;
    }
    .card-body {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      h5 {
        margin: 0.5rem;
      }
      ul {
        list-style: none;
        padding: 0;
        li {
          margin: 0.5rem;
        }
      }
    }
  }
</style>
