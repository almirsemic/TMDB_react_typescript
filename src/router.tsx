import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import NotFound from './components/NotFound'
import MoviesDetails from './components/MovieDetails'
import TvShowDetails from './components/TvShowDetails'

const Router = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movie/:id" element={<MoviesDetails />} />
        <Route path="tv_show/:id" element={<TvShowDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
  )
}

export default Router
