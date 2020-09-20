import React from 'react'
import Link from 'next/link'

const Slider = ({
  title,
  items,
  showMoreLink = '/',
  titleKey = 'title',
  imgKey = 'poster_path',
  link = '/movie',
}) => (
  <div className="slider">
    <div className="slider__title">
      <h2>{title}</h2>
      <Link href={showMoreLink}>
        <a>Показать больше</a>
      </Link>
    </div>
    <div className="slider__list">
      {items.map(item => (
        <Link href={`${link}/${item.id}`}>
          <a className="slider__item">
            {item[imgKey] ? (
              <img src={process.env.NEXT_PUBLIC_POSTER_IMG + item[imgKey]} alt={item[titleKey]} />
            ) : (
              <img src="/not-found.png" alt="not-found" />
            )}
            <div className="slider__item-title">{item[titleKey]}</div>
          </a>
        </Link>
      ))}
    </div>
  </div>
)

export default Slider
