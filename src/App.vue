<template>
  <div id="app" class="container">
    <main>
      <div class="search">
        <input
          class="search-input"
          type="search"
          placeholder="Search"
          v-model="search"
        />
        <span class="search-focus"></span>
      </div>
    </main>
  </div>
</template>

<script>
import Api from './services/api'

export default {
  name: "App",
  data() {
    return {
      search: '',
      pokemons: []
    }
  },
  components: {
    
  },
  async created() {
    const { data : { results } } = await Api.getAll()
    
    for(const result of results ) {
      const { data } = await Api.getPokemon(result.name)
      const obj = {
        id: data.id,
        name: data.name,
        image: data.sprites.front_default,
        types: data.types,
        experience: data.base_experience,
        stats: [data.stats[0], data.stats[1], data.stats[2]]
      }
      this.pokemons.push(obj)
    }
  }
};
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  background-color: #ededed;
}

.container {
  padding: 10px;
  display: flex;
  justify-content: center;

  main {
    width: 100%;

    .search {
      display: flex;
      flex-direction: column;
      padding: 7px;

      &-input {
        height: 35px;
        font-size: 15px;
        border: none;
        outline: none;
        background-color: transparent;
        color: rgb(124, 123, 123);
      }

      &-focus {
        width: 100%;
        height: 2px;
        background-color: #ccc;
        transition: 0.4s;
      }

      &:focus &-focus {
        background-color: red;
        transition: 0.4s;
      }
    }
  }
}
</style>
