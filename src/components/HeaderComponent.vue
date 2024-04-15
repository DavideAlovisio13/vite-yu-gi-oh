<template>
    <header class="position-relative">
        <img src="/public/images/yu-gu-oh_preview_rev_1.png" alt="logo" />
        <video src="/public/video/dust.mp4" autoplay muted loop class="position-absolute video1"></video>
        <video src="/public/video/smoke.mp4" autoplay muted loop class="position-absolute video2"></video>
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
    background-image: url("/public/images/tcg-banner-hero.webp");
    background-position: -320px;
    background-repeat: no-repeat;
    color: $color-black;
    padding: 10px;
    height: 100px;
    //h1 style
    h1 {
        font-size: 1.5rem;
        margin-left: 10px;
    }
    //img style
    img {
        width: 300px;
        position: absolute;
        right: 0;
        
    }
    //video style
    .video1 {
        width: 100%;
        opacity: 0.5;
        z-index: -1;
    }
    .video2 {
        width: 100%;
        z-index: -2;
    }
}
</style>