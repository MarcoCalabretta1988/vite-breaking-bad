<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

export default {

  components: { AppHeader, AppMain },

}

</script>

<template>
  <app-header></app-header>
  <app-main></app-main>
</template>

<style lang="scss">
@use './assets/scss/style.scss';
</style>
