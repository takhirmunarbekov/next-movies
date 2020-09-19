import React, { useState, useEffect } from "react";
import Banner from "../components/Banner";
import { fetchPopularMovies } from "../api/movies";
import { fetchPopularTvs } from "../api/tv";
import Slider from "../components/Slider";

const Main = ({ popularTv, popular }) => {
  const bannerData = [...popular, ...popularTv];
  const randomData = bannerData[Math.floor(Math.random() * bannerData.length)];

  return (
    <div>
      <Banner data={randomData} />
      <Slider title="Популярные фильмы" items={popular} />
      <Slider
        title="Популярные сериалы"
        items={popularTv}
        titleKey="name"
        link="/tv"
      />
    </div>
  );
};

export async function getServerSideProps() {
  const { results: popular } = await fetchPopularTvs();
  const { results: popularTv } = await fetchPopularMovies();

  return {
    props: {
      popular,
      popularTv,
    },
  };
}

export default Main;
