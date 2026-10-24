import "../../styles/About.css"

const About = () => {
  return (
    <section className="about-container" id="about">
      <div className="about-head-image">
        <h1 className="intro">GET TO KNOW DJ AWESOME</h1>
        <img src="/awesome2.jpeg"/>
      </div>
      <div className="about-content">
        <h2 className="about-statement">
          MORE THAN MUSIC <br/>
          <span>IT'S AN EXPERIENCE</span>
          </h2>
          <p>
            DJ Awesome brings music, energy and atmosphere together to make every occasion special. From weddings and birthdays to social gatherings, lounges, clubs and other events, the goal is simple, deliver the right sound for the right moment.
            <br/>
            <br/>
            With a versatile approach to music and an eye for the crowd, DJ Awesome helps create an atmosphere where people can connect, celebrate and enjoy the moment.
          </p>
          <h3>MUSIC FOR EVERY OCCASION. <br/> THE RIGHT VIBE, EVERY TIME.</h3>
          <button className="btn">
            LET'S MAKE YOUR EVENT AWESOME
          </button>
      </div>
    </section>
  )
}

export default About