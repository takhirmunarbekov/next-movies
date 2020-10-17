import request from './request'

export default async function searchMulti(query) {
  return request
    .get('/search/movie', {
      params: {
        query,
      },
    })
    .then(res => res.data)
    .catch(err => console.log(err))
}
