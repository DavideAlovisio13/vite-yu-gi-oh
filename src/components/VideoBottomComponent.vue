<template>
    <div class=" bottom-label d-flex justify-content-evenly align-items-center">
        <h2 class="text-white fs-1 fw-bolder text-uppercase">Benvenuti Duellanti!</h2>
        <img src="/images/Legacy-of-the-Duelist-Hero.webp" alt="legacy-bg">
    </div>
</template>

<script>
    export default {
        name: "VideoBottomComponent",
    }
</script>

<style lang="scss" scoped>
    .bottom-label{
        position: absolute;
        bottom: -50px;
        margin-bottom: 30px;
        height: 100px;
        width: 100%;
        background-image: url('/images/legacy-of-the-duelist-bg.webp');
        background-size: cover;
        box-shadow: 0 15px 15px #000;
        overflow: hidden;

        img{
            width: 250px
        }
    }
</style>