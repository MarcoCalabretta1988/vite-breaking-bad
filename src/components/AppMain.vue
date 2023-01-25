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
    emits: ['choise-change', 'to-display'],
    methods: {
        typeChoise(type) {
            this.$emit('choise-change', type)
        },
        toDisplay(number) {
            this.$emit('to-display', number)
        }


    }

}
</script>

<template>
    <main>
        <div class="my-container d-flex">
            <nav class="mx-3">
                <select-form :options-list="store.type" default-text="Tutti" @choise-change="typeChoise"></select-form>
                <select-form :options-list="[20, 30, 50, 100]" default-text="N°Pokemon"
                    @choise-change="toDisplay"></select-form>
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