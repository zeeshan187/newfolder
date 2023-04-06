import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home'
import Invest from './components/Invest'
import PrepFood from './components/PrepFood'
import Dashboard from './components/Dashboard';
import './components/style.css'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route exact path='/' element={<Home />}/>
      <Route exact path='/invest' element={<Invest />}/>
      <Route exact path='/prepfood' element={<PrepFood />}/>
      <Route exact path='/dashboard' element={<Dashboard />}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App