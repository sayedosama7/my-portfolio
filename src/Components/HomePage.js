import React from 'react'
import NavBar from '../NavBar'
import Header from './Header'
import About from './About'
import Skills from './Skills'
import Portfolio from './Portfolio'
import ScrollToTop from 'react-scroll-to-top'
import Contact from './Contact'

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <Header />
      <About />
      <Skills />
      <Portfolio />
      <Contact/>
      <ScrollToTop smooth color='#7241dc' />
    </div>
  )
}

export default HomePage