<script>
export default {
    name: 'Pokemon List',
    props: {
        img: String,
        name: String,
        number: Number,
        type: String
    }

}

</script>

<template>
    <div class="col pokemon-card p-3 text-center ">
        <div class="card-content text-white p-3" :style="`background-color:${type}`">
            <img :src="img" :alt="name" class="img-fluid">
            <h4 class="m-3">#{{ number }}</h4>
            <h3>{{ name }}</h3>
            <div class="type">{{ type }}</div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.pokemon-card {

    .card-content {
        border-radius: 20px;

        img {
            border-radius: 50%;
        }

    }
}
</style>