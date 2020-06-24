import React from 'react';
import ImgTestimonial1 from '../assets/img/testimonial/img1.jpg';
import ImgTestimonial2 from '../assets/img/testimonial/img2.jpg';
import ImgTestimonial3 from '../assets/img/testimonial/img3.jpg';
import ImgTestimonial4 from '../assets/img/testimonial/img4.jpg';

const Testimonial = () => {
    return(
        <section id="testimonial" className="testimonial section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div id="testimonials" className="owl-carousel wow fadeInUp" data-wow-delay="1.2s">
                <div className="item">
                  <div className="testimonial-item">
                    <div className="img-thumb">
                      <img src={ImgTestimonial1} alt="" />
                    </div>
                    <div className="info">
                      <h2><a href="#">David Smith</a></h2>
                      <h3><a href="#">Creative Head</a></h3>
                    </div>
                    <div className="content">
                      <p className="description">Praesent cursus nulla non arcu tempor, ut egestas elit tempus. In ac ex fermentum, gravida felis nec, tincidunt ligula.</p>
                      <div className="star-icon mt-3">
                        <span><i className="lni-star-filled"></i></span>
                        <span><i className="lni-star-filled"></i></span>
                        <span><i className="lni-star-filled"></i></span>
                        <span><i className="lni-star-filled"></i></span>
                        <span><i className="lni-star-half"></i></span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimonial-item">
                    <div className="img-thumb">
                      <img src={ImgTestimonial2} alt="" />
                    </div>
                    <div className="info">
                      <h2><a href="#">Domeni GEsson</a></h2>
                      <h3><a href="#">Awesome Technology co.</a></h3>
                    </div>
                    <div className="content">
                      <p className="description">Praesent cursus nulla non arcu tempor, ut egestas elit tempus. In ac ex fermentum, gravida felis nec, tincidunt ligula.</p>
                      <div className="star-icon mt-3">
                        <span><i className="lni-star-filled"></i></span>
                        <span><i className="lni-star-filled"></i></span>
                        <span><i className="lni-star-filled"></i></span>
                        <span><i className="lni-star-half"></i></span>
                        <span><i className="lni-star-half"></i></span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimonial-item">
                    <div className="img-thumb">
                      <img src={ImgTestimonial3} alt="" />
                    </div>
                    <div className="info">
                      <h2><a href="#">Dommini Albert</a></h2>
                      <h3><a href="#">Nesnal Design co.</a></h3>
                    </div>
                    <div className="content">
                      <p className="description">Praesent cursus nulla non arcu tempor, ut egestas elit tempus. In ac ex fermentum, gravida felis nec, tincidunt ligula.</p>
                      <div className="star-icon mt-3">
                        <span><i className="lni-star-filled"></i></span>
                        <span><i className="lni-star-filled"></i></span>
                        <span><i className="lni-star-filled"></i></span>
                        <span><i className="lni-star-filled"></i></span>
                        <span><i className="lni-star-half"></i></span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimonial-item">
                    <div className="img-thumb">
                      <img src={ImgTestimonial4} alt="" />
                    </div>
                    <div className="info">
                      <h2><a href="#">Fernanda Anaya</a></h2>
                      <h3><a href="#">Developer</a></h3>
                    </div>
                    <div className="content">
                      <p className="description">Praesent cursus nulla non arcu tempor, ut egestas elit tempus. In ac ex fermentum, gravida felis nec, tincidunt ligula.</p>
                      <div className="star-icon mt-3">
                        <span><i className="lni-star-filled"></i></span>
                        <span><i className="lni-star-filled"></i></span>
                        <span><i className="lni-star-half"></i></span>
                        <span><i className="lni-star-half"></i></span>
                        <span><i className="lni-star-half"></i></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Testimonial;