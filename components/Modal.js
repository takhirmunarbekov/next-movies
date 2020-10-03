import React, { useState } from 'react'

const Modal = ({ items = [], type = 'image', isOpen, currentItem, close }) => {
  const [activeItem, setActiveItem] = useState(currentItem || 0)

  return isOpen ? (
    <div className="modal">
      <div className="modal__bg" onClick={close} />
      <div className="modal__close">
        <img src="/close.svg" alt="" />
      </div>
      <div className="modal__inner">
        <button className="modal__button modal__prev"></button>
        <button className="modal__button modal__next"></button>
      </div>
    </div>
  ) : null
}

export default Modal
