import React from 'react'
import "./Footer.css"
import Logo from '../../Commons/Logo'
import SocialHandles from '../../Commons/SocialHandles'
import { footer } from '../../sources'
import { Link as ScrollLink } from 'react-scroll'
import { Link as RouterLink } from 'react-router-dom'

const Footer = () => {
  return (
    <footer id='footer'>
      <div className="wrapper">
        <div className="column" data-aos='fade-right'>
          <Logo/>
          <SocialHandles/>
        </div>
        {
          footer.map((list, index) => (
            <div className="column" data-aos='fade-left' key={index}>
              <h3 className="muted title">{list.title}</h3>
              {
                list.routes.map((route, index) => (
                  route.url ? (
                    <RouterLink to={route.url} className="route" key={index}>
                      {route.name}
                    </RouterLink>
                  ) : (
                    <ScrollLink to={route.id || ""} smooth={true} className="route" key={index}>
                      {route.name}
                    </ScrollLink>
                  )
                ))
              }
            </div>
          ))
        }
      </div>
      <div className="flex-center copyright" data-aos='flip-up' data-aos-delay='100'>
        <h4>Copyright &copy; All right reserved | 2025</h4>
        <p className="muted">Brook Bytes & Teams</p>
      </div>
    </footer>
  )
}

export default Footer
