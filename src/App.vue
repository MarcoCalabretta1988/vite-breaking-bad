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
      per: 10,
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
          store.next = res.data.hasNextPage
          store.prev = res.data.hasPrevPage

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
          store.type = res.data.sort();
        }).catch(error => {
          console.log(error);
          store.type = [];
        }).then(() => {
          store.isLoading = false;
        });

    },
    typeChoise(type) {
      if (type !== this.typeSelected)
        this.page = 1;
      this.typeSelected = type;
      const searcUrlAdd = !type ? this.actualApiUri : `${this.actualApiUri}&eq[type1]=${type}`;
      this.fetchPokemons(searcUrlAdd);
    },
    ToDisplay(number) {
      this.per = number;
      this.page = 1;
      if (number === 10)
        store.isDisplayChange = false
      else
        store.isDisplayChange = true

      this.typeChoise(this.typeSelected)
    },
    fetchPage(direction) {
      if (!store[direction]) return

      if (direction === 'next')
        this.page++
      else
        this.page--

      this.typeChoise(this.typeSelected)

    },
    onThermChange(term) {
      if (!term)
        store.isDisplayChange = false
      else
        store.isDisplayChange = true
      console.log(this.typeSelected)
      let searcUrlAdd = ''
      if (!this.typeSelected) {
        searcUrlAdd = !term ? this.actualApiUri : `${this.actualApiUri}&q[name]=${term.toLowerCase()}`;
      }
      else {
        searcUrlAdd = !term ? this.actualApiUri : `${this.actualApiUri}&eq[type1]=${this.typeSelected.toLowerCase()}&q[name]=${term}`;
      }
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
  <app-main @choise-change="typeChoise" @to-display="ToDisplay" @change-page="fetchPage"
    @change-term="onThermChange"></app-main>
</template>

<style lang="scss">
@use './assets/scss/style.scss';
</style>
