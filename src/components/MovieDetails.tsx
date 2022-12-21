import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import photo from '../assets/Photo.png'
import { setAvailable } from '../actions'

const MoviesDetails = () => {
  const [loadingPage, setLoadingPage] = useState(true)
  const navigate = useNavigate()
  const movieId = useParams()
  const dispetch = useDispatch()
  const [videos, setVideo] = useState<string>('')
  const [movie, setMovie] = useState<any>()
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId.id}/videos?api_key=${process.env.REACT_APP_TMDB_API_KEY}`,
      )
      .then((data: any) => {
        if (data.data.results[0]) {
          setVideo(data.data.results[0].key)
        }
        axios
          .get(
            `https://api.themoviedb.org/3/movie/${movieId.id}?api_key=${process.env.REACT_APP_TMDB_API_KEY}`,
          )
          .then((data) => {
            setMovie(data.data)
            setLoadingPage(false)
          })
      })
      .catch((error) => {
        navigate('*')
        console.warn(error)
      })
    dispetch(setAvailable('MOVIE'))
  }, [movieId])
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
              title={`movie${movieId}`}
              src={`https://www.youtube.com/embed/${videos}`}
            ></iframe>
          )}
          {movie && !videos && (
            <img
              className="iframe"
              src={
                movie.backdrop_path
                  ? `https://themoviedb.org/t/p/original/${movie.backdrop_path}`
                  : photo
              }
              alt={`tvShow_${movie.title}`}
            />
          )}
        </div>
        {movie && <p className="title">{movie.title}</p>}
        {movie && (
          <p className="overview">
            {movie.overview
              ? movie.overview
              : 'There is no overview for this movie.'}
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

export default MoviesDetails
