import { InView } from "react-intersection-observer";
import { motion } from "framer-motion";



const CounterSection = (props) => {
    return (
        <InView threshold={0.35}>
            {({ ref, inView }) => (
                <div className={`wpo-counter-area ${props.countclass}`}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="wpo-counter-grids">
                                    <motion.div 
                                    ref={ref}
                                    initial={{ opacity: 0 }}
                                    animate={inView ? { opacity: 1 } : { opacity: 0 }}
                                    transition={{ duration: 0.8, delay: 0.1 }}
                                    className="grid">
                                        <div>
                                            <h2><span className="odometer" data-count="6200">6200</span>+</h2>
                                        </div>
                                        <p>Donation</p>
                                    </motion.div>
                                    <motion.div 
                                    ref={ref}
                                    initial={{ opacity: 0 }}
                                    animate={inView ? { opacity: 1 } : { opacity: 0 }}
                                    transition={{ duration: 0.8, delay: 0.3 }}
                                    className="grid">
                                        <div>
                                            <h2><span className="odometer" data-count="80">80</span>+</h2>
                                        </div>
                                        <p>Fund Raised</p>
                                    </motion.div>
                                    <motion.div 
                                    ref={ref}
                                    initial={{ opacity: 0 }}
                                    animate={inView ? { opacity: 1 } : { opacity: 0 }}
                                    transition={{ duration: 0.8, delay: 0.5 }}
                                    className="grid">
                                        <div>
                                            <h2><span className="odometer" data-count="245">245</span>+</h2>
                                        </div>
                                        <p>Volunteers</p>
                                    </motion.div>
                                    <motion.div 
                                    ref={ref}
                                    initial={{ opacity: 0 }}
                                    animate={inView ? { opacity: 1 } : { opacity: 0 }}
                                    transition={{ duration: 0.8, delay: 0.7 }}
                                    className="grid">
                                        <div>
                                            <h2><span className="odometer" data-count="605">605</span>+</h2>
                                        </div>
                                        <p>Projects</p>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </InView>
    )
}

export default CounterSection;