<script>
import AppBoard from './AppBoard.vue';
import SelectForm from './SelectForm.vue';
import { store } from '../data/store';

export default {
    name: 'App main',
    data() {
        return { store }
    },
    components: { AppBoard, SelectForm },
    emits: ['choise-change'],
    methods: {
        typeChoise(type) {
            this.$emit('choise-change', type)
        }
    }

}
</script>

<template>
    <main>
        <div class="my-container d-flex">
            <nav class="mx-3">
                <select-form :options-list="store.type" @choise-change="typeChoise"></select-form>
            </nav>
            <app-board></app-board>
        </div>
    </main>
</template>

<style scoped lang="scss">
@use '../assets/scss/partials/variables' as *;

main {
    background-color: $red;

    nav {
        background-color: $dark-grey;
        border: 30px solid $light-grey;
        border-radius: 20px;
        flex-basis: 25%;
        padding: 20px;
    }
}
</style>