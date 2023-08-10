import React from 'react'
import "./Footer.css"
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">0M_K0RE</h1>

        <ul className="footer__list">
          
          <li>
            <a href="#about" className="footer__link">About</a>
          </li>
          
          <li>
            <a href="#portfolio" className="footer__link">Projects</a>
          </li>
          
          <li>
            <a href="#testimonials" className="footer__link">Testimonials</a>
          </li>
        </ul>

        <div className="footer__social">

        <a href="https://www.facebook.com/om.s.kore" className="footer__social-link" target='_blank'>
            <i className="bx bxl-facebook"></i>
        </a>

        <a href="https://www.instagram.com/0m_k0re" className="footer__social-link" target='_blank'>
            <i className="bx bxl-instagram"></i>
        </a>

        <a href="https://linkedin.com/in/omkore" className="footer__social-link" target='_blank'>
        <i className="bx bxl-linkedin"></i>
            
        </a>

        <a href="https://github.com/omkore" className="footer__social-link" target='_blank'>
        <i className="bx bxl-github"></i>
            
        </a>
        </div>
        <span className='footer__copy'>&#169; 0M_K0RE. All rights reserved</span>
      </div>
    </footer>
  )
}

export default Footer