<template>
    <div class="w-100 d-flex justify-content-center align-items-center my-3">
       <span class=" m-5 p-3"> <h3 class="text-center px-4 fw-bold text-white">Sono disponibili {{ store.cards.length }} carte</h3></span>
    </div>
</template>

<script>
import { store } from '../data/store.js';
    export default {
        name: "ResultComponent",
        data() {
            return {
                store: store
            }
        }
    }
</script>

<style lang="scss" scoped>
span {
    clip-path: polygon(8% 0, 92% 0, 100% 50%, 92% 100%, 8% 100%, 0 50%);
    box-shadow: 0 15px 15px #000;
    background-color: #C10013;
}
</style>