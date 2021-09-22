
import React, { Component } from 'react'
import Slider from "react-slick";
import { InView } from "react-intersection-observer";
import { motion } from "framer-motion";

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

    const ClickHandler = () => {
      window.scrollTo(10, 0);
    }
    return (
      <InView threshold={0.35}>
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
                    >Our Causes</motion.span>
                    <motion.h2
                    ref={ref}
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    >Some of the beneficiaries</motion.h2>
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
                          <img src='images/imageSlider/about3-foundation.png' alt="" />
                        </div>

                      </div>
                    </div>


                    <div className="wpo-case-single">
                      <div className="wpo-case-item">
                        <div className="wpo-case-img">
                          <img src='images/imageSlider/about3-foundation2.png' alt="" />
                        </div>

                      </div>
                    </div>


                    <div className="wpo-case-single">
                      <div className="wpo-case-item">
                        <div className="wpo-case-img">
                          <img src='images/imageSlider/about3-foundation3.png' alt="" />
                        </div>

                      </div>
                    </div>


                    <div className="wpo-case-single">
                      <div className="wpo-case-item">
                        <div className="wpo-case-img">
                          <img src='images/imageSlider/about3-foundation4.png' alt="" />
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

export default ImageSlide;




