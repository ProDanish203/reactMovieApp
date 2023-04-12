import React from 'react'
import css from "./Footer.css"

export const Footer = () => {
  return (
    <>
    <footer>
      <div className="container">

        <div className="box">

          <ul className="flex">

            <li>terms of use</li>
            <li>pivacy policy</li>
            <li>blog</li>
            <li>FAQ</li>
            <li>watch list</li>
          </ul>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit placeat, mollitia sed, natus amet ullam aspernatur soluta aut molestias quasi quibusdam 
          </p>
        </div>

        <div className="box">

        <h3>follow us</h3>
        <i className='fab fa-facebook'></i>
        <i className='fab fa-twitter'></i>
        <i className='fab fa-linkedin'></i>
        <i className='fab fa-github'></i>
        
        </div>

        <div className="box">
          <h3>streamit app</h3>
          <div className="img flexSB">
            <img src="https://www.freepnglogos.com/uploads/app-store-logo-png/apple-app-store-appstore-icon-png-image-purepng-transparent-4.png" alt="" />
            <span>App Store</span>
            <img src="https://www.freepnglogos.com/uploads/google-play-png-logo/google-play-arrow-png-logo-8.png" alt="" />
            <span>Google Play Store</span>
          </div>
        </div>


      </div>
    </footer>
    </>
  )
}
