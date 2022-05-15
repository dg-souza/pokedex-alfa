<template>
  <ul class="lista">
    <li v-for="item in itens" :key="item.stat.name">
      {{ item.stat.name }} <span>{{ item.base_stat }}</span>
    </li>
    {{ experience }}
  </ul>
</template>

<script>
export default {
  name: "List",
  props: {
    itens: { type: Array, require: true },
    experience: { type: String }
  },
};
</script>

<style lang='scss'>
.lista {
  display: grid;
  grid-template-columns: repeat(3, 77px);
  justify-content: space-between;
  list-style: none;
  margin: 16px;
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

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 7px;
    border-radius: 5px;
    font-size: 15px;

    @media (max-width: 425px) {
      margin-bottom: 5px;
    }

    &:nth-child(1) {
      background-color: rgb(134, 238, 160);
    }
    &:nth-child(2) {
      background-color: crimson;
    }
    &:nth-child(3) {
      background-color: #ccc;
    }
    &:nth-child(4) {
        background-color: rgb(102, 102, 102);
    }
  }
}
</style>