
import React, { Component } from 'react'
import Slider from "react-slick";
import Link from 'next/link'
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

            <div className="wpo-case-area section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="wpo-section-title">
                                <span>
                                    FundiFoundation
                                </span>
                                <h2>
                                    Our Education Fundraising Platforms
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="wpo-case-wrap">
                        <div className="wpo-case-slider">
                            <Slider {...settings}>
                                <div className="wpo-case-single">
                                    <div className="wpo-case-item">
                                        <div className="wpo-case-img">
                                            <img src='images/case/img-1-leaders.webp' alt="" />
                                        </div>
                                        <div className="wpo-case-content">
                                            <div className="wpo-case-text-top">
                                                <h2>Leaders4Learners</h2>
                                            </div>
                                            <div className="case-btn">
                                                <ul>
                                                    <li>
                                                        <Link
                                                            onClick={ClickHandler}
                                                            href="/Leaders4Learners">
                                                            <a href="/Leaders4Learners">
                                                                Learn More
                                                            </a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link onClick={ClickHandler} href="/DonatePageLeaders4Learners">
                                                            <a>
                                                                Donate Now
                                                            </a>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="wpo-case-single">
                                    <div className="wpo-case-item">
                                        <div className="wpo-case-img">
                                            <img src='images/case/img-1-unite.webp' alt="" />
                                        </div>
                                        <div className="wpo-case-content">
                                            <div className="wpo-case-text-top">
                                                <h2>
                                                    Unite4Schools
                                                </h2>

                                            </div>
                                            <div className="case-btn">
                                                <ul>
                                                    <li>
                                                        <Link
                                                            onClick={ClickHandler}
                                                            href="/Unite4Schools">
                                                            <a href="/Unite4Schools">
                                                                Learn More
                                                            </a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            onClick={ClickHandler}
                                                            href="/DonatePageUnite4Schools">
                                                            <a>
                                                                Donate Now
                                                            </a>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="wpo-case-single">
                                    <div className="wpo-case-item">
                                        <div className="wpo-case-img">
                                            <img src='images/case/img-1-12412.webp' alt="" />
                                        </div>
                                        <div className="wpo-case-content">
                                            <div className="wpo-case-text-top">
                                                <h2>FundiFund 12412</h2>
                                            </div>
                                            <div className="case-btn"> 
                                                <ul>
                                                    <li><Link onClick={ClickHandler} href="/FundiFund12412">
                                                        <a href="/FundiFund12412">
                                                            Learn More
                                                        </a>
                                                    </Link>
                                                    </li>
                                                    <li><Link onClick={ClickHandler} href="/DonatePage12412"><a>Donate Now</a></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="wpo-case-single">
                                    <div className="wpo-case-item">
                                        <div className="wpo-case-img">
                                            <img src='images/case/img-1-R10.webp' alt="" />
                                        </div>
                                        <div className="wpo-case-content">
                                            <div className="wpo-case-text-top">
                                                <h2>#R10GoesALongWay</h2>
                                            </div>
                                            <div className="case-btn">
                                                <ul>
                                                    <li><Link onClick={ClickHandler} href="/R10GoesALongWay">
                                                        <a href="/R10GoesALongWay">
                                                            Learn More
                                                        </a>
                                                    </Link>
                                                    </li>
                                                    <li><Link onClick={ClickHandler} href="/DonatePageR10GoesALongWay"><a>Donate Now</a></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="wpo-case-single">
                                    <div className="wpo-case-item">
                                        <div className="wpo-case-img">
                                            <img src='images/case/img-1-csi.webp' alt="" />
                                        </div>
                                        <div className="wpo-case-content">
                                            <div className="wpo-case-text-top">
                                                <h2>Fundi CSI</h2>
                                            </div>
                                            <div className="case-btn">
                                                <ul>
                                                    <li><Link onClick={ClickHandler} href="/FundiCsi">
                                                        <a href="/FundiCsi">
                                                            Learn More
                                                        </a>
                                                    </Link>
                                                    </li>
                                                    <li><Link onClick={ClickHandler} href="/DonatePageFundiCsi"><a>Donate Now</a></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CaseSlide;




