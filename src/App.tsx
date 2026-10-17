import Nav from "./components/Nav"
import Hero from "./components/Hero"
import About from "./components/About"

import "../styles/Globals.css"


const App = () => {
  return (
    <>
    <main className="head-container">
      <Nav />
      <Hero />  
      <About />
    </main>
    </>
  )
}

export default App