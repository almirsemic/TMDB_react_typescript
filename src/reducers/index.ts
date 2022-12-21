import {
  stateSearch,
  statePosition,
  stateLastView,
  stateAvailable,
  stateMoviePageNumber,
  stateTvShowPageNumber,
} from './setState'
import { combineReducers } from 'redux'

const allReducers = combineReducers({
  search: stateSearch,
  position: statePosition,
  last_view: stateLastView,
  available: stateAvailable,
  movie_page_number: stateMoviePageNumber,
  tv_show_page_number: stateTvShowPageNumber,
})

export default allReducers
