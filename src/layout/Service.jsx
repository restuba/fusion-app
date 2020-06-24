import React from 'react';
import ServiceItem from '../layout/Service/ServiceItem';

const Services = () => {
    return(
        <div id="services" className="section-padding">
        <div className="container">
        <div className="section-header text-center">
            <h2 className="section-title wow fadeInDown" data-wow-delay="0.3s">Our Services</h2>
            <div className="shape wow fadeInDown" data-wow-delay="0.3s"></div>
        </div>
        <div className="row">
            <ServiceItem />
            <div className="col-md-6 col-lg-4 col-xs-12">
            <div className="services-item wow fadeInRight" data-wow-delay="0.3s">
                <div className="icon">
                <i className="lni-cog"></i>
                </div>
                <div className="services-content">
                <h3><a href="#">Easy To Used</a></h3>
                <p>Ut maximus enim dolor. Aenean auctor risus eget tincidunt lobortis. Donec tincidunt bibendum gravida. </p>
                </div>
            </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xs-12">
            <div className="services-item wow fadeInRight" data-wow-delay="0.6s">
                <div className="icon">
                <i className="lni-stats-up"></i>
                </div>
                <div className="services-content">
                <h3><a href="#">Awesome Design</a></h3>
                <p>Ut maximus enim dolor. Aenean auctor risus eget tincidunt lobortis. Donec tincidunt bibendum gravida. </p>
                </div>
            </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xs-12">
            <div className="services-item wow fadeInRight" data-wow-delay="0.9s">
                <div className="icon">
                <i className="lni-users"></i>
                </div>
                <div className="services-content">
                <h3><a href="#">Easy To Customize</a></h3>
                <p>Ut maximus enim dolor. Aenean auctor risus eget tincidunt lobortis. Donec tincidunt bibendum gravida. </p>
                </div>
            </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xs-12">
            <div className="services-item wow fadeInRight" data-wow-delay="1.2s">
                <div className="icon">
                <i className="lni-layers"></i>
                </div>
                <div className="services-content">
                <h3><a href="#">UI/UX Design</a></h3>
                <p>Ut maximus enim dolor. Aenean auctor risus eget tincidunt lobortis. Donec tincidunt bibendum gravida. </p>
                </div>
            </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xs-12">
            <div className="services-item wow fadeInRight" data-wow-delay="1.5s">
                <div className="icon">
                <i className="lni-mobile"></i>
                </div>
                <div className="services-content">
                <h3><a href="#">App Development</a></h3>
                <p>Ut maximus enim dolor. Aenean auctor risus eget tincidunt lobortis. Donec tincidunt bibendum gravida. </p>
                </div>
            </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xs-12">
            <div className="services-item wow fadeInRight" data-wow-delay="1.8s">
                <div className="icon">
                <i className="lni-rocket"></i>
                </div>
                <div className="services-content">
                <h3><a href="#">User Friendly interface</a></h3>
                <p>Ut maximus enim dolor. Aenean auctor risus eget tincidunt lobortis. Donec tincidunt bibendum gravida. </p>
                </div>
            </div>
            </div>
        </div>
        </div>
        </div>

    );
}


export default Services;