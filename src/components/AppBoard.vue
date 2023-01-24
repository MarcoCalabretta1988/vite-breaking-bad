<script>
import { getCurrentInstance } from 'vue';
import PokemonCard from './pokemon/PokemonCard.vue';
export default {
    name: 'AppBoard',
    components: { PokemonCard },
    data() {
        return {
            pokemons: [
                {
                    id: 1,
                    type1: 'green',
                    number: 1,
                    name: 'Bulbasaur',
                    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png'

                },
                {
                    id: 2,
                    type1: 'red',
                    number: 4,
                    name: 'Charmender',
                    img: 'https://img.joomcdn.net/4391cf741f749de91359c2b37a4b153b0193394b_original.jpeg'

                },
                {
                    id: 3,
                    type1: 'blue',
                    number: 7,
                    name: 'Squirtle',
                    img: 'https://img.joomcdn.net/7ff6debe2ecc1003e96dfda69e006418aef60a67_original.jpeg'

                },
            ]
        }
    }

}
</script>

<template>
    <div class="container" id="main-board">
        <div class="row row-cols-2 row-cols-md-3 row-cols-lg-5">
            <pokemon-card v-for="pokemon in pokemons" :name="pokemon.name" :img="pokemon.img" :type="pokemon.type1"
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