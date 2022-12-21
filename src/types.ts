export type SingleMovieData = {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  name: string
  video?: boolean
  vote_average: number
  vote_count: number
}

export type MovieResponseData = {
  page: number
  results: SingleMovieData[]
  total_results: number
  total_pages: number
}
