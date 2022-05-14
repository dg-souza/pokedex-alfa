import axios from 'axios'

const api = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/'
})

export default {
    getAll: () => {
        return api.get('pokemon?limit=151')
    },
    getPokemon: (name = '') => {
        return api.get(`pokemon/${name}`)
    }
}