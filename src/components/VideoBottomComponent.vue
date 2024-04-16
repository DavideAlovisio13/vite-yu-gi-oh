<template>
    <div class=" bottom-label d-flex justify-content-end">
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

        img{
            height: 100%;
        }
    }
</style>