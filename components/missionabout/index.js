import Link from 'next/link'
import { motion } from 'framer-motion'

const MissionAbout = (props) => {
    return (
        <div className={`wpo-mission-area ${props.subclass}`}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="wpo-section-title">
                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1, y: -10 }}
                                exit={{ opacity: 0, y: 10 }}
                                transition={{ delay: .2 }}
                            >Whai is FundiFoundation</motion.span>
                            <motion.h2
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1, y: -10 }}
                                exit={{ opacity: 0, y: 10 }}
                                transition={{ delay: .2 }}
                            >Helping Those Who Can't Help Themselves. </motion.h2>
                        </div>
                    </div>
                </div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, y: -10 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ delay: .4 }}
                    className="wpo-mission-wrap">
                    <div className="row">
                        <div className="col-12">
                            <p>

                                Established in 1996, and having financed over 1.8million learners, Fundi is South Africa’s leading education finance and education fund management solution specialist. Positioned at the epicenter of technology, education and financial services, Fundi is the single source of all thing’s education and learning. At Fundi we understand the power of learning and provide financial solutions that enable dreams through a journey of lifelong learning.
                            </p>

                        </div>
                        <div className="col-12">
                            <p>

                                By 2019, through a small CSI budget and employee contributions, Fundi was already making a significant impact through student bursaries, financial commitments to institutions as well as contributions to Bhuko Bhami Community Centre and Sibonile School for the Blind.
                            </p>

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <p>

                                Doing Good is good business, and due to our ethos of doing more to enable more learning as well as being confronted by the challenges students face in getting access to education, Fundi made a strategic decision to establish Fundi Foundation as a long-term commitment to enabling education dreams and making an impactful difference in society. FundiFoundation is a universe of all things that enable education and learning for those who can’t help themselves.
                            </p>

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">

                            <p>
                                FundiFoundation is managed by a board of trustees made up of management at Fundi, with financials audited by PWC. The fundraising initiatives at FundiFoundation fall under five pillars, namely R10GoesALongWay, Leaders4learners, 12for12, RebuildSA, Fundi Bursaries, Fundi Capital.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        {/* <div className="col-lg-3 col-md-6 col-sm-12 col-12 custom-grid">
                            <div className="wpo-mission-item">
                                <div className="wpo-mission-icon-5">
                                    <img src='images/mission/icon1.png' alt=""/>
                                </div>
                                <div className="wpo-mission-content">
                                    <h2>#RebuildSA</h2>
                                    <p>Lorem ipsum dolor amet cosectetur adipiscing, sed do eiusmod.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 col-12 custom-grid">
                            <div className="wpo-mission-item">
                                <div className="wpo-mission-icon-6">
                                    <img src='images/mission/icon2.png' alt=""/>
                                </div>
                                <div className="wpo-mission-content">
                                    <h2>R10 goes a long way</h2>
                                    <p>Lorem ipsum dolor amet cosectetur adipiscing, sed do eiusmod.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 col-12 custom-grid">
                            <div className="wpo-mission-item">
                                <div className="wpo-mission-icon-7">
                                    <img src='images/mission/icon3.png' alt=""/>
                                </div>
                                <div className="wpo-mission-content">
                                    <h2>Leaders4Learners</h2>
                                    <p>Lorem ipsum dolor amet cosectetur adipiscing, sed do eiusmod.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 col-12 custom-grid">
                            <div className="wpo-mission-item">
                                <div className="wpo-mission-icon-8">
                                    <img src='images/mission/icon4.png' alt=""/>
                                </div>
                                <div className="wpo-mission-content">
                                    <h2>FundiFund</h2>
                                    <p>Lorem ipsum dolor amet cosectetur adipiscing, sed do eiusmod.</p>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default MissionAbout;