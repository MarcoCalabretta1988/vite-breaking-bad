<script>
export default {

}
</script>

<template>
    <div class="loader text-center">
        <img src="../assets/img/logo.png" alt="Logo">
        <h1>Loading...</h1>
    </div>
</template>

<style scoped lang="scss">
.loader {
    position: fixed;
    top: 50px;
    left: 50%;
    right: 0;
    bottom: 50px;
    transform: translate(-50%, 0);
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 20px;
}
</style>