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
        <div class="card-content py-3" :class="type.toLowerCase()">
            <figure>
                <img :src="img" :alt="name">
            </figure>
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
        text-shadow: 1px 1px white;
        border: 1px solid black;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;

        figure {
            width: 150px;
            height: 150px;
            background-color: white;
            border: 1px solid black;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;


            img {
                width: 100px;
                height: 100px;

            }
        }
    }

    .grass {
        background-color: rgb(65, 187, 65);
    }

    .fire {
        background-color: rgb(187, 65, 65);
    }

    .water {
        background-color: rgb(65, 77, 187);
    }

    .bug {
        background-color: rgb(102, 201, 143);
    }

    .normal {
        background-color: rgb(218, 214, 214);
    }

    .dark {
        background-color: rgb(5, 5, 5);
    }

    .poison {
        background-color: rgb(134, 37, 129);
    }

    .ground {
        background-color: rgb(175, 123, 11);
    }

    .ice {
        background-color: rgb(144, 183, 214);
    }

    .fairy {
        background-color: rgb(230, 205, 230);
    }

    .electric {
        background-color: rgb(196, 199, 36);
    }

    .steel {
        background-color: rgb(122, 122, 122);
    }

    .fighting {
        background-color: rgb(68, 45, 2);
    }

    .rock {
        background-color: rgb(70, 64, 45);
    }

    .psychic {
        background-color: rgb(37, 5, 35);
    }

    .ghost {
        background-color: rgb(122, 41, 41);
    }

    .dragon {
        background-color: rgb(57, 117, 247);
    }



}
</style>