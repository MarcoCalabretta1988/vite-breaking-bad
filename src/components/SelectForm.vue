<script>

export default {
    name: 'Select Form',
    data() {
        return {
            selectChoise: ''
        }
    },

    props: {
        optionsList: Array,
        defaultText: String
    },
    emits: ['choise-change'],

}
</script>

<template>
    <select class="form-select my-3" v-model=selectChoise @change="$emit('choise-change', selectChoise)">
        <option value="" selected>{{ defaultText }}</option>
        <option v-for="option in optionsList" :key="options" :value="option">{{ option }}</option>

    </select>
</template>

<style scoped lang="scss">

</style>