import "../../styles/Nav.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRecordVinyl } from "@fortawesome/free-solid-svg-icons"; 

const Nav = () => {
  return (
    <nav className='nav-container'>
        <div className='nav-header-container'>
            <h1 className='nav-header'>DJ Awesome</h1>
            <FontAwesomeIcon icon={faRecordVinyl} className="nav-icon" />
        </div>
        <div className='nav-links'>
            <h2 className="nav">About</h2>
            <h2 className="nav">Services</h2>
            <h2 className="nav">Events</h2>
            <h2 className="nav">Song Mixes</h2>
            <h2 className="nav">Gallery</h2>
            <h2 className="nav">Bookings and Contact</h2>
        </div>
    </nav>
  )
}

export default Nav