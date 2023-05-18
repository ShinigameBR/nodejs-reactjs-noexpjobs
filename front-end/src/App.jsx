import React from 'react'
import Navbar from './components/Navbar'
import Search from './components/Search'
import Jobs from './components/Jobs'
import Values from './components/Values'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='w-[95%] sm:w-[85%] m-auto bg-whiteColor'>
      <Navbar />
      <Search />
      <Jobs />
      <Values />
      <Footer />
    </div>
  )
}

export default App