<script>
import { store } from '../data/store';
import PokemonCard from './pokemon/PokemonCard.vue';
export default {
    name: 'AppBoard',
    components: { PokemonCard },
    data() {
        return { store }
    }

}
</script>

<template>
    <div class="container" id="main-board">
        <div class="row row-cols-2 row-cols-md-3 row-cols-lg-5">
            <pokemon-card v-for="pokemon in store.pokemons" :key="store.pokemons.id" :name="pokemon.name"
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
    min-height: calc(100vh - 200px);

}
</style>