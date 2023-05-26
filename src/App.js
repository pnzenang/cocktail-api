import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { About, Home, SingleCocktail, Error } from './pages'
import { Navbar } from './components'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/cocktail/:id' element={<SingleCocktail />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </Router>
  )
}

export default App
