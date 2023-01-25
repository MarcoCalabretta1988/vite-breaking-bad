<script>
export default {
    name: 'App Header'

}
</script>

<template>
    <header>
        <div class="my-container d-flex justify-content-between align-items-center h-100">
            <div class="lens d-flex">
                <img src="../assets/img/blu_lens.png" alt="Blu lens">
                <figure class="mx-4 d-flex justify-content-center align-items-center">
                    <img src="../assets/img/red_lens.png" alt="Red lens">
                    <img src="../assets/img/yellow_lens.png" alt="Red lens">
                    <img src="../assets/img/green_lens.png" alt="Red lens">
                </figure>
            </div>
            <div id="logo">
                <img src="../assets/img/logo.png" alt="Logo Pokemon" class="img-fluid">
            </div>
        </div>
    </header>
</template>

<style scoped lang="scss">
@use '../assets/scss/partials/variables' as *;

header {
    background-color: $red;
    height: 200px;

    .lens {
        img {
            width: 100px;
            height: 100px;
        }

        figure {
            img {
                width: 50px;
                height: 50px;
                padding: 5px;
            }
        }
    }
}
</style>