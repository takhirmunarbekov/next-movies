import React from 'react'
import searchMulti from '../api/search'

const SearchPage = ({ data = [] }) => <div className="search-page">deadea</div>

export async function getServerSideProps(context) {
  const { results } = await searchMulti(context.query.q)

  console.log(results)

  return {
    props: {
      data: results || [],
    },
  }
}

export default SearchPage
