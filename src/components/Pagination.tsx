import { useState } from 'react'

const Pagination = (props: any) => {
  const pageLinks = []
  const [activeNumber, setActiveNumber] = useState(props.currentPage)

  for (let i = 1; i <= props.pages; i++) {
    let active = props.currentPage === i ? 'active' : ''
    pageLinks.push(
      <p
        key={i}
        className={`${active}_page`}
        onClick={() => {
          props.setPage(i)
          setActiveNumber(i)
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
          })
        }}
        style={{
          padding: '5px 8px',
          border: '1px solid black',
          borderRadius: '50%',
          marginRight: '1em',
          marginTop: '1em',
          cursor: 'pointer',
        }}
      >
        {i}
      </p>,
    )
    if (i === 14) {
      break
    }
  }
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        height: 'auto',
        flexWrap: 'wrap',
        marginTop: '3em',
      }}
    >
      {activeNumber > 1 ? (
        <p
          style={{
            marginRight: '1em',
            marginTop: '1.3em',
            cursor: 'pointer',
            fontWeight: '600',
          }}
          onClick={() => {
            props.setPage(activeNumber - 1)
            setActiveNumber(activeNumber - 1)
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: 'smooth',
            })
          }}
        >
          Prev
        </p>
      ) : (
        ''
      )}
      {pageLinks}
      {activeNumber < props.pages && activeNumber < 14 ? (
        <p
          style={{
            marginRight: '1em',
            marginTop: '1.3em',
            cursor: 'pointer',
            fontWeight: '600',
          }}
          onClick={() => {
            props.setPage(activeNumber + 1)
            setActiveNumber(activeNumber + 1)
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: 'smooth',
            })
          }}
        >
          Next
        </p>
      ) : (
        ''
      )}
    </div>
  )
}

export default Pagination
