<template>
  <div id="app" class="container">
    <template v-if='!loading'>
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
      <div class="search-list">
        <Card
          v-for="pokemon in filterPokemons"
          :key="pokemon.id"
          :pokemon="pokemon"
        />
      </div>
    </main>
    </template>
    <template v-else>
      <div class='loading'>
      <img src='./assets/loading.gif' alt='Carregando...' />
      <p>Carregando... </p>
      </div>
    </template>
  </div>
</template>

<script>
import Api from "./services/api";
import Card from "./components/Card.vue";

export default {
  name: "App",
  data() {
    return {
      search: "",
      pokemons: [],
      infos: {},
      loading: true
    };
  },
  components: {
    Card
  },
  computed: {
    filterPokemons () {
      return this.pokemons.filter(p => {
        return p.name.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  },
  async created() {
    this.loading = true
    const {
      data: { results },
    } = await Api.getAll();

    for (const result of results) {
      const { data } = await Api.getPokemon(result.name);
      const obj = {
        id: data.id,
        name: data.name,
        image: data.sprites.front_default,
        stats: [data.stats[0], data.stats[1], data.stats[2]]
      };
      this.pokemons.push(obj);
    }
    setTimeout(() => { 
      this.loading = false
      }, 2000)
  },
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

      &-list {
        display: grid;
        width: 100%;
        grid-template-columns: repeat(6, 16.6%);
        @media (max-width: 1024px) {
          grid-template-columns: repeat(4, 25%);
        }

        @media (max-width: 768px) {
          grid-template-columns: repeat(3, 33.33%);
        }

        @media (max-width: 425px) {
          grid-template-columns: repeat(2, 50%);
        }

        @media (max-width: 320px) {
          grid-template-columns: repeat(1, 100%);
        }
      }
    }
  }
}

.loading {
  display: flex;
  flex-direction: column;
  justify-content: center;

  p {
    text-align: center;
    font-size: 20px;
  }
}
</style>
