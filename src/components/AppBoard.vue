<script>
export default {

}
</script>

<template>
    <div class="container" id="main-board">
        <div class="row row-cols-2 row-cols-md-3 row-cols-lg-5">

        </div>
    </div>
</template>

<style scoped lang="scss">
@use '../assets/scss/partials/variables' as *;

#main-board {
    border: 30px solid $light-grey;
    border-radius: 20px;
    background-color: $dark-grey;
    min-height: calc(100vh - 200px);

}
</style>