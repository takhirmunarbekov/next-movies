import axios from "axios";

const api_key = process.env.NEXT_PUBLIC_API;

const request = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {},
  params: {
    api_key: api_key,
    language: "ru-RU",
  },
});

export default request;
