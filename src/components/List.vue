<template>
  <ul class="lista">
    <li v-for="item in itens" :key="item.stat.name">
      <strong>{{ item.stat.name === 'hp' ? formatName(item.stat.name, 2) : formatName(item.stat.name, 1)}} </strong> <span>{{ item.base_stat }}</span>
    </li>
  </ul>
</template>

<script>
import formatter from '../utils/formatName'

export default {
  name: "List",
  props: {
    itens: { type: Array, require: true }
  },
  methods: {
    formatName(name, e) {
      return formatter.formatName(name, e)
    }
  }
};
</script>

<style lang='scss'>
.lista {
  display: grid;
  grid-template-columns: repeat(3, 77px);
  justify-content: space-between;
  list-style: none;
  margin: 8px;
  padding: 0;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 66px);
    font-size: 14px;
  }
  @media (max-width: 1440px) {
    grid-template-columns: repeat(3, 56px);
    font-size: 14px;
  }
  @media (max-width: 425px) {
    grid-template-columns: repeat(1, 100%);
  }

  strong {
    text-align: center;
  }

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 7px;
    font-size: 14px;

    @media (max-width: 425px) {
      margin-bottom: 5px;
    }
  }
}
</style>