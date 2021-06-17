import React from 'react'
import './App.css';
import Header from './components/header/Header';
import Navbar from './components/navigation/Navbar'
import Products from './components/products/Products';
import Feedback from './components/feedback/Feedback'
import Subscribe from './components/subscribe/Subscribe';
import Social from './components/social/Social';
import Footer from './components/footer/Footer';


function App() {
  return (
    <div className="container">
    <Navbar/>
    <div className='inner__container'>
    <Header/>
    <Products/>
    <Feedback/>
    <Subscribe/>
    <Social/>
    <Footer/>
    </div>
    </div>
  );
}

export default App;
