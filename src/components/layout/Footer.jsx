import React from 'react'
import '../styles/Footer.css'

function Footer() {
  return (
    <>
        <div id='footer'>
          <h3>Let&apos;s Connect and Talk</h3>
          <div className='footerIcons'>
            {/* <div>
            <h5>Reach me on my socials</h5>
            </div> */}
            <a href="https://www.behance.net/anthonywangongu"target='_blank'><img src="/Behance icon.png" alt="behance" className='footerIcon' /></a>
            <a href="https://dribbble.com/karanja-27" target='_blank'><img src="/Dribble icon.png" alt="dribble" className='footerIcon' /></a>
            <a href="https://github.com/anthony-karanja" target='_blank'><img src="/Github icon.png" alt="github" className='footerIcon' /></a>
            <a href="https://www.linkedin.com/in/anthony-wangongu-55747a308/" target='_blank'><img src="/Linkedin icon.png" alt="linkedin" className='footerIcon' /></a>
          </div>
          
        </div>
    </>
  )
}

export default Footer