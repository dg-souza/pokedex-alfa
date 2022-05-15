<template>
    <div @click="show = !show" class="card">
      <img :src="pokemon.image" />
      <div class="card-info">
        <h1>{{ pokemon.name }}</h1>
        <h2>#{{ pokemon.id }}</h2>
      </div>
      <Modal v-if='show' :pokemon='pokemon' />
    </div>
</template>

<script>
import List from "./List.vue";
import Modal from "./Modal.vue";

export default {
  name: "Card",
  data() {
    return {
      show: false,
    };
  },
  props: {
    pokemon: { type: Object, require: true },
  },
  components: { List, Modal },
};
</script>

<style lang='scss'>
.container {
    margin: 0;
    padding: 0;
    display: flex;
}

.card {
  background-color: #fff;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 7px;
  height: 140px;
  padding-top: 30px;

  box-shadow: 0px 21px 15px -27px rgba(0, 0, 0, 0.75);

  &.auto {
    height: auto;
    transition: ease-in-out 0.2s;
    border-radius: 0px 0px 26px 28px;
  }

  &-info {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
  }

  img {
    max-width: 100px;
  }

  &-info {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;

    h1,
    h2 {
      font-size: 1rem;
      font-weight: normal;

      margin: 10px 10px;
    }
  }

  &-folder {
    width: 100%;
    padding: 10px 0px 0px 0px;
    background-color: #f8f5f5;
    color: #fff;
    border-radius: 25px;

    h4 {
      text-align: center;
    }
  }

  /* Enter and leave animations can use different */
  /* durations and timing functions.              */
  .slide-fade-enter-active {
    transition: all 0.3s ease;
  }
  .slide-fade-leave-active {
    transition: all 0.1s cubic-bezier(1, 0.5, 0.8, 1);
  }
  .slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateY(-10px);
    opacity: 0;
  }
}
</style>