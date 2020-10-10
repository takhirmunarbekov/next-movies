import React, { useState } from 'react'
import Banner from '../../components/Banner'
import { fetchMovie, fetchMovieImages, fetchMovieVideos, fetchSimilar } from '../../api/movies'
import Tabs from '../../components/Tabs'
import About from '../../components/About'
import Slider from '../../components/Slider'
import { fetchCredits } from '../../api/cast'
import Videos from '../../components/Videos'
import Gallery from '../../components/Gallery'

const tabs = ['О фильме', 'Трейлеры', 'Галерея']

const Movie = ({ movie }) => {
  const [activeTab, setActiveTab] = useState(tabs[0])

  if (!movie) return null

  console.log(movie.videos)

  return (
    <div className="movie">
      <Banner data={movie.data} />
      <Tabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />
      <div className="movie__content">
        {activeTab === 'О фильме' && (
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
        {activeTab === 'Трейлеры' && (
          <>
            <Videos videos={movie.videos} />
          </>
        )}
        {activeTab === 'Галерея' && (
          <>
            <Gallery images={movie.images} />
          </>
        )}
      </div>
      <Slider items={movie.similar} title="Похожие фильмы" />
    </div>
  )
}

export async function getServerSideProps(context) {
  const movie = await fetchMovie(context.params.id)
  const cast = await fetchCredits(context.params.id)
  const similar = await fetchSimilar(context.params.id)
  const videos = await fetchMovieVideos(context.params.id)
  const images = await fetchMovieImages(context.params.id)

  return {
    props: {
      movie: {
        data: movie || null,
        cast: cast ? cast.cast : [],
        similar: similar ? similar.results : [],
        videos: videos ? videos.results : [],
        images,
      },
    },
  }
}

export default Movie
