<template>
  <main>
    <JumboComponent />
    <ResultComponent />
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
import ResultComponent from './ResultComponent.vue';
import JumboComponent from "./JumboComponent.vue";
export default {
  name: "MainComponent",
  components: {
    CardComponent,
    ResultComponent,
    JumboComponent
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
  background-image: url("/images/hieroglyphs-bg.png");
}
// container style
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100% - 100px);
  margin: 30px auto;
}
</style>
