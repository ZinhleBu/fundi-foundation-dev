
import React, { Component } from 'react'
import Slider from "react-slick";
import Link from 'next/link'

class ImageSlide extends Component {
    
    render() {
        var settings = {
            dots: false,
            arrows: true,
            infinite: true,
            speed: 500,
            slidesToShow: 2,
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

        const ClickHandler = () =>{
            window.scrollTo(10, 0);
         }
        return (
          <div className="wpo-case-area section-padding">
              <div className="container">
                  <div className="row">
                      <div className="col-12">
                          <div className="wpo-section-title">
                              <span>Our Causes</span>
                              <h2>Some of the beneficiaries</h2>
                          </div>
                      </div>
                  </div>
                  <div className="wpo-case-wrap">
                      <div className="wpo-case-slider">
                        <Slider {...settings}>


                          <div className="wpo-case-single">
                                <div className="wpo-case-item">
                                    <div className="wpo-case-img">
                                        <img src='images/imageSlider/about3-foundation.png' alt=""/>
                                    </div>
                                   
                                </div>
                            </div>


                            <div className="wpo-case-single">
                                <div className="wpo-case-item">
                                    <div className="wpo-case-img">
                                        <img src='images/imageSlider/about3-foundation2.png' alt=""/>
                                    </div>
                                   
                                </div>
                            </div>


                            <div className="wpo-case-single">
                                <div className="wpo-case-item">
                                    <div className="wpo-case-img">
                                        <img src='images/imageSlider/about3-foundation3.png' alt=""/>
                                    </div>
                                    
                                </div>
                            </div>


                            <div className="wpo-case-single">
                                <div className="wpo-case-item">
                                    <div className="wpo-case-img">
                                        <img src='images/imageSlider/about3-foundation4.png' alt=""/>
                                    </div>
                                   
                                </div>
                            </div>


                        </Slider>
                      </div>
                  </div>
              </div>
          </div>
            );
        }
    }
    
    export default ImageSlide;
          
          
          
          
