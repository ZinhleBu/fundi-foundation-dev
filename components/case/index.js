
import React, { Component } from 'react'
import Slider from "react-slick";
import Link from 'next/link'
import { InView } from "react-intersection-observer";
import { motion } from "framer-motion";

class CaseSlide extends Component {

    render() {
        var settings = {
            dots: false,
            arrows: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            margin: 10,
            loop: true,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };

        const ClickHandler = () => {
            window.scrollTo(10, 0);
        }
        return (
            <InView threshold={0.45}>
                {({ ref, inView }) => (
                    <div className="wpo-case-area section-padding">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="wpo-section-title">
                                        <motion.span
                                            ref={ref}
                                            initial={{ opacity: 0 }}
                                            animate={inView ? { opacity: 1 } : { opacity: 0 }}
                                            transition={{ duration: 0.8 }}
                                        >FundiFoundation</motion.span>
                                        <motion.h2
                                            ref={ref}
                                            initial={{ opacity: 0 }}
                                            animate={inView ? { opacity: 1 } : { opacity: 0 }}
                                            transition={{ duration: 0.8 }}
                                        >Our Education Fundraising Initiatives</motion.h2>
                                    </div>
                                </div>
                            </div>
                            <motion.div 
                             ref={ref}
                             initial={{ opacity: 0 }}
                             animate={inView ? { opacity: 1 } : { opacity: 0 }}
                             transition={{ duration: 0.8 }}
                            className="wpo-case-wrap">
                                <div className="wpo-case-slider">
                                    <Slider {...settings}>


                                        <div className="wpo-case-single">
                                            <div className="wpo-case-item">
                                                <div className="wpo-case-img">
                                                    <img src='images/case/img-1-leaders.jpg' alt="" />
                                                </div>
                                                <div className="wpo-case-content">
                                                    <div className="wpo-case-text-top">
                                                        <h2>Leaders4Learners</h2>
                                                        <div className="progress-section">
                                                            <div className="process">
                                                                <div className="progress">
                                                                    <div className="progress-bar">
                                                                        <div className="progress-value"><span>65.5</span>%</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* <ul>
                                                            <li><span>Raised:</span> R7,000.00</li>
                                                            <li><span>Goal:</span> R8,000.00</li>
                                                        </ul> */}
                                                    </div>
                                                    <div className="case-btn">
                                                        <ul>
                                                            <li><Link onClick={ClickHandler} href="/CaseSinglePageLeaders">
                                                                <a href="/DonatePage">
                                                                    Learn More
                                                                </a>
                                                            </Link>
                                                            </li>
                                                            <li><Link onClick={ClickHandler} href="/DonatePage"><a>Donate Now</a></Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="wpo-case-single">
                                            <div className="wpo-case-item">
                                                <div className="wpo-case-img">
                                                    <img src='images/case/img-1-unite.jpg' alt="" />
                                                </div>
                                                <div className="wpo-case-content">
                                                    <div className="wpo-case-text-top">
                                                        <h2>Unite4Schools</h2>
                                                        <div className="progress-section">
                                                            <div className="process">
                                                                <div className="progress">
                                                                    <div className="progress-bar">
                                                                        <div className="progress-value"><span>40.5</span>%</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* <ul>
                                                            <li><span>Raised:</span> R7,000.00</li>
                                                            <li><span>Goal:</span> R8,000.00</li>
                                                        </ul> */}
                                                    </div>
                                                    <div className="case-btn">
                                                        <ul>
                                                            <li><Link onClick={ClickHandler} href="/CaseSinglePageRebuild">
                                                                <a href="/DonatePage">
                                                                    Learn More
                                                                </a>
                                                            </Link>
                                                            </li>
                                                            <li><Link onClick={ClickHandler} href="/DonatePage"><a>Donate Now</a></Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="wpo-case-single">
                                            <div className="wpo-case-item">
                                                <div className="wpo-case-img">
                                                    <img src='images/case/img-1-12412.jpg' alt="" />
                                                </div>
                                                <div className="wpo-case-content">
                                                    <div className="wpo-case-text-top">
                                                        <h2>FundiFund 12412</h2>
                                                        <div className="progress-section">
                                                            <div className="process">
                                                                <div className="progress">
                                                                    <div className="progress-bar">
                                                                        <div className="progress-value"><span>80.5</span>%</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* <ul>
                                                            <li><span>Raised:</span> R7,000.00</li>
                                                            <li><span>Goal:</span> R8,000.00</li>
                                                        </ul> */}
                                                    </div>
                                                    <div className="case-btn">
                                                        <ul>
                                                            <li><Link onClick={ClickHandler} href="/CaseSinglePageFund">
                                                                <a href="/DonatePage">
                                                                    Learn More
                                                                </a>
                                                            </Link>
                                                            </li>
                                                            <li><Link onClick={ClickHandler} href="/DonatePage"><a>Donate Now</a></Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="wpo-case-single">
                                            <div className="wpo-case-item">
                                                <div className="wpo-case-img">
                                                    <img src='images/case/img-1-R10.jpg' alt="" />
                                                </div>
                                                <div className="wpo-case-content">
                                                    <div className="wpo-case-text-top">
                                                        <h2>#R10GoesALongWay</h2>
                                                        <div className="progress-section">
                                                            <div className="process">
                                                                <div className="progress">
                                                                    <div className="progress-bar">
                                                                        <div className="progress-value"><span>65.5</span>%</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* <ul>
                                                            <li><span>Raised:</span> R7,000.00</li>
                                                            <li><span>Goal:</span> R8,000.00</li>
                                                        </ul> */}
                                                    </div>
                                                    <div className="case-btn">
                                                        <ul>
                                                            <li><Link onClick={ClickHandler} href="/CaseSinglePageR10">
                                                                <a href="/DonatePage">
                                                                    Learn More
                                                                </a>
                                                            </Link>
                                                            </li>
                                                            <li><Link onClick={ClickHandler} href="/DonatePage"><a>Donate Now</a></Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="wpo-case-single">
                                            <div className="wpo-case-item">
                                                <div className="wpo-case-img">
                                                    <img src='images/case/img-1-csi.jpg' alt="" />
                                                </div>
                                                <div className="wpo-case-content">
                                                    <div className="wpo-case-text-top">
                                                        <h2>Fundi CSI</h2>
                                                        <div className="progress-section">
                                                            <div className="process">
                                                                <div className="progress">
                                                                    <div className="progress-bar">
                                                                        <div className="progress-value"><span>65.5</span>%</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* <ul>
                                                            <li><span>Raised:</span> R7,000.00</li>
                                                            <li><span>Goal:</span> R8,000.00</li>
                                                        </ul> */}
                                                    </div>
                                                    <div className="case-btn">
                                                        <ul>
                                                            <li><Link onClick={ClickHandler} href="/CaseSinglePageR10">
                                                                <a href="/DonatePage">
                                                                    Learn More
                                                                </a>
                                                            </Link>
                                                            </li>
                                                            <li><Link onClick={ClickHandler} href="/DonatePage"><a>Donate Now</a></Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>



                                    </Slider>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                )}
            </InView>
        );
    }
}

export default CaseSlide;




