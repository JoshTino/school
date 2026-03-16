import { useState } from 'react'
import Navbar from "/components/Navbar"
import Hero from "/components/Hero"
import Stats from "/components/Stats"
// import About from "/components/About"
import Academics from "/components/Academics"
import Facilities from "/components/Facilities"
import Gallery from "/components/Gallery"
import Gallery2 from "/components/Gallery2"
import Testimonials from "/components/Testimonials"
import CTA from "/components/CTA"
import Contact from "/components/Contact"
import Footer from "/components/Footer"

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      {/*<About />*/}
      <Academics />
      <Stats />
      <Facilities />
      <Gallery />
      <Gallery2 />
      <Testimonials />
      <CTA />
      <Contact />
      <Footer />
    </>
  );
}
