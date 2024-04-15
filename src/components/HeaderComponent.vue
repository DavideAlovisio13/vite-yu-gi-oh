<template>
    <header>
        <img src="/public/images/png-clipart-yu-gi-oh-power-of-chaos-yugi-the-destiny-yu-gi-oh-the-sacred-cards-yugi-mutou-bakura-yu-miscellaneous-game.png" alt="logo" />
        <h1>Vue.js 3</h1>
    </header>
</template>

<script>
    export default {
        name: 'HeaderComponent',
        data() {
            return {
            }
        }
    }
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/_variables.scss" as *;
header {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #333;
    color: $color-black;
    padding: 10px;
    height: 60px;
    //h1 style
    h1 {
        font-size: 1.5rem;
        margin-right: 10px;
    }
    //img style
    img {
        width: 50px;
        height: 50px;
        aspect-ratio: 1/1;
    }
}
</style>