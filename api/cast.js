import request from "./request";

export const fetchCredits = (id) =>
  request
    .get(`/movie/${id}/credits`)
    .then((res) => res.data)
    .catch((err) => {
      console.log(err);
    });

export const fetchCreditsTv = (id) =>
  request
    .get(`/tv/${id}/credits`)
    .then((res) => res.data)
    .catch((err) => {
      console.log(err);
    });
