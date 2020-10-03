import request from './request'

export const fetchTv = id =>
  request
    .get(`/tv/${id}`)
    .then(res => res.data)
    .catch(err => {
      console.log(err)
    })

export const fetchSimilar = id =>
  request
    .get(`/tv/${id}/similar`)
    .then(res => res.data)
    .catch(err => {
      console.log(err)
    })

export const fetchTvVideos = id =>
  request
    .get(`/tv/${id}/videos`)
    .then(res => res.data)
    .catch(err => {
      console.log(err)
    })

export const fetchPopularTvs = () =>
  request
    .get('/tv/popular')
    .then(res => res.data)
    .catch(err => {
      console.log(err)
    })

export const fetchAiringToday = () =>
  request
    .get('/tv/airing_today')
    .then(res => res.data)
    .catch(err => {
      console.log(err)
    })

export const fetchOnAir = () =>
  request
    .get('/tv/on_the_air')
    .then(res => res.data)
    .catch(err => {
      console.log(err)
    })

export const fetchRatedTvs = () =>
  request
    .get('/tv/top_rated')
    .then(res => res.data)
    .catch(err => {
      console.log(err)
    })
