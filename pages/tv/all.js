import React from 'react'
import Banner from '../../components/Banner'
import Slider from '../../components/Slider'
import { fetchPopularTvs, fetchAiringToday, fetchOnAir, fetchRatedTvs } from '../../api/tv'

const Page = ({ popular, rated, airingToday, onAir, randomData }) => (
  <div>
    <Banner data={randomData} />
    <Slider title="Популярные сериалы" items={popular} titleKey="name" link="/tv" />
    <Slider title="Лучшие сериалы" items={rated} titleKey="name" link="/tv" />
    <Slider title="Новые сериалы" items={onAir} titleKey="name" link="/tv" />
    <Slider title="Новые эпизоды" items={airingToday} titleKey="name" link="/tv" />
  </div>
)

export async function getServerSideProps() {
  const { results: popular } = await fetchPopularTvs()
  const { results: rated } = await fetchRatedTvs()
  const { results: airingToday } = await fetchAiringToday()
  const { results: onAir } = await fetchOnAir()

  const randomData = popular[Math.floor(Math.random() * popular.length)]

  return {
    props: {
      popular,
      rated,
      airingToday,
      onAir,
      randomData,
    },
  }
}

export default Page
