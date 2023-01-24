<script>
import AppBoard from './AppBoard.vue';

export default {
    name: 'App main',
    components: { AppBoard }

}
</script>

<template>
    <main>
        <app-board></app-board>
    </main>
</template>

<style scoped lang="scss">
@use '../assets/scss/partials/variables' as *;

main {
    background-color: $red;
}
</style>