import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Courses from './components/Courses/Courses'
import Instructor from './components/Instructor/Instructor'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

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
