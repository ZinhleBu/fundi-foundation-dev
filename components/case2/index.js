
import React, { Component } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion } from "framer-motion";
class Casesection extends Component {
    render() {
        const ClickHandler = () => {
            window.scrollTo(10, 0);
        }
        return (
            <AnimatePresence>
                <div className="wpo-case-area-2 section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="wpo-section-title">
                                    <motion.span
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1, y: -10 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        transition={{ delay: .1 }}
                                    >Our Causes</motion.span>
                                    <motion.h2
                                     initial={{ opacity: 0 }}
                                     animate={{ opacity: 1, y: -10 }}
                                     exit={{ opacity: 0, y: 10 }}
                                     transition={{ delay: .2 }}
                                    >                                    Our Education Fundraising Platforms
                                    </motion.h2>
                                </div>
                            </div>
                        </div>
                        <div className="wpo-case-wrap">
                            <div className="row">
                                <motion.div
                                 initial={{ opacity: 0 }}
                                 animate={{ opacity: 1, y: -10 }}
                                 exit={{ opacity: 0, y: 10 }}
                                 transition={{ delay: .2 }}
                                className="col-lg-4 col-md-6 custom-grid col-12">
                                    <div className="wpo-case-item">
                                        <div className="wpo-case-img">
                                            <img src='images/case/img-1-R10.jpg' alt="" />
                                        </div>
                                        <div className="wpo-case-content">
                                            <div className="wpo-case-text-top">
                                                <h2>#R10GoesALongWay</h2>

                                            </div>
                                            <div className="case-btn">
                                                <ul>
                                                    <li><Link onClick={ClickHandler} href="/R10GoesALongWay"><a>Learn More</a></Link></li>
                                                    <li><Link onClick={ClickHandler} href="/DonatePageR10GoesALongWay"><a>Donate Now</a></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                                <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1, y: -10 }}
                                exit={{ opacity: 0, y: 10 }}
                                transition={{ delay: .4 }}
                                className="col-lg-4 col-md-6 custom-grid col-12">
                                    <div className="wpo-case-item">
                                        <div className="wpo-case-img">
                                            <img src='images/case/img-1-unite.jpg' alt="" />
                                        </div>
                                        <div className="wpo-case-content">
                                            <div className="wpo-case-text-top">
                                                <h2>Unite4School</h2>
                                            </div>
                                            <div className="case-btn">
                                                <ul>
                                                    <li><Link onClick={ClickHandler} href="/CaseSinglePageRebuild"><a>Learn More</a></Link></li>
                                                    <li><Link onClick={ClickHandler} href="/DonatePageUnite4Schools"><a>Donate Now</a></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                                <motion.div 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1, y: -10 }}
                                exit={{ opacity: 0, y: 10 }}
                                transition={{ delay: .6 }}
                                className="col-lg-4 col-md-6 custom-grid col-12">
                                    <div className="wpo-case-item">
                                        <div className="wpo-case-img">
                                            <img src='images/case/img-1-leaders.jpg' alt="" />
                                        </div>
                                        <div className="wpo-case-content">
                                            <div className="wpo-case-text-top">
                                                <h2>#Leaders4Learners</h2>
                                            </div>
                                            <div className="case-btn">
                                                <ul>
                                                    <li><Link onClick={ClickHandler} href="/CaseSinglePageLeaders"><a>Learn More</a></Link></li>
                                                    <li><Link onClick={ClickHandler} href="/DonatePageLeaders4Learners"><a>Donate Now</a></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                                <div className="col-lg-4 col-md-6 custom-grid col-12">
                                    <div className="wpo-case-item">
                                        <div className="wpo-case-img">
                                            <img src='images/case/img-1-12412.jpg' alt="" />
                                        </div>
                                        <div className="wpo-case-content">
                                            <div className="wpo-case-text-top">
                                                <h2>Fundi Fund 12412</h2>
                                            </div>
                                            <div className="case-btn">
                                                <ul>
                                                    <li><Link onClick={ClickHandler} href="/CaseSinglePageFund"><a>Learn More</a></Link></li>
                                                    <li><Link onClick={ClickHandler} href="/DonatePage12412"><a>Donate Now</a></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-lg-4 col-md-6 custom-grid col-12">
                                    <div className="wpo-case-item">
                                        <div className="wpo-case-img">
                                            <img src='images/case/img-1-csi.jpg' alt="" />
                                        </div>
                                        <div className="wpo-case-content">
                                            <div className="wpo-case-text-top">
                                                <h2>Fundi CSi</h2>
                                               
                                            </div>
                                            <div className="case-btn">
                                                <ul>
                                                    
                                                    <li><Link onClick={ClickHandler} href="/CaseSinglePageFundiCsi"><a>Learn More</a></Link></li>
                                                    <li><Link onClick={ClickHandler} href="/DonatePageFundiCsi"><a>Donate Now</a></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </AnimatePresence>
        );
    }
}

export default Casesection;




