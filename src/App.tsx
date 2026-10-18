import Nav from "./components/Nav"
import Hero from "./components/Hero"
import About from "./components/About"
import Services from "./components/Services"
import "../styles/Globals.css"


const App = () => {
  return (
    <>
    <main className="head-container">
      <Nav />
      <Hero />  
      <About />
    </main>
    <Services />
    </>
  )
}

export default App