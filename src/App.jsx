import React from 'react'
import Navbar from './components/navbar/navbar'
import { Route, Routes } from 'react-router-dom'
import Place_order from './pages/Place_order/Place_order'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'

const App = () => {
  return (
    
      <div className='app'>
        <div>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/order" element={<Place_order />} />
        </Routes>
        </div>
      </div>
    
  )
}

export default App
