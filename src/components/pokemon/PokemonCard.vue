<script>
export default {
    name: 'Pokemon List',
    props: {
        img: String,
        name: String,
        number: Number,
        color: String,
        type: String,
    }

}

</script>

<template>
    <div class="col pokemon-card p-3 text-center ">
        <div class="card-content text-white py-3" :style="`background-color:${color}`">
            <img :src="img" :alt="name">
            <h5 class="m-2">#{{ number }}</h5>
            <h4>{{ name }}</h4>
            <div class="type">{{ type }}</div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.pokemon-card {

    .card-content {
        border-radius: 20px;
        height: 300px;
        border: 1px solid black;

        img {
            border: 1px solid black;
            border-radius: 50%;
            width: 150px;
            height: 150px;
        }
    }


}
</style>