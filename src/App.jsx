import React from "react"
import { Hero } from "./components/Hero"
import { NavBar } from "./components/NavBar"
import { About } from "./components/About"
import { Skills } from "./components/Skills"


function App() {

  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      <main>
        <Hero />
        <About />
        <Skills />
      </main>
    </div>
  )
}

export default App
