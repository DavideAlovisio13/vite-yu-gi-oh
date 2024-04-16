<template>
  <div class="card shadow-lg" @mouseover="scaleUp" @mouseleave="scaleDown">
    <img :src="img[0].image_url" :alt="name" />
    <transition name="slide-fade">
      <div v-if="showCardBody" class="card-bodyl">
        <h5 class="card-title">{{ name }}</h5>
        <ul>
          <li><strong>Type:</strong> {{ type }}</li>
          <li><strong>Frame Type:</strong> {{ frameType }}</li>
          <li><strong>Archetype:</strong> {{ archetype }}</li>
          <li><strong>Description:</strong> {{ desc }}</li>
          <li>
            <strong>Best Price:</strong> {{ price[0].cardmarket_price }} $
          </li>
        </ul>
        <a href="#" class="btn btn-primary">Buy now</a>
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
  transition: transform 0.5s ease-in-out ;

  &:hover {
    transform: rotateY(180deg), ;
    ;

    img {
      height: 100%;
      object-fit: contain;
    }
    .card-bodyl {
      color: azure;
      position: absolute;
      padding: 1rem 0;
      border-radius: 10px;
      border: 5px solid $color-black;
      background-image: url("/images/87478-large_default.jpg");
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      transform: rotateY(180deg);
      max-height: 0;
      opacity: 0;
      overflow-y: auto;
      
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
  &:hover .card-bodyl {
    transition: all cubic-bezier(0.175, 0.885, 0.32, 1.275);
    min-height: 410px;
    max-height: 410px;
    opacity: 1;
  }
}

</style>
