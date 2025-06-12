import React from 'react'
import "./About.css"
import { whyChooseMe } from '../../sources'

const About = () => {
  return (
    <section id='about'>
      <div className="wrapper">
        <div className="section-header">
          <h1 className="heading-1" data-aos='fade-left'>
            <span className="gradient-text">We're</span>
          </h1>
          <h4 className="sub-title muted" data-aos='fade-left'>
  At <strong>Brook Bytes</strong>, we bring together diverse expertise in web development, SEO, and digital marketing to build smart, reliable, and future-ready digital solutions.  
  Our journey is driven by passion and continuous learning, turning innovative ideas into real-world success stories.
</h4>
<h4 className="sub-title muted" data-aos='fade-left'>
  Security and performance are at the core of everything we create. We ensure that every website and campaign we deliver is not only visually engaging but also robust against digital threats.  
  From seamless user experiences to strategic growth plans, we cover all angles.
</h4>
<h4 className="sub-title muted" data-aos='fade-left'>
  What makes us unique is our blend of creativity, technical skill, and dedication to solving problems with fresh, effective approaches.  
  At Brook Bytes, we don’t just build websites — we craft digital experiences designed to help your business grow and stand out.
</h4>
<h4 className="sub-title muted" data-aos='fade-left'>
  Ready to elevate your digital presence with secure, scalable, and innovative solutions? Let’s connect and build the future of technology together.
</h4>

        </div>
        <div className="group">
          {
            whyChooseMe.map((list, index) => (
              <div className='flex-center group-item' data-aos='fade-right' key={index}>
                <div className="flex-center icon-wrapper">
                {list.icon}
                </div>
                <h4 className="title">{list.title}</h4>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default About
