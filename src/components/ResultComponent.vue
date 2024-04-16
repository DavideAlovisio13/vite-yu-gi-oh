<template>
    <div>
        <h2 class="text-center"><span class="badge text-bg-secondary m-5">Sono disponibili {{ store.cards.length }} carte</span></h2>
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

</style>