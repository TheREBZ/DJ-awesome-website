import "../../styles/Nav.css"

const Nav = () => {
  return (
    <nav className='nav-container'>
        <h1 className='nav-header'>DJ Awesome</h1>
        <div className='nav-links'>
            <h2 className="nav">About</h2>
            <h2 className="nav">Services</h2>
            <h2 className="nav">Events</h2>
            <h2 className="nav">Song Mixes</h2>
            <h2 className="nav">Gallery</h2>
            <h2 className="nav">Book and Contact</h2>
        </div>
    </nav>
  )
}

export default Nav