import React, { useState } from 'react'
import Banner from '../../components/Banner'
import Tabs from '../../components/Tabs'
import About from '../../components/About'
import Slider from '../../components/Slider'
import { fetchTv, fetchSimilar, fetchTvVideos } from '../../api/tv'
import { fetchCreditsTv } from '../../api/cast'

const tabs = ['О фильме', 'Трейлеры', 'Галерея']

const Tv = ({ tv }) => {
  const [activeTab, setActiveTab] = useState(tabs[0])

  return (
    <div className="tv">
      <Banner data={tv.data} />
      <Tabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />
      <div className="tv__content">
        {activeTab === 'О фильме' && (
          <>
            <About data={tv.data} />
            <Slider
              title="Актерский состав"
              items={tv.cast}
              titleKey="name"
              imgKey="profile_path"
            />
          </>
        )}
      </div>
      <Slider items={tv.similar} title="Похожие сериалы" link="tv" />
    </div>
  )
}

export async function getServerSideProps(context) {
  const tv = await fetchTv(context.params.id)
  const cast = await fetchCreditsTv(context.params.id)
  const similar = await fetchSimilar(context.params.id)
  const videos = await fetchTvVideos(context.params.id)

  return {
    props: {
      tv: {
        data: tv || null,
        cast: cast ? cast.cast : [],
        similar: similar ? similar.results : [],
        videos: videos ? videos.results : [],
      },
    },
  }
}

export default Tv
