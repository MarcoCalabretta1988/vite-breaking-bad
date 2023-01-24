<script>
import axios from 'axios';
import { store } from './data/store';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

export default {
  name: 'App pokedex',
  data() {
    return { store }
  },
  components: { AppHeader, AppMain },
  methods: {
    fetchPokemons(url) {
      store.isLoading = true;
      axios.get(url)
        .then(res => {
          store.pokemons = res.data.docs;
        }).catch(error => {
          console.log(error);
          store.pokemons = [];
        }).then(() => {
          store.isLoading = false;
        });
    }
  },
  created() {
    this.fetchPokemons('https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons?per=20&page=1');
  }

}

</script>

<template>
  <app-header></app-header>
  <app-main></app-main>
</template>

<style lang="scss">
@use './assets/scss/style.scss';
</style>
