import "../../styles/Events.css"

const Events = () => {
  return (
    <section className="events-section" id="Events">
        <div className="events-container">
            <h1>Events and Live <span>Experiences</span></h1>
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
    </section>
  )
}

export default Events