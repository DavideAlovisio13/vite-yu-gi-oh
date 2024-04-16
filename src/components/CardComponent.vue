<template>
  <div class="card shadow-lg" @mouseover="scaleUp" @mouseleave="scaleDown">
    <img :src="img[0].image_url" :alt="name" />
    <transition name="slide-fade">
      <div class="card-bodyl">
        <ul  v-if="showCardBody">
          <li><strong>Name:</strong> {{ name }}</li>
          <li><strong>Type:</strong> {{ type }}</li>
          <li><strong>Frame Type:</strong> {{ frameType }}</li>
          <li><strong>Archetype:</strong> {{ archetype }}</li>
          <li><strong>Description:</strong> {{ desc }}</li>
          <li>
            <strong>Best Price:</strong> {{ price[0].cardmarket_price }} $
          </li>
          <li><a href="#" class="btn btn-primary">Buy now</a></li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "CardComponent",
  props: [
    "id",
    "name",
    "type",
    "frameType",
    "desc",
    "img",
    "archetype",
    "price",
  ],
  data() {
    return {
      showCardBody: false,
    };
  },
  methods: {
    scaleUp() {
      this.showCardBody = true;
    },
    scaleDown() {
      this.showCardBody = false;
    },
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/_variables.scss" as *;
.card {
  width: 18rem;
  margin: 1rem;
  transition: transform 0.5s ease-out ;

  &:hover {
    transform: scale(1.05); ;
    ;

    img {
      height: 100%;
      object-fit: contain;
    }
    .card-bodyl {
      position: absolute;
      top: 0px;
      color: azure;
      padding: 1rem 0;
      border-radius: 10px;
      border: 5px solid $color-black;
      background-image: url("/images/87478-large_default.jpg");
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      height: 410px;
      opacity: 0.9;
      overflow-y: auto;
      transition: opacity 0.5s ease-out;
      
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
}

</style>
