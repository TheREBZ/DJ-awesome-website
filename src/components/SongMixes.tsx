import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompactDisc } from '@fortawesome/free-solid-svg-icons';
import "../../styles/SongMixes.css"

const SongMixes = () => {
  return (
    <section className="song-mixes-section" id="song-mixes">
        <div className="song-mixes-container">
            <h1>Song Mixes</h1>
            <h3>LATEST MIX <span>ON THE GO...</span></h3>
            <p>Check out my latest mix. <br/>(AWESOME HIT 2026)</p>
            <div className="audio-container">
                <FontAwesomeIcon icon={faCompactDisc} className='audio-icon'/>
                <audio controls preload="none">
                    <source src="Audios/asake-worldwide.mp3" type="audio/mpeg"/>
                    Your browser does not support audio playback.
                </audio>
            </div>
            <div className='mix-links'>
                <a href='https://example.com' target='_blank' rel='nonreferrer'>
                    LISTEN TO MORE MIXES ON AUDIOMACK
                </a>
            </div>
        </div>
    </section>
  )
}

export default SongMixes