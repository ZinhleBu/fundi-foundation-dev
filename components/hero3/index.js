import Link from 'next/link'
import { AnimatePresence } from "framer-motion"
import { motion } from 'framer-motion'
const Hero3 = (props) => {

    return (
        <AnimatePresence>

            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="hero hero-style-3">
                <div className="hero-slider">
                    <div className="slide">
                        <div className="container">
                            <div className="row">
                                <div className="col col-lg-12 slide-caption">
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1, y: -10 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        className="slide-title">
                                        <h2>Welcome to <span>Fundi Foundation</span></h2>
                                    </motion.div>
                                    <div className="slide-subtitle">
                                        <p>Donate to the Fundi Foundtion today,</p>
                                        <p>And help us make education dreams come true.</p>
                                    </div>
                                    <div className="btns">
                                        <Link href="/DonatePage"><a className="theme-btn">Donate Now</a></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="right-vec">
                        </div>
                    </div>
                </div>
            </motion.section>
        </AnimatePresence>

    )
}

export default Hero3;