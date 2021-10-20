import React from 'react';


const ThankYou = () => {

    return (
        <section className="wpo-contact-form-map section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="row">
                            <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="contact-form">
                                    <h2>Message sent!</h2>
                                </div>
                            </div>
                            <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="contact-map">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.5024850672476!2d27.923017580006253!3d-26.14775996811342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e95a009df61f759%3A0xcc656d30a3c0ae11!2sFundi%20Head%20Office!5e0!3m2!1sen!2sza!4v1631194112224!5m2!1sen!2sza"></iframe>                                </div>
                            </div>
                        </div>
                        <div className="wpo-contact-info">
                            <div className="row">
                                <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                                    <div className="info-item">
                                        <h2>Hendrik Potgieter Rd and 14th Ave, Weltevreden Park, Johannesburg</h2>
                                        <div className="info-wrap">
                                            <div className="info-icon">
                                                <i className="ti-world"></i>
                                            </div>
                                            <div className="info-text">
                                                <span>Office Address</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                                    <div className="info-item">
                                        <h2>support@fundi.co.za</h2>
                                        <div className="info-wrap">
                                            <div className="info-icon-2">
                                                <i className="fi flaticon-envelope"></i>
                                            </div>
                                            <div className="info-text">
                                                <span>Official Mail</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                                    <div className="info-item">
                                        <h2>Call Centre: 0860 55 55 44</h2>
                                        <h2>Reception: 011 670 6100</h2>
                                        <div className="info-wrap">
                                            <div className="info-icon-3">
                                                <i className="ti-headphone-alt"></i>
                                            </div>
                                            <div className="info-text">
                                                <span>Official Phone</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ThankYou;
