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
  created() {
    axios.get('https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons?per=10&page=1')
      .then(res => {
        store.pokemons = res.data.docs;
      });
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
