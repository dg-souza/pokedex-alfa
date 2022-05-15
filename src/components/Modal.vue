<template>
  <div>
    <transition name="slide" appear>
      <div class="modal">
        <h1>{{ name }} <span>#{{pokemon.id}}</span></h1>
        <img :src="pokemon.image" />
        <p>Base Stats</p>
        <List :itens="pokemon.stats" :experience="pokemon.experience" />
        <button>Close</button>
      </div>
    </transition>
  </div>
</template>

<script>
import List from "./List.vue";
import formatter from '../utils/formatName'

export default {
  name: "Modal",
  components: { List },
  props: {
    pokemon: { type: Object },
  },
  computed: {
    name () {
      return formatter.formatName(this.pokemon.name)
    }
  }
};
</script>

<style lang="scss">
.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;

  width: 100%;
  max-width: 400px;
  background-color: #C53837;
  border-radius: 16px;
  display: flex;
  align-items: center;
  flex-direction: column;

  padding: 25px;
  box-shadow: 0px 21px 15px -27px rgba(0, 0, 0, 0.75);
  color: #fff;

  @media (max-width: 570px) {
    max-width: 250px;
  }

  h1 {
    font-size: 32px;
    font-weight: 900;
    margin-bottom: 15px;
    text-align: center;

    span {
      font-weight: normal;
    }
  }

  h2 {
    font-weight: normal;
  }

  button {
    font-size: 20px;
    border: none;
    padding: 10px 10px;
    cursor: pointer;
    background-color: #364250;
    color: #fff;
  }

  p {
    font-size: 20px;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s;
}

.slide-enter,
.slide-leave-to {
  transform: translateY(-50%) translateX(100vw);
}
</style>