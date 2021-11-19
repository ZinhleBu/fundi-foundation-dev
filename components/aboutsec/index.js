import Link from 'next/link'
import { InView } from "react-intersection-observer";
import { motion } from "framer-motion";

const AboutSec = (props) => {
   
    return (
        <InView threshold={0.5}>
            {({ ref, inView }) => (
                <div className="wpo-about-area section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-12 colsm-12">
                                <div className="wpo-about-text">
                                    <div className="wpo-section-title">
                                        <span>FundiFoundation</span>
                                        <h2>Meet The Beneficiaries</h2>
                                    </div>
                                    <p>The FundiFoundation is a universe of all things that enable education and learning for those who can’t help themselves. </p>
                                    <p>Through our fundraising initiatives, and we’ve assisted matric learners at Tembisa High School, We've custom made and distributed School Bags, funded bursary students Mpumi and Nompilo, donated hundreds of thousands of rands to tertiary institutions, raised funds and provided study equipment to schools like the Sibonile School for the Blind, Bukho Bami Community Centre, as well as hosted matric announcements and awards events.</p>
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