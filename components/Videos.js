import React from 'react'

const YOUTUBE_LINK = 'https://www.youtube.com/embed/'

const Videos = ({ videos = [] }) => (
  <div className="videos">
    {videos.map(video => (
      <div className="videos__item">
        <img src={`https://img.youtube.com/vi/${video.key}/mqdefault.jpg`} alt="" />
        <span>
          <img src="/play.svg" alt="" />
        </span>
      </div>
    ))}
  </div>
)

export default Videos
