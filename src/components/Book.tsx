import "../../styles/Book.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTiktok,
  faXTwitter,
  faWhatsapp
} from "@fortawesome/free-brands-svg-icons";


const Book = () => {
  return (
    <section className="book-container" id="book">
      <h1>Bookings And Contact</h1>
        <div className="book-content">
          <h3> LETS MAKE YOUR EVENT <br/>
              <span>UNFORGETABLE</span>
          </h3>
          <p>
            Got an event coming up? <br/> Let's talk about it.<br/>
            Get in touch and let's make your event AWESOME.
          </p>
          <div className="book-btns">
            <a href="https://wa.me/+2347067589851?text=Hi%20DJ%20Awesome%21%20I%27d%20like%20to%20enquire%20about%20booking%20you%20for%20an%20event." target='_blank' rel='noopener noreferrer' className="whatsapp">
              <FontAwesomeIcon icon={faWhatsapp} className="whatsapp-icon" />
              <p>DM ME ON WHATSAPP</p>
            </a>
            <div className='book-links'>
              <p>OR FIND ME ON</p>
              <div className="book-icons">
                <a href='https://example.com ' target='_blank' rel='noopener noreferrer' className="tiktok">
                  <FontAwesomeIcon icon={faTiktok} />
                </a>
                <a href='https://example.com ' target='_blank' rel='noopener noreferrer' className="twitter">
                  <FontAwesomeIcon icon={faXTwitter} />
                </a>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Book