import React, { useState } from 'react'
import { useRouter } from 'next/router'

const Search = ({ isActive }) => {
  const router = useRouter()
  const [searchText, setSearchText] = useState(router.query.q || '')
  const [timer, setTimer] = useState(null)

  const handleChange = e => {
    setSearchText(e.target.value)
    clearTimeout(timer)
    setTimer(
      setTimeout(() => {
        router.push({
          pathname: '/search',
          query: {
            q: searchText,
          },
        })
      }, 2000)
    )
  }

  return (
    <div className={`search ${isActive ? 'search__active' : ''}`}>
      <div className="search__form">
        <input
          type="text"
          value={searchText}
          onChange={e => handleChange(e)}
          placeholder="Поиск по фильмам...."
        />
      </div>
    </div>
  )
}

export default Search
