import Nav from "./components/Nav"
import Hero from "./components/Hero"
import About from "./components/About"
import Services from "./components/Services"
import Events from "./components/Events"
import SongMixes from "./components/SongMixes"
import Gallery from "./components/Gallery"
import "../styles/Globals.css"


const App = () => {
  return (
    <>
    <main className="head-container" id="home">
      <Nav />
      <Hero />  
      <About />
    </main>
    <Services />
    <Events />
    <SongMixes />
    <Gallery />
    </>
  )
}

export default App