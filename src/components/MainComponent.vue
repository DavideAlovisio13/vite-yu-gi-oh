<template>
  <main>
    <div class="container">
      <div class="row">
        <div
          class="col-12 col-md-6 col-lg-3"
          v-for="(item, index) in store.cards"
          :key="index"
        >
          <CardComponent
            :id="item.id"
            :name="item.name"
            :type="item.type"
            :frameType="item.frameType"
            :desc="item.desc"
            :img="item.card_images"
            :archetype="item.archetype"
            :price="item.card_prices"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { store } from "../data/store.js";
import CardComponent from "./CardComponent.vue";
export default {
  name: "MainComponent",
  components: {
    CardComponent,
  },
  data() {
    return {
      store: store,
    };
  },
  methods: {},
  mounted() {
    // console.log(CardComponent);
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/_variables.scss" as *;

// main style
main {
  background: rgb(180, 88, 43);
  background: linear-gradient(
    0deg,
    rgba(180, 88, 43, 1) 88%,
    rgba(0, 0, 0, 1) 100%,
    rgba(0, 0, 0, 1) 100%
  );
}
// container style
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100% - 100px);
}
</style>
