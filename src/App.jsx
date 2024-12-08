import React from 'react'
import Navbar from './components/Navbar'
import Hero from './pages/Hero'
import Places from './pages/Places'
import Memories from './pages/Memories'
import Explore from './pages/Explore'
import Advanture from './pages/Advanture'
import Tickets from './pages/Tickets'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Places />
      <Memories />
      <Explore />
      <Advanture />
      <Tickets />
      <Footer />
    </>
  )
}

export default App