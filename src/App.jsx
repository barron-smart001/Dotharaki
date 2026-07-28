
// import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import StillCards from './Components/StillCards'
import Courses from './Components/Courses';
import Login from './Components/Login';
import Register from './Components/Register'

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/StillCards"  element={<Courses />}> </Route> <Route/>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Courses" element={<Courses />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/Register" element={<Register />}></Route>

        </Routes>
      </Router>
    </div>
  )
}

export default App