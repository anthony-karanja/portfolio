import React from 'react'
import NavBar from '../components/layout/NavBar'
import Footer from '../components/layout/Footer'
import '../components/styles/AboutMe.css'

function AboutMe() {
  return (
    <>
        <NavBar />
        {/* <img src="/aboutme-image.png" alt="" /> */}
        <div id='aboutme'>
            <img src="/Aboutme.png" alt="" className='aboutImage' />
            <div className='aboutmeText'>
                <h2>I am Monicah</h2>  
             <h5>
             A Software developer with experience in design, development, and deployment of software solutions with
            Proven capability to build interactive, user- centric, reliable applications and their practical implications to a company. Among the skills I have successfully acquired include;knowledge in building systems in ReactJS, JavaScript,HTML5, CSS3 bootstrap and python . 
            My focus is to secure a position where my skills and expertise will be utilized in contributing to the growth of the organization.. With a strong commitment to continuous
             learning and improvement, I aim to stay updated with the latest trends and best practices in web development. 
             I thrive on problem-solving, creative design, and bringing innovative ideas to life through code. 
             My ultimate goal is to contribute to meaningful projects that enhance user engagement and make a positive impact in the digital world. 
                </h5>
            </div>
        </div>
        <Footer />
    </>
  )
}

export default AboutMe