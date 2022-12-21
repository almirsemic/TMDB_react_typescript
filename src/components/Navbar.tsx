import image from '../assets/Logo.png'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <div
      style={{
        backgroundColor: '#242f3f',
        height: '60px',
        justifyContent: 'start',
        alignItems: 'center',
        display: 'flex',
      }}
    >
      {' '}
      <img
        onClick={() => navigate('/')}
        src={image}
        alt="logo"
        style={{ marginLeft: '9em', cursor: 'pointer' }}
        className="logo"
      />
    </div>
  )
}

export default Navbar
