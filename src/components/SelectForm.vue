<script>

export default {
    name: 'Select Form',
    data() {
        return {
            selectChoise: ''
        }
    },

    props: {
        optionsList: Array
    },
    emits: ['choise-change'],

}
</script>

<template>
    <select class="form-select" v-model=selectChoise @change="$emit('choise-change', selectChoise)">
        <option value="" selected>Tutti</option>
        <option v-for="option in optionsList" :value="option">{{ option }}</option>

    </select>
</template>

<style scoped lang="scss">

</style>