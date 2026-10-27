import "../../styles/Events.css"

const Events = () => {
  return (
    <section className="events-section" id="Events">
        <div className="events-container">
            <h1>Events and <span>Highlights</span></h1>
            <p>Take a look at some of the events I've anchored
            and the energy I bring to every occasion.</p>
        </div>
        <div className="events-video-grid">
            <div className="events-video-cards">
                <video controls preload="metadata">
                    <source src="Videos/sample-vid1.mp4" type="video/mp4"/>
                    Your browser does not support video playback.
                </video>
            </div>
            <div className="events-video-cards">
                <video controls preload="metadata">
                    <source src="Videos/sample-vid2.mp4" type="video/mp4"/>
                    Your browser does not support video playback.
                </video>
            </div>
        </div>
            <div className="events-gallery-link">
                <h3>Want to see more highlights?</h3>
                <a href="https://www.tiktok.com/@awesomedj_?_r=1&_t=ZS-9Ah6NVH4tlc" target="_blank" rel="noreferrer" >
                    CHECK OUT MY TIKTOK
                </a>
            </div>
    </section>
  )
}

export default Events