import { reactive } from "vue";

export const store = reactive({
    pokemons: [],
    isLoading: null,
    type: [],
    prev: null,
    next: null,
});