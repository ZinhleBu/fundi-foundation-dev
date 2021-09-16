import React from 'react'
import Link from 'next/link'
import Newsletter from '../Newsletter'

const Footer = (props) =>{

    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }

  return(
    <footer className="wpo-site-footer">
        <Newsletter/>
        <div className="wpo-upper-footer">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                        <div className="widget about-widget">
                            <div className="logo widget-title">
                                <img src='images/logo-2.png' alt=""/>
                            </div>
                            <p>Build and Earn with your online store with lots of cool and exclusive wpo-features </p>
                            <ul>
                                <li><Link onClick={ClickHandler} href="https://web.facebook.com/FundiS0uthAfrica"><a><i className="ti-facebook"></i></a></Link></li>
                                <li><Link onClick={ClickHandler} href="/"><a><i className="ti-twitter-alt"></i></a></Link></li>
                                <li><Link onClick={ClickHandler} href="/"><a><i className="ti-instagram"></i></a></Link></li>
                                <li><Link onClick={ClickHandler} href="/"><a><i className="ti-google"></i></a></Link></li>
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
                                    <img src='images/footer/img-1.jpg' alt=""/>
                                </div>
                                <div className="news-text">
                                    <h3><Link onClick={ClickHandler} href="/BlogPage"><a>Fundi Fund Run</a></Link></h3>
                                    <span>12 Jan, 2021</span>
                                </div>
                            </div>
                            <div className="news-wrap">
                                <div className="news-img">
                                    <img src='images/footer/img-2.jpg' alt=""/>
                                </div>
                                <div className="news-text">
                                    <h3><Link onClick={ClickHandler} href="/BlogPage"><a>Leaders4Learners</a></Link></h3>
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
                            </ul>
                        </div>
                    </div>
                    <div className="col col-lg-3 offset-lg-1 col-md-6 col-sm-12 col-12">
                        <div className="widget market-widget wpo-service-link-widget">
                            <div className="widget-title">
                                <h3>Contact </h3>
                            </div>
                            <p>In support of responsible lending, FUNDI would like to notify you that you have the right to Debt Counselling. For more information, contact the NCR on 0860 627 627 / www.ncr.org.za </p>
                            <div className="contact-ft">
                                <ul>
                                    <li><i className="fi flaticon-pin"></i>Hendrik Potgieter Rd and 14th Ave, Weltevreden Park, 1751</li>
                                    <li><i className="fi flaticon-call"></i>Call Centre: 0860 55 55 44</li>
                                    <li><i className="fi flaticon-call"></i>Reception: 011 670 6100</li>
                                    <li><i className="fi flaticon-envelope"></i>support@fundi.co.za</li>
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
                        <p className="copyright">&copy; ©FundiCapital(Pty) Ltd 2020 | All rights reserved</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
} 

export default Footer;