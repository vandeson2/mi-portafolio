import React from "react"
import { Hero } from "./components/Hero"
import { NavBar } from "./components/NavBar"
import { About } from "./components/About"
import { Skills } from "./components/Skills"
import { Contact } from "./components/Contact"


function App() {

  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Contact />
      </main>
    </div>
  )
}

export default App
