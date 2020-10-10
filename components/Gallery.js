import React, { useState } from 'react'
import Modal from './Modal'

const POSTER_PATH = process.env.NEXT_PUBLIC_IMG
const BACK_PATH = process.env.NEXT_PUBLIC_POSTER_IMG

const Gallery = ({ images = [] }) => {
  console.log(images)

  return (
    <div className="gallery">
      <Posters images={images.posters} />
    </div>
  )
}

const Posters = ({ images = [] }) => {
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
      {images.map((image, key) => (
        <div key={image.id} className="videos__item" onClick={() => openModal(key)}>
          <img src={POSTER_PATH + image.file_path} alt="" />
        </div>
      ))}
      <Modal
        isOpen={isOpen}
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
        close={closeModal}
        items={images}
        type="image"
      />
    </div>
  )
}

export default Gallery
