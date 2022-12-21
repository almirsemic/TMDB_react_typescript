import { useNavigate } from 'react-router-dom'

const Loader = () => {
  const navigate = useNavigate()
  return (
    <div className="loaded-wrapper">
      <div className="lds-hourglass"></div>
      Wrong URL
      <button
        style={{
          marginLeft: '20px',
          padding: '10px 5px',
          borderRadius: '10px',
          color: 'white',
          fontWeight: 'bold',
          background: 'rgb(220,20,60)',
          border: 'none',
          cursor: 'pointer',
        }}
        onClick={() => navigate('/')}
      >
        Go to home
      </button>
    </div>
  )
}

export default Loader
