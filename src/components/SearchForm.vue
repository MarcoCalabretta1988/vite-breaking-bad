<script>
export default {
    name: 'Search Form',
    data() {
        return {
            searchTerm: ''
        }
    },
    props: {
        placeholder: String,
        submitButtonLabel: String
    },
    emits: ['term-change'],
}
</script>

<template>
    <form>
        <input type="text" v-model.trim="searchTerm" class="form-control" :placeholder="placeholder || 'Cerca'"
            @keyup="$emit('term-change', searchTerm)">
    </form>
</template>