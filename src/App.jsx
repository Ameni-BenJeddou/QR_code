import React from 'react'
import './App.css'
import Generate from './Generate'
import Scan from './Scan'
import Home from "./Home"
import Navbar from './Navbar'
import {Route , Routes} from "react-router-dom"


export default function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='container'>
        <Routes> 
          <Route path='/Home' element={<Home />} />
          <Route path='/Generate' element={<Generate />} />
          <Route path='/Scan' element={<Scan />} />
        </Routes>
        </div>
      </div>
  ) 
}

