import React from 'react'
import Sidebar from './components/sidebar/Sidebar';
import About from './components/about/About';
import Portfolio from './components/portfolio/Portfolio';
import Home from './components/home/Home';
import Resume from './components/resume/Resume';
import Services from './components/services/Services';
import Testimonials from './components/testimonials/Testimonials';
import Pricing from './components/pricing/Pricing';
import Blog from './components/blog/Blog';
import Contact from './components/contact/Contact';
const App = () => {
  return (
    <div>
      <Sidebar/>
      <main className='main' >
      <Home/>
      <About/>
      <Services/>
      <Resume/>
      <Portfolio/>
      {/* <Pricing/> */}
      {/* <Testimonials/> */}
      {/* <Blog/> */}
      <Contact/>
      </main>
    </div>
  )
}

export default App
