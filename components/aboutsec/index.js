import VideoModal from '../ModalVideo'
import Link from 'next/link'
import { InView } from "react-intersection-observer";
import { motion } from "framer-motion";

const AboutSec = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    return (
        <InView threshold={0.35}>
            {({ ref, inView }) => (
                <div className="wpo-about-area section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-12 colsm-12">
                                <div className="wpo-about-text">
                                    <motion.div
                                        ref={ref}
                                        initial={{ opacity: 0 }}
                                        animate={inView ? { opacity: 1 } : { opacity: 0 }}
                                        transition={{ duration: 0.8 }}
                                        className="wpo-section-title">
                                        <span>Foundation</span>
                                        <h2>Impact to date – fundi capital</h2>
                                    </motion.div>
                                    <motion.h3
                                        ref={ref}
                                        initial={{ opacity: 0 }}
                                        animate={inView ? { opacity: 1 } : { opacity: 0 }}
                                        transition={{ duration: 0.8 }}
                                    >Tembisa High School Bags</motion.h3>
                                    <motion.h3
                                        ref={ref}
                                        initial={{ opacity: 0 }}
                                        animate={inView ? { opacity: 1 } : { opacity: 0 }}
                                        transition={{ duration: 0.8 }}
                                    >Mandela Day Bursary Students Mpumi and Nompilo Cheque handover – UCT</motion.h3>
                                    <motion.h3
                                        ref={ref}
                                        initial={{ opacity: 0 }}
                                        animate={inView ? { opacity: 1 } : { opacity: 0 }}
                                        transition={{ duration: 0.8 }}
                                    >12for12 Pics – Cheque handover</motion.h3>
                                    <motion.h3
                                        ref={ref}
                                        initial={{ opacity: 0 }}
                                        animate={inView ? { opacity: 1 } : { opacity: 0 }}
                                        transition={{ duration: 0.8 }}
                                    >Sibonile school of the blind. </motion.h3>
                                    <motion.h3
                                        ref={ref}
                                        initial={{ opacity: 0 }}
                                        animate={inView ? { opacity: 1 } : { opacity: 0 }}
                                        transition={{ duration: 0.8 }}
                                    >Bukho Bami community centre, Sakhile Nsibande</motion.h3>
                                    <motion.div
                                        ref={ref}
                                        initial={{ opacity: 0 }}
                                        animate={inView ? { opacity: 1 } : { opacity: 0 }}
                                        transition={{ duration: 0.8 }}
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
                                    </motion.div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-8 col-sm-12">
                                <motion.div 
                                ref={ref}
                                initial={{ opacity: 0 }}
                                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="wpo-about-img-3">

                                    <img src='images/event-details-makwena.webp' alt="" />
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