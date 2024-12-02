import React from 'react'
import Intro from './intro.jsx'
import Header from '../../components/Header.jsx'
import About from './About.jsx'
import Experience from './Experience.jsx'
import Projects from './Projects.jsx'
import Contact from './Contact.jsx'
import Footer from './Footer.jsx'
import LeftSider from './LeftSider.jsx'


function Home() {
  return (
    <>
    <Header/>
    <div className='bg-primary px-40 sm:px-3'>
    
    <Intro/>
    <About/>
    <Experience/>
    <Projects/>
    <Contact/>
    
    <LeftSider/>
    <Footer/>
    </div>

    
    </>
  )
}

export default Home