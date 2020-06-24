import React from 'react';
import Background from '../assets/img/intro-mobile.png';

const Jumbotron = () => {
    return(
    <div id="hero-area" className="hero-area-bg">
        <div className="container">      
          <div className="row">
            <div className="col-lg-7 col-md-12 col-sm-12 col-xs-12">
              <div className="contents">
                <h2 className="head-title">App, Business and SaaS<br />Landing Page Template</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem repellendus quasi fuga nesciunt dolorum nulla magnam veniam sapiente, fugiat! fuga nesciunt dolorum nulla magnam veniam sapiente, fugiat!</p>
                <div className="header-button">
                  <a href="#" className="btn btn-common">Download Now</a>
                  <a href="#" className="btn btn-border video-popup">Learn More</a>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-12 col-sm-12 col-xs-12">
              <div className="intro-img">
                <img className="img-fluid" src={Background} alt="" />
              </div>            
            </div>
          </div> 
        </div> 
      </div>
    );
}

export default Jumbotron;