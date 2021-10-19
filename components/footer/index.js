import React from 'react'
import Link from 'next/link'
import Newsletter from '../Newsletter'

const Footer = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <footer className="wpo-site-footer">
            <Newsletter />
            <div className="wpo-upper-footer">
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget about-widget">
                                <div className="logo widget-title">
                                    <img src='images/fundifoundation-logo-white.png' alt="" />
                                </div>
                                <p>Auditors Nexia SAB&T</p>
                                <p>PBO Number: 930/047/343
                                    <br />
                                    Organization Name: FundiFoundation Trust | Registration No: IT001931/2019(G) |
                                </p>
                                <ul>
                                    <li><Link onClick={ClickHandler} href="https://web.facebook.com/FundiS0uthAfrica"><a><i className="ti-facebook"></i></a></Link></li>
                                    <li><Link onClick={ClickHandler} href="https://twitter.com/Official_FUNDI"><a><i className="ti-twitter-alt"></i></a></Link></li>
                                    <li><Link onClick={ClickHandler} href="https://www.instagram.com/fundi_southafrica/"><a><i className="ti-instagram"></i></a></Link></li>
                                    <li><Link onClick={ClickHandler} href="https://www.linkedin.com/company/fundi-sa/"><a><i className="ti-linkedin"></i></a></Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget link-widget resource-widget">
                                <div className="widget-title">
                                    <h3>Top News</h3>
                                </div>
                                <div className="news-wrap">
                                    <div className="news-img">
                                        <img src='images/footer/img-1-sakhile.jpg' alt="" />
                                    </div>
                                    <div className="news-text">
                                        <h3><Link onClick={ClickHandler} href="/SakhileBlogPost"><a>Struggling Sakhile’s academic dreams come true:</a></Link></h3>
                                        <span>12 Jan, 2021</span>
                                    </div>
                                </div>
                                <div className="news-wrap">
                                    <div className="news-img">
                                        <img src='images/footer/img-1-gs-2.jpg' alt="" />
                                    </div>
                                    <div className="news-text">
                                        <h3><Link onClick={ClickHandler} href="/GoldenStepsBlogPost"><a>Golden Steps School</a></Link></h3>
                                        <span>1 Jun, 2021</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col col-lg-2 col-md-6 col-sm-12 col-12">
                            <div className="widget link-widget">
                                <div className="widget-title">
                                    <h3>Useful Links</h3>
                                </div>
                                <ul>
                                    <li><Link onClick={ClickHandler} href="/AboutPage"><a>About Us</a></Link></li>
                                    <li><Link onClick={ClickHandler} href="/CasePage"><a>Our Causes</a></Link></li>
                                    <li><Link onClick={ClickHandler} href="/CasePage"><a>Our Mission</a></Link></li>
                                    <li><Link onClick={ClickHandler} href="/ContactPage"><a>Contact Us</a></Link></li>
                                    <li><Link onClick={ClickHandler} href="/EventPage"><a>Our Event</a></Link></li>
                                    <li><Link onClick={ClickHandler} href="/PrivacyPage"><a>Privacy Policy</a></Link></li>

                                    <li>
                                        <a title="Download Registration Form" href="https://fundi-foundation-dev-chi.vercel.app/Fundi_Foundation_Trust_REGISTRATION.pdf" download>
                                            18A Certificate and Registration
                                        </a>
                                    </li>
                                   
                                </ul>
                            </div>
                        </div>
                        <div className="col col-lg-3 offset-lg-1 col-md-6 col-sm-12 col-12">
                            <div className="widget market-widget wpo-service-link-widget">
                                <div className="widget-title">
                                    <h3>Contact </h3>
                                </div>
                                <div className="contact-ft">
                                    <ul>
                                        <li><i className="fi flaticon-call"></i>Contact: 011 670 6188</li>
                                        <li><i className="fi flaticon-envelope"></i>fund@fundi.co.za</li>
                                        <li><Link onClick={ClickHandler} href="https://www.google.com/maps/place/Hendrik+Potgieter+Rd+%26+14th+Ave,+Constantia+Kloof,+Roodepoort,+1709/@-26.1514514,27.9222428,17z/data=!3m1!4b1!4m5!3m4!1s0x1e95a009dbec6d7d:0x3e31d62e156578d6!8m2!3d-26.1514514!4d27.9244315"><a><i className="fi flaticon-pin"></i></a></Link>Hendrik Potgieter Rd and 14th Ave, Weltevreden Park, 1751</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wpo-lower-footer">
                <div className="container">
                    <div className="row">
                        <div className="col col-xs-12">
                            <p className="copyright">&copy; FundiCapital(Pty) Ltd 2020 | All rights reserved</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;