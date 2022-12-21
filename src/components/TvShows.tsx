import useFetch from '../fetchData'
import photo from '../assets/Photo.png'
import { useSelector, useDispatch } from 'react-redux'
import {
  setLastView,
  setTvShowPageNumber,
  setSearch,
  setPosition,
} from '../actions'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Pagination from './Pagination'

const TvShows = (props: any) => {
  const navigate = useNavigate()
  const dispetch = useDispatch()
  const search = useSelector<any>((state) => state.search)
  const tvShowId = useSelector<any>((state) => state.last_view)
  const [currentPage, setCurrentPage] = useState(
    useSelector((state: any) => state.tv_show_page_number),
  )
  const { data, totalResults } = useFetch(search, 'tv', currentPage)

  const setState = (id: number) => {
    dispetch(setLastView('LAST_VIEW', id))
    setTimeout(() => {
      navigate(`tv_show/${id}`)
    }, 0)
  }
  const setPage = (num: number) => {
    dispetch(setTvShowPageNumber('TV_SHOW_CURRENT_PAGE', num))
    setCurrentPage(num)
  }
  useEffect(() => {
    dispetch(setSearch('SEARCH', props.input))
    dispetch(setPosition('POSITION', props.scrollPosition))
  }, [props.input, props.scrollPosition])
  return (
    <div>
      <div className="movies_tvShows">
        {data?.map((tvShow) => (
          <div
            key={tvShow.id}
            className="movie_tvShow_link"
            onClick={() => {
              setState(tvShow.id)
            }}
          >
            <div
              className="movie_tvShow"
              style={{
                opacity: tvShow.id === tvShowId ? '0.5' : '100',
              }}
            >
              <img
                src={
                  tvShow.backdrop_path
                    ? `https://themoviedb.org/t/p/original/${tvShow.backdrop_path}`
                    : photo
                }
                alt={tvShow.name}
              />
              <p>{tvShow.name?.toUpperCase()}</p>
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

export default TvShows
