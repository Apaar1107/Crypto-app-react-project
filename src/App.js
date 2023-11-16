import React from 'react'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Home from './Components/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Coins from './Components/Coins';
import CoinDetails from './Components/CoinDetails';
import Exchanges from './Components/Exchanges';

const App = () => {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/coins' element={<Coins/>}/>
        <Route path='/coin/:id' element={<CoinDetails/>}/>
        <Route path='/exchanges' element={<Exchanges/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App