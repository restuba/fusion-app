import React from 'react';

const ServiceItem = () => {
    return(
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
    );
}

export default ServiceItem;

