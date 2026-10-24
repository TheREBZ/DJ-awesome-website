import Nav from "./components/Nav"
import Hero from "./components/Hero"
import About from "./components/About"
import Services from "./components/Services"
import Events from "./components/Events"
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
    </>
  )
}

export default App