export const setSearch = (type: string, str: string) => {
  return {
    type: type,
    value: str,
  }
}
export const setPosition = (type: string, num: number) => {
  return {
    type: type,
    value: num,
  }
}

export const setLastView = (type: string, num: number) => {
  return {
    type: type,
    value: num,
  }
}
export const setAvailable = (type: string) => {
  return {
    type: type,
  }
}
export const setMoviePageNumber = (type: string, pageNumber: number) => {
  return {
    type: type,
    pageNumber: pageNumber,
  }
}
export const setTvShowPageNumber = (type: string, pageNumber: number) => {
  return {
    type: type,
    pageNumber: pageNumber,
  }
}
