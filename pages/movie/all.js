import React from 'react'
import Banner from '../../components/Banner'
import Slider from '../../components/Slider'
import {
  fetchPopularMovies,
  fetchNowMovies,
  fetchRatedMovies,
  fetchUpcomingMovies,
} from '../../api/movies'

const Page = ({ popular, rated, upcoming, now, randomData }) => (
  <div>
    <Banner data={randomData} />
    <Slider title="Популярные фильмы" items={popular} />
    <Slider title="Лучшие фильмы" items={rated} />
    <Slider title="Ожидаемые фильмы" items={upcoming} />
    <Slider title="Сейчас в кинотеатрах" items={now} />
  </div>
)

export async function getServerSideProps() {
  const { results: popular } = await fetchPopularMovies()
  const { results: rated } = await fetchRatedMovies()
  const { results: upcoming } = await fetchUpcomingMovies()
  const { results: now } = await fetchNowMovies()

  const randomData = popular[Math.floor(Math.random() * popular.length)]

  return {
    props: {
      popular,
      rated,
      upcoming,
      now,
      randomData,
    },
  }
}

export default Page
