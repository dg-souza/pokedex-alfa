<template>
  <div @click="show = !show" class='card'>
    <img :src="pokemon.image" />
    <div class="card-info">
      <h1>{{ name }}</h1>
      <h2>#{{ pokemon.id }}</h2>
    </div>
    <Modal v-if="show" :pokemon="pokemon" />
  </div>
</template>

<script>
import List from "./List.vue";
import Modal from "./Modal.vue";
import formatter from "../utils/formatName";

export default {
  name: "Card",
  data() {
    return {
      show: false,
      pointerEvent: ''
    };
  },
  props: {
    pokemon: { type: Object, require: true },
  },
  components: { List, Modal },
  computed: {
    name() {
      return formatter.formatName(this.pokemon.name);
    }
  }
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

  &-info {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;

    h1,
    h2 {
      font-size: 1rem;
      margin: 10px 10px;
      font-weight: normal;
    }
  }
}
</style>