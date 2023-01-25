<script>
import axios from 'axios';
import { store } from './data/store';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

export default {
  name: 'App pokedex',
  data() {
    return {
      store,
      apiTypeUri: 'https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons/types1',
      apiUri: 'https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons',
      page: 1,
      per: 500,
      typeSelected: ''
    }
  },
  components: { AppHeader, AppMain },
  computed: {
    actualApiUri() {
      const selectedUrl = `${this.apiUri}?per=${this.per}&page=${this.page}`;
      return selectedUrl
    }
  },
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
    },
    fetchPokemonsType(url) {
      store.isLoading = true;

      axios.get(url)
        .then(res => {
          store.type = res.data;
        }).catch(error => {
          console.log(error);
          store.type = [];
        }).then(() => {
          store.isLoading = false;
        });

    },
    typeChoise(type) {
      this.typeSelected = type;
      const searcUrlAdd = !type ? this.actualApiUri : `${this.actualApiUri}&eq[type1]=${type}`;
      console.log(searcUrlAdd);
      this.fetchPokemons(searcUrlAdd);

    }
  },
  created() {
    this.fetchPokemons(this.actualApiUri);
    this.fetchPokemonsType(this.apiTypeUri);
  }

}

</script>

<template>
  <app-header></app-header>
  <app-main @choise-change="typeChoise"></app-main>
</template>

<style lang="scss">
@use './assets/scss/style.scss';
</style>
