import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import photo from '../assets/Photo.png'
import { setAvailable } from '../actions'

const TvShowDetails = () => {
  const navigate = useNavigate()
  const tvShowId = useParams()
  const dispetch = useDispatch()
  const [loadingPage, setLoadingPage] = useState(true)
  const [videos, setVideo] = useState('')
  const [tvShow, setTvShow] = useState<any>()
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/tv/${tvShowId.id}/videos?api_key=${process.env.REACT_APP_TMDB_API_KEY}`,
      )
      .then((data: any) => {
        if (data.data.results[0]) {
          setVideo(data.data.results[0].key)
        }
        axios
          .get(
            `https://api.themoviedb.org/3/tv/${tvShowId.id}?api_key=${process.env.REACT_APP_TMDB_API_KEY}`,
          )
          .then((data) => {
            setTvShow(data.data)
            setLoadingPage(false)
          })
      })
      .catch((error) => {
        navigate('*')
        console.warn(error)
      })
    dispetch(setAvailable('TV_SHOW'))
  }, [tvShowId])
  return (
    <div className="container">
      <h3
        onClick={() => navigate('/')}
        style={{
          cursor: 'pointer',
          fontWeight: 700,
          color: 'rgb(128, 125, 125)',
          fontFamily: 'cursive',
          marginBottom: '1em',
        }}
      >
        {'<'}Back
      </h3>
      <div>
        <div className="wrapper_iframe">
          {videos && (
            <iframe
              className="iframe"
              title={`tvShow${tvShowId}`}
              src={`https://www.youtube.com/embed/${videos}`}
            ></iframe>
          )}
          {tvShow && !videos && (
            <img
              className="iframe"
              src={
                tvShow.backdrop_path
                  ? `https://themoviedb.org/t/p/original/${tvShow.backdrop_path}`
                  : photo
              }
              alt={`tvShow_${tvShow.name}`}
            />
          )}
        </div>
        {tvShow && <p className="title">{tvShow.name}</p>}
        {tvShow && (
          <p className="overview">
            {tvShow.overview
              ? tvShow.overview
              : 'There is no overview for this tv show.'}
          </p>
        )}
      </div>
      {loadingPage && (
        <div className="loaded-wrapper">
          <div className="lds-ripple">
            <div></div>
            <div></div>
          </div>
        </div>
      )}
    </div>
  )
}

export default TvShowDetails
