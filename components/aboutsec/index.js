import VideoModal from '../ModalVideo'
import Link from 'next/link'
import { InView } from "react-intersection-observer";
import { motion } from "framer-motion";

const AboutSec = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    return (
        <InView threshold={0.5}>
            {({ ref, inView }) => (
                <div className="wpo-about-area section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-12 colsm-12">
                                <div className="wpo-about-text">
                                    <div
                                       
                                        className="wpo-section-title">
                                        <span>Foundation</span>
                                        <h2>Our impacts  to date</h2>
                                    </div>
                                    <p>The FundiFoundation is a universe of all things that enable education and learning for those who can’t help themselves. </p>
                                    <p>Through our fundraising initiatives , and we’ve assisted matric learners at Tembisa High School Matriculants, Custom made and distributed School Bags, fund bursary students Mpumi and Nompilo, donated hundreds of thousands of rands to tertiary institutions,</p>
                                    <p>raised funds and provided study equipment to schools like the Sibonile school of the blind, Bukho Bami Community centre, as well as hosted metric announcements and awards events.</p>
                                  
                                    <div
                                        
                                        className="btns">
                                        <Link href="/DonatePage">
                                            <a className="theme-btn" onClick={ClickHandler}>Donate Now</a>
                                        </Link>
                                        <ul>
                                            <li className="video-holder">
                                                <VideoModal />
                                            </li>
                                            <li className="video-text">
                                                Watch Our Video
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-8 col-sm-12">
                                <motion.div 
                                ref={ref}
                                initial={{ opacity: 0 }}
                                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="wpo-about-img-3">

                                    <img src='images/event-details-makwena.jpg' alt="" />
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </InView>
    )
}

export default AboutSec;