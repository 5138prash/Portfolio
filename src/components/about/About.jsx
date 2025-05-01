import React from 'react'
import About_img from '../../assets/profile.jpg'
import About_box from './AboutBox'
const About = () => {
  return (
    <section className='about container section' id='about'>
    <h2 className="section_title">About Me</h2>

    <div className='about_container grid'> 
      <img src={About_img} alt="" className='about_img'/>

       <div className='about_data grid' >
        <div className='about_info'>
          <p className='about_description' >I'm a Frontend Developer and MERN Stack Web Developer with a B.Tech from Punjabi University, passionate about building modern and responsive web applications.</p>
          <a href="/Prashant_Tripathi_FSWD.pdf" download className='btn'>Download Resume</a>
        </div>

        <div className='about_skills grid' >
          <div className='skills_data' >
            <div className='skills_titles'>
              <h3 className='skills_name'>Development</h3>
              <span className='skills_number'>90%</span>
            </div>

            <div className='skills_bar' >
              <span className='skills_percentage development'></span>
            </div>
          </div>

          <div className='skills_data' >
            <div className='skills_titles'>
              <h3 className='skills_name'>UI / UX</h3>
              <span className='skills_number'>60%</span>
            </div>

            <div className='skills_bar' >
              <span className='skills_percentage ui_design'></span>
            </div>
          </div>

          <div className='skills_data' >
            <div className='skills_titles'>
              <h3 className='skills_name'>JavaScript</h3>
              <span className='skills_number'>80%</span>
            </div>

            <div className='skills_bar' >
              <span className='skills_percentage photography'></span>
            </div>
          </div>


        </div>
       </div>    
    </div>

    {/* <About_box/> */}
    </section>
  )
}

export default About;