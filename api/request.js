import axios from 'axios'

const API_KEY = process.env.NEXT_PUBLIC_API

const request = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {},
  params: {
    api_key: API_KEY,
    // language: 'ru-RU',
  },
})

export default request
