import "../../styles/Nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRecordVinyl } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  let navClass = "nav-container";

  if (scrolled) {
    navClass = "nav-container scrolled";
  }

  return (
    <nav className={navClass} >
      <div className="nav-header-container">
        <a className="nav-header" href="#home">
          DJ AWESOME
        </a>
        <FontAwesomeIcon icon={faRecordVinyl} className="nav-icon" />
      </div>

      <div className="nav-links">
        <a className="nav" href="#about">ABOUT</a>
        <a className="nav" href="#services">SERVICES</a>
        <a className="nav" href="#Events">EVENTS</a>
        <a className="nav" href="#song-mixes">SONG MIXES</a>
        <a className="nav" href="#gallery">GALLERY</a>
        <a className="nav" href="#book">BOOKINGS AND CONTACTS</a>
      </div>
    </nav>
  );
}

export default Nav;