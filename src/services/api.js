import axios from 'axios'

const api = axios.create({
    baseURL: process.env.VUE_APP_POKE_API
})

export default {
    getAll: () => {
        return api.get('pokemon?limit=151')
    },
    getPokemon: (name = '') => {
        return api.get(`pokemon/${name}`)
    }
}