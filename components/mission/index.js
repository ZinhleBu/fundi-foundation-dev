import { InView } from "react-intersection-observer";
import { motion } from "framer-motion";


const Mission = (props) => {

    return (
        <InView threshold={0.25}>
            {({ ref, inView }) => (
                <div className={`wpo-mission-area ${props.subclass}`}>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="wpo-section-title">
                                    <motion.span
                                    ref={ref}
                                    initial={{ opacity: 0 }}
                                    animate={inView ? { opacity: 1 } : { opacity: 0 }}
                                    transition={{ duration: 0.8 }}
                                    >What We Do?</motion.span>
                                    <motion.h2
                                    ref={ref}
                                    initial={{ opacity: 0 }}
                                    animate={inView ? { opacity: 1 } : { opacity: 0 }}
                                    transition={{ duration: 0.8 }}
                                    >We Are On A Mission To Help Those Who Can't Help Themselves</motion.h2>
                                </div>
                            </div>
                        </div>

                        <motion.div
                            ref={ref}
                            initial={{ opacity: 0 }}
                            animate={inView ? { opacity: 1 } : { opacity: 0 }}
                            transition={{ duration: 0.8 }}
                            className="wpo-mission-wrap">
                            <div className="row">
                                <div className="col-lg-4 col-md-6 col-sm-12 col-12 custom-grid">
                                    <div className="wpo-mission-item">
                                        <div className="wpo-mission-icon-5">
                                            <img src='images/mission/icon1-R10.png' alt="" />
                                        </div>
                                        <div className="wpo-mission-content">
                                            <h2>#R10 Goes A Long Way</h2>
                                            <p>Lorem ipsum dolor amet cosectetur adipiscing, sed do eiusmod.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 col-12 custom-grid">
                                    <div className="wpo-mission-item">
                                        <div className="wpo-mission-icon-6">
                                            <img src='images/mission/icon2.png' alt="" />
                                        </div>
                                        <div className="wpo-mission-content">
                                            <h2>#RebuildSA</h2>
                                            <p>Lorem ipsum dolor amet cosectetur adipiscing, sed do eiusmod.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 col-12 custom-grid">
                                    <div className="wpo-mission-item">
                                        <div className="wpo-mission-icon-7">
                                            <img src='images/mission/icon3.png' alt="" />
                                        </div>
                                        <div className="wpo-mission-content">
                                            <h2>#Leaders4Learners</h2>
                                            <p>Lorem ipsum dolor amet cosectetur adipiscing, sed do eiusmod.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 col-12 custom-grid"
                                    style={{ marginTop: "20px" }}>
                                    <div className="wpo-mission-item">
                                        <div className="wpo-mission-icon-8">
                                            <img src='images/mission/icon4.png' alt="" />
                                        </div>
                                        <div className="wpo-mission-content">
                                            <h2>FundiFund 12412</h2>
                                            <p>Lorem ipsum dolor amet cosectetur adipiscing, sed do eiusmod.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 col-12 custom-grid"
                                    style={{ marginTop: "20px" }} >
                                    <div className="wpo-mission-item">
                                        <div className="wpo-mission-icon-8">
                                            <img src='images/mission/icon4.png' alt="" />
                                        </div>
                                        <div className="wpo-mission-content">
                                            <h2>Fundi CSI</h2>
                                            <p>Lorem ipsum dolor amet cosectetur adipiscing, sed do eiusmod.</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </motion.div>

                    </div>
                </div>
            )}
        </InView>
    )
}

export default Mission;

