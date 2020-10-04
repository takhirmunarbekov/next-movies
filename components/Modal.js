import React, { useState } from 'react'

const YOUTUBE_LINK = 'https://www.youtube.com/embed/'

const Modal = ({ items = [], type = 'image', isOpen, currentItem, close }) => {
  const [activeItem, setActiveItem] = useState(currentItem || 0)

  const changeItem = step => {
    if (step + activeItem >= 0 && step + activeItem < items.length) {
      setActiveItem(step + setActiveItem)
    }
  }

  return isOpen ? (
    <div className="modal">
      <div className="modal__bg" onClick={close} />
      <div className="modal__close" onClick={close}>
        <img src="/close.svg" alt="" />
      </div>
      <div className="modal__inner">
        <button className="modal__button modal__prev" onClick={() => changeItem(-1)}>
          <img src="/arrow-left.svg" alt="" />
        </button>
        <div className="modal__content">
          {type === 'image' ? <img src={items[activeItem]} alt="" /> : null}
          {type === 'video' ? (
            <iframe
              title={items[activeItem].key}
              src={`${YOUTUBE_LINK + items[activeItem].key}?rel=0&showinfo=0&autoplay=1`}
              allowFullScreen="allowfullscreen"
              allow="autoplay; encrypted-media"
              frameBorder="0"
            />
          ) : null}
        </div>
        <button className="modal__button modal__next" onClick={() => changeItem(1)}>
          <img src="/arrow-right.svg" alt="" />
        </button>
      </div>
    </div>
  ) : null
}

export default Modal
