import React, { useState } from 'react'
import Modal from './Modal'

const Videos = ({ videos = [] }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [currentItem, setCurrentItem] = useState(0)

  const openModal = key => {
    console.log(key)
    setCurrentItem(key)
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <div className="videos">
      {videos.map((video, key) => (
        <div key={video.id} className="videos__item" onClick={() => openModal(key)}>
          <img src={`https://img.youtube.com/vi/${video.key}/mqdefault.jpg`} alt="" />
          <span>
            <img src="/play.svg" alt="" />
          </span>
        </div>
      ))}
      <Modal
        isOpen={isOpen}
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
        close={closeModal}
        items={videos}
        type="video"
      />
    </div>
  )
}

export default Videos
