import { SetStateAction, useCallback, useEffect, useState } from 'react'
import Movies from './Movies'
import TvShows from './TvShows'
import debounce from 'lodash.debounce'
import { useSelector } from 'react-redux'

const Home = () => {
  const positionFromState = useSelector((state: any) => state.position)
  const [input, setInput] = useState<string>('')
  const searchFromState = useSelector((state: any) => state.search)
  const [scrollPosition, setScrollPosition] = useState(0)
  let [available, setAvailable] = useState(
    useSelector((state: any) => state.available),
  )
  let activeClass = available ? 'inactive' : 'active'
  let inactiveClass = available ? 'active' : 'inactive'

  const searchHeandler = (event: {
    target: { value: SetStateAction<string> }
  }) => {
    setInput(event.target.value)
  }

  const deboundsSearchHeandler = useCallback(debounce(searchHeandler, 1000), [])

  const heandleScroll = () => {
    const position = window.pageYOffset
    setScrollPosition(position)
  }

  useEffect(() => {
    setTimeout(
      () =>
        window.scrollTo({
          top: positionFromState,
          left: 0,
          behavior: 'smooth',
        }),
      500,
    )
    setInput(searchFromState)
    window.addEventListener('scroll', heandleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', heandleScroll)
    }
  }, [])
  return (
    <div className="container">
      <div className="buttons_and_input">
        <button onClick={() => setAvailable(false)} className={activeClass}>
          Movies
        </button>
        <button onClick={() => setAvailable(true)} className={inactiveClass}>
          Tv Shows
        </button>
        <input
          defaultValue={input.length ? input : searchFromState}
          type="text"
          name="search"
          placeholder="Search..."
          onChange={deboundsSearchHeandler}
        />
      </div>
      {available ? (
        <TvShows input={input} scrollPosition={scrollPosition} />
      ) : (
        <Movies input={input} scrollPosition={scrollPosition} />
      )}
      <button
        onClick={() => {
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
          })
        }}
        className="btn_top"
        title="Go to top"
        style={{
          display: scrollPosition > 100 ? 'block' : 'none',
        }}
      >
        <p className="arrow-up"></p>
      </button>
    </div>
  )
}

export default Home
