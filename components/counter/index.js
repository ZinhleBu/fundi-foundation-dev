import { InView } from "react-intersection-observer";
import { AnimatePresence, motion } from "framer-motion";


const CounterSection = (props) => {

    return (
        <AnimatePresence exitBeforeEnter>

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
                                                <h2>
                                                    <span
                                                        className="odometer"
                                                        data-count="2 342 462">
                                                        R2,4M
                                                    </span>
                                                </h2>
                                            </div>
                                            <p>Total pledged</p>
                                        </motion.div>
                                        <motion.div


                                            ref={ref}
                                            initial={{ opacity: 0 }}
                                            animate={inView ? { opacity: 1 } : { opacity: 0 }}
                                            transition={{ duration: 0.8, delay: 0.3 }}
                                            className="grid">
                                            <div>
                                                <h2><span className="odometer" data-count="80">R1.76M</span></h2>
                                            </div>
                                            <p>Fund Dispursed</p>
                                        </motion.div>
                                        <motion.div

                                            ref={ref}
                                            initial={{ opacity: 0 }}
                                            animate={inView ? { opacity: 1 } : { opacity: 0 }}
                                            transition={{ duration: 0.8, delay: 0.5 }}
                                            className="grid">
                                            <div>
                                                <h2><span className="odometer" data-count="106">430</span></h2>
                                            </div>
                                            <p>Students Funded</p>
                                        </motion.div>
                                        <motion.div

                                            ref={ref}
                                            initial={{ opacity: 0 }}
                                            animate={inView ? { opacity: 1 } : { opacity: 0 }}
                                            transition={{ duration: 0.8, delay: 0.7 }}
                                            className="grid">
                                            <div>
                                                <h2><span className="odometer" data-count="1 778 000">R678.5k</span></h2>
                                            </div>
                                            <p>Funds to be awarded in the next cycle</p>
                                        </motion.div>
                                    </div>
                                </div>
                            </div>

                            <div
                                style={{
                                    top: 50,
                                }}
                                className="donor-logos col-12">
                                <div className="row-12">
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </InView>
        </AnimatePresence>

    )
}

export default CounterSection;
