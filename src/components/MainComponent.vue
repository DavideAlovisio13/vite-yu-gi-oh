<template>
    <main>
        <div class="container debug">
            <div class="row">
                <div class="col12 col-md-6 col-lg-3">
                    
                </div>
            </div>
        </div>
    </main>
</template>

<script>
    export default {
        name: 'MainComponent',
        data() {
            return {
            }
        }
    }
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/_variables.scss" as *;
// container style
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100% - 60px);
}

</style>