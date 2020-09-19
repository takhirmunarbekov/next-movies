import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Banner from "../../components/Banner";
import { fetchMovie, fetchMovieVideos, fetchSimilar } from "../../api/movies";
import Tabs from "../../components/Tabs";
import About from "../../components/About";
import Slider from "../../components/Slider";
import { fetchCredits } from "../../api/cast";
import Videos from "../../components/Videos";

const tabs = ["О фильме", "Трейлеры", "Галерея"];

const Movie = () => {
  const [movie, setMovie] = useState(null);
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const { id: movieID } = useParams();

  useEffect(() => {
    const getMovieData = async () => {
      const movie = await fetchMovie(movieID);
      const cast = await fetchCredits(movieID);
      const similar = await fetchSimilar(movieID);
      const videos = await fetchMovieVideos(movieID);

      setMovie({
        data: movie || null,
        cast: cast ? cast.cast : [],
        similar: similar ? similar.results : [],
        videos: videos ? videos.results : [],
      });
    };

    getMovieData();
  }, [movieID]);

  if (!movie) return null;

  return (
    <div className="movie">
      <Banner data={movie.data} />
      <Tabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />
      <div className="movie__content">
        {activeTab === "О фильме" && (
          <>
            <About data={movie.data} />
            <Slider
              title="Актерский состав"
              items={movie.cast}
              titleKey="name"
              imgKey="profile_path"
            />
          </>
        )}
        {activeTab === "Трейлеры" && (
          <>
            <Videos />
          </>
        )}
      </div>
      <Slider items={movie.similar} title="Похожие фильмы" />
    </div>
  );
};

export async function getServerSideProps(context) {
  const movie = await fetchMovie(movieID);
  const cast = await fetchCredits(movieID);
  const similar = await fetchSimilar(movieID);
  const videos = await fetchMovieVideos(movieID);

  setMovie({
    data: movie || null,
    cast: cast ? cast.cast : [],
    similar: similar ? similar.results : [],
    videos: videos ? videos.results : [],
  });

  return {
    props: {},
  };
}

export default Movie;
