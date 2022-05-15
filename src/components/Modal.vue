<template>
  <transition name="modal">
    <div class="modal">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <slot name="header"
              ><h3>{{ pokemon.name }}</h3>
            </slot>
          </div>

          <div class="modal-container-body">
            <img :src='pokemon.image' />
            <List :itens='pokemon.stats' :experience='pokemon.experience' />
            <button @click="$emit('close')">OK</button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import List from './List.vue'

export default {
  name: "Modal",
  components: { List },
  props: {
    pokemon: { type: Object },
  },
};
</script>

<style lang="scss">
.modal {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
  vertical-align: middle;

  &-wrapper {
    display: table-cell;
    vertical-align: middle;
  }

  &-container {
    width: 400px;
    height: 200px;
    margin: 0px auto;
    padding: 40px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
    font-family: Helvetica, Arial, sans-serif;

    h3 {
      margin-top: 0;
      text-align: center;
    }

    &-body {
      margin: 20px 0;
      display: flex;
      flex-direction: column;
      align-items: center;

      button {
        margin-bottom: 20px;
      }
    }
  }
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>