import "../../styles/Hero.css"

const Hero = () => {
  return (
    <main className="hero-container">
        <p className="hero-head">GOOD MUSIC • SUPERB ENTERTAINMENT • MEMORABLE EXPERIENCES</p>
        <div className="hero-text">
            <h1 className="hero-white">
            EVERY MOMENT 
            <br/> 
            EVERY VIBE 
            <br/>
            <span>AWESOME SOUND</span>
            </h1>
            <p>Whatever the occasion, DJ Awesome brings the music, energy and atmosphere to make it special.</p>
        </div>
        <div className="hero-btns">
            <button className="btn">LISTEN TO MIXES</button>
            <button className="btn">BOOK AN EVENT</button>
        </div>
    </main>
  )
}

export default Hero