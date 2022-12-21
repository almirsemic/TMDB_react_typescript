import useFetch from '../fetchData'
import photo from '../assets/Photo.png'
import { useSelector, useDispatch } from 'react-redux'
import {
  setLastView,
  setMoviePageNumber,
  setSearch,
  setPosition,
} from '../actions'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Pagination from './Pagination'

const Movies = (props: any) => {
  const navigate = useNavigate()
  const dispetch = useDispatch()
  const search = useSelector<any>((state) => state.search)
  const movieId = useSelector<any>((state) => state.last_view)
  const [currentPage, setCurrentPage] = useState(
    useSelector((state: any) => state.movie_page_number),
  )
  const { data, totalResults } = useFetch(search, 'movie', currentPage)

  const setState = (id: number) => {
    dispetch(setLastView('LAST_VIEW', id))
    setTimeout(() => {
      navigate(`movie/${id}`)
    }, 0)
  }
  const setPage = (num: number) => {
    dispetch(setMoviePageNumber('MOVIE_CURRENT_PAGE', num))
    setCurrentPage(num)
  }
  useEffect(() => {
    dispetch(setSearch('SEARCH', props.input))
    dispetch(setPosition('POSITION', props.scrollPosition))
  }, [props.input, props.scrollPosition])
  return (
    <div>
      <div className="movies_tvShows">
        {data?.map((movie: any) => (
          <div
            key={movie.id}
            className="movie_tvShow_link"
            onClick={() => {
              setState(movie.id)
            }}
          >
            <div
              className="movie_tvShow"
              style={{
                opacity: movie.id === movieId ? '0.5' : '100',
              }}
            >
              <img
                src={
                  movie.backdrop_path
                    ? `https://themoviedb.org/t/p/original/${movie.backdrop_path}`
                    : photo
                }
                alt={movie.title}
              />
              <p>{movie.title.toUpperCase()}</p>
            </div>
          </div>
        ))}
      </div>
      {totalResults > 10 ? (
        <Pagination
          setPage={setPage}
          pages={Math.ceil(totalResults / 10)}
          currentPage={currentPage}
        />
      ) : (
        ''
      )}
    </div>
  )
}

export default Movies
