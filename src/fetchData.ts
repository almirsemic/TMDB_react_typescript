import { useState, useEffect } from 'react'
import { MovieResponseData, SingleMovieData } from './types'

const useFetch = (search: any, endPoint: string, numberPage?: number) => {
  const [data, setData] = useState<SingleMovieData[] | null>(null)
  const currentPage = numberPage ? numberPage : 1
  const [totalResults, setTotalResults] = useState(0)
  const from = currentPage % 2 === 0 ? 10 : 0
  const to = currentPage % 2 === 0 ? 20 : 10
  useEffect(() => {
    try {
      fetch(
        search.length > 2
          ? `https://api.themoviedb.org/3/search/${endPoint}?api_key=${
              process.env.REACT_APP_TMDB_API_KEY
            }&query=${search}&page=${Math.round(currentPage / 2)}`
          : `https://api.themoviedb.org/3/${endPoint}/top_rated?api_key=${process.env.REACT_APP_TMDB_API_KEY}`,
      )
        .then((data: Response) => {
          return data.json()
        })
        .then((data: MovieResponseData) => {
          if (search.length > 2) {
            setTotalResults(data.total_results)
          }
          setData(data.results.slice(from, to))
        })
    } catch (err) {
      console.warn(err)
    }
  }, [search, endPoint, currentPage])
  return { data, totalResults }
}

export default useFetch
