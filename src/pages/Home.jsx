import React from 'react'
// import { Link } from 'react-router-dom'
import './Home.css'
import AllProducts from './Products/AllProducts';
import Catogary from './Products/Catogary/Catogary';
import Footer from './Footer/Footer';
import Carousel from '../Components/Carousel/Carousel';
import Card1 from '../Components/cards/Card1';
import Card2 from '../Components/cards/Card2';
// import Card3 from '../Components/cards/Card3';
// import ScrollingText from '../Components/cards/ScrollingText';
import Navbar from './Navbar';







function Home() {
  return (
  <>
  <Navbar/>
    <div class=" home">
    <Card1/><br />
      
      {/* <Card3/> */}
      <Catogary/><br />
      {/* <ScrollingText/><br /> */}
      
      <Carousel/><br />
      <AllProducts/><br />
      <Card2/><br />
      <Footer/>

    </div>
  </>
  )
}

export default Home