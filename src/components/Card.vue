<template>
    <div class='card'>
        <img :src='pokemon.image'>
        <div class='card-info'>
            <h1>{{ pokemon.name }}</h1>
            <h2>#{{ pokemon.id }}</h2>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Card',
    props: {
        pokemon: { type: Object, require: true}
    }
}
</script>

<style lang='scss'>
.card {
    background-color: #fff;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 7px;
    height: 140px;
    padding-top: 30px;

    box-shadow: 0px 21px 15px -27px rgba(0,0,0,0.75);

    &-info {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: space-between;
    }
}
</style>