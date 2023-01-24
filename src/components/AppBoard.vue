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
            <div v-if="store.isLoading" class="loader text-center">
                <img src="../assets/img/logo.png" alt="Logo">
                <h1>Loading...</h1>
            </div>
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
    min-height: calc(100vh - 200px);
    position: relative;

    h1 {
        margin: 20px auto;
    }
}

.loader {
    position: absolute;
    top: 10px;
    left: 50%;
    right: 0;
    bottom: 10px;
    transform: translate(-50%, 0);
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
</style>