import "../../styles/Gallery.css"

const Gallery = () => {
  return (
    <section className="gallery-container" id="gallery">
        <h1>Gallery</h1>
        <div className="gallery-header">
            <h3>CAPTURING MOMENTS <br/>
            <span>ONE EVENT AT A TIME</span></h3>
            <p>A glimpse of some of the memorable experience i bring to every event. <br/> The vibes. The people. The moment. </p>
        </div>
        <div className="gallery-images-container">
            <div className="gallery-image-card">
                <img src="Gallery/gallery-sample1.jpg" alt="Gallery Image 1" className="gallery-image"/>
                <p>Wedding Reception</p>
            </div>
            <div className="gallery-image-card">
                <img src="/Gallery/gallery-sample2.jpeg" alt="Gallery Image 2" className="gallery-image"/>
                <p>Main Wedding Ceremony</p>
            </div>
            <div className="gallery-image-card">
                <img src="/Gallery/gallery-sample3.jpeg" alt="Gallery Image 3" className="gallery-image"/>
                <p>Birthday Event</p>
            </div>
            <div className="gallery-image-card">
                <img src="/Gallery/gallery-sample4.jpeg" alt="Gallery Image 4" className="gallery-image"/>
                <p>Awesome Delivery</p>
            </div>
        </div>
        <div className="gallery-link">
            <a href="https://www.example.com" target="_blank" rel="noreferrer">
                SEE MORE ON INSTAGRAM
            </a>
        </div>
    </section>
  )
}

export default Gallery