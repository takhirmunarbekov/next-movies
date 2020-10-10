import React from 'react'
import { useRouter } from 'next/router'

const Search = ({ isActive }) => {
  const router = useRouter()

  const goSearch = e => {
    router.push({
      pathname: '/search',
      query: {
        q: e.target.value,
      },
    })
  }

  return (
    <div className={`search ${isActive ? 'search__active' : ''}`}>
      <div className="search__form">
        <input
          type="text"
          value=""
          onChange={e => goSearch(e)}
          placeholder="Поиск по фильмам...."
        />
      </div>
    </div>
  )
}

export default Search
