import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Courses from './components/Courses'
import Instructor from './components/Instructor'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Courses/>
      <Instructor/>
      <Testimonials/>
      <Contact />
      <Footer/>
    </>
  );
}

export default App;
