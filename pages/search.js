import React from 'react'
import searchMulti from '../api/search'

const SearchPage = ({ data = [] }) => {
  console.log(data)
  return (
    <div className="search-page">
      {data.length > 0 ? (
        <div className="search-page__inner">
          {data.map(item => (
            <div className="search-page__card">
              <img src={process.env.NEXT_PUBLIC_POSTER_IMG + item.poster_path} alt="" />
              <h2>{item.title}</h2>
            </div>
          ))}
        </div>
      ) : (
        <div className="search-page__inner">
          <h1>По данному запросу нету данных</h1>
        </div>
      )}
    </div>
  )
}

export async function getServerSideProps(context) {
  const res = await searchMulti(context.query.q)

  const data = res ? res.results : []

  return {
    props: {
      data,
    },
  }
}

export default SearchPage
