<script>
import { store } from '../data/store';
import PokemonCard from './pokemon/PokemonCard.vue';
import Loader from './Loader.vue';
export default {
    name: 'AppBoard',
    components: { PokemonCard, Loader },
    data() {
        return { store }
    }

}
</script>

<template>
    <div class="container" id="main-board">
        <div class="row row-cols-2 row-cols-md-3 row-cols-lg-5">
            <loader v-if="store.isLoading"></loader>
            <pokemon-card v-else v-for="pokemon in store.pokemons" :key="store.pokemons.id" :name="pokemon.name"
                :img="pokemon.imageUrl" :color="pokemon.color" :type="pokemon.type1"
                :number="pokemon.number"></pokemon-card>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use '../assets/scss/partials/variables' as *;

#main-board {
    border: 30px solid $light-grey;
    border-radius: 20px;
    background-color: $dark-grey;
    height: calc(100vh - 200px);
    overflow: auto;

    h1 {
        margin: 20px auto;
    }
}
</style>