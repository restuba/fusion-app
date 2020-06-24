import React from 'react';
import ImgTeam1 from '../assets/img/team/team-01.png';
import ImgTeam2 from '../assets/img/team/team-02.png';
import ImgTeam3 from '../assets/img/team/team-03.png';
import ImgTeam4 from '../assets/img/team/team-04.png';

const Team = () => {
    return(
    <section id="team" className="section-padding bg-gray">
      <div className="container">
        <div className="section-header text-center">          
          <h2 className="section-title wow fadeInDown" data-wow-delay="0.3s">Meet our team</h2>
          <div className="shape wow fadeInDown" data-wow-delay="0.3s"></div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-12 col-xs-12">
            <div className="team-item wow fadeInRight" data-wow-delay="0.2s">
              <div className="team-img">
                <img className="img-fluid" src={ImgTeam1} alt=""/>
              </div>
              <div className="contetn">
                <div className="info-text">
                  <h3><a href="#">David Smith</a></h3>
                  <p>Front-end Developer</p>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur.</p>
                <ul className="social-icons">
                  <li><a href="#"><i className="lni-facebook-filled" aria-hidden="true"></i></a></li>
                  <li><a href="#"><i className="lni-twitter-filled" aria-hidden="true"></i></a></li>
                  <li><a href="#"><i className="lni-instagram-filled" aria-hidden="true"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-xs-12">
            <div className="team-item wow fadeInRight" data-wow-delay="0.4s">
              <div className="team-img">
                <img className="img-fluid" src={ImgTeam2} alt="" />
              </div>
              <div className="contetn">
                <div className="info-text">
                  <h3><a href="#">ERIC PETERSON</a></h3>
                  <p>Product Designer</p>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur.</p>
                <ul className="social-icons">
                  <li><a href="#"><i className="lni-facebook-filled" aria-hidden="true"></i></a></li>
                  <li><a href="#"><i className="lni-twitter-filled" aria-hidden="true"></i></a></li>
                  <li><a href="#"><i className="lni-instagram-filled" aria-hidden="true"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-xs-12">
            <div className="team-item wow fadeInRight" data-wow-delay="0.6s">
              <div className="team-img">
                <img className="img-fluid" src={ImgTeam3} alt="" />
              </div>
              <div className="contetn">
                <div className="info-text">
                  <h3><a href="#">DURWIN BABB</a></h3>
                  <p>Lead Designer</p>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur.</p>
                <ul className="social-icons">
                  <li><a href="#"><i className="lni-facebook-filled" aria-hidden="true"></i></a></li>
                  <li><a href="#"><i className="lni-twitter-filled" aria-hidden="true"></i></a></li>
                  <li><a href="#"><i className="lni-instagram-filled" aria-hidden="true"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-xs-12">
            <div className="team-item wow fadeInRight" data-wow-delay="0.8s">
              <div className="team-img">
                <img className="img-fluid" src={ImgTeam4} alt="" />
              </div>
              <div className="contetn">
                <div className="info-text">
                  <h3><a href="#">MARIJN OTTE</a></h3>
                  <p>Lead Designer</p>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur.</p>
                <ul className="social-icons">
                  <li><a href="#"><i className="lni-facebook-filled" aria-hidden="true"></i></a></li>
                  <li><a href="#"><i className="lni-twitter-filled" aria-hidden="true"></i></a></li>
                  <li><a href="#"><i className="lni-instagram-filled" aria-hidden="true"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
}

export default Team;