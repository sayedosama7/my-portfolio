import React from 'react'
import NavBar from '../NavBar'
import Header from './Header'
import About from './About';
import Skills from './Skills';
import Portfolio from './Portfolio';
import ScrollToTop from 'react-scroll-to-top';
import Contact from './Contact';
import Footer from './Footer';
import MyLogo from './MyLogo';
import Notifacation from './Notifacation';


const HomePage = () => {
  return (
    <div id='home'>
      <NavBar />
      <Notifacation />
      <Header />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      <MyLogo />
      <Footer />
      <ScrollToTop smooth color='#7241dc' className='scroll-to-top' />
    </div>
  )
}

export default HomePage