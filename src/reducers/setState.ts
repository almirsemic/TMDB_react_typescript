export const stateSearch = (
  state = '',
  action: { type: string; value: any },
) => {
  switch (action.type) {
    case 'SEARCH':
      return action.value
    default:
      return state
  }
}
export const statePosition = (
  state = 0,
  action: { type: string; value: any },
) => {
  switch (action.type) {
    case 'POSITION':
      return action.value
    default:
      return state
  }
}
export const stateLastView = (
  state = 0,
  action: { type: string; value: any },
) => {
  switch (action.type) {
    case 'LAST_VIEW':
      return action.value
    default:
      return state
  }
}
export const stateAvailable = (state = true, action: { type: string }) => {
  switch (action.type) {
    case 'MOVIE':
      return false
    case 'TV_SHOW':
      return true
    default:
      return state
  }
}
export const stateMoviePageNumber = (
  state = 1,
  action: { type: string; pageNumber: number },
) => {
  if (action.type === 'MOVIE_CURRENT_PAGE') {
    return action.pageNumber
  } else {
    return state
  }
}
export const stateTvShowPageNumber = (
  state = 1,
  action: { type: string; pageNumber: number },
) => {
  if (action.type === 'TV_SHOW_CURRENT_PAGE') {
    return action.pageNumber
  } else {
    return state
  }
}
