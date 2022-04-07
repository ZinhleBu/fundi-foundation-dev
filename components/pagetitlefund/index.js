import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'

const PageTitleFund = (props) => {
    return (
        <AnimatePresence exitBeforeEnter>
            <motion.div
                key={9}

                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: .1 }}
                className="wpo-breadcumb-area-fund">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="wpo-breadcumb-wrap-fund">
                                <motion.h2
                                    key={10}

                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1, y: -10 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    transition={{ delay: .2 }}
                                >{props.pageTitleFund}</motion.h2>
                                <motion.ul
                                    key={11}

                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1, y: -10 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    transition={{ delay: .4 }}
                                >
                                    <li><Link href="/"><a>Home</a></Link></li>
                                    <li><span>{props.pagesub}</span></li>
                                </motion.ul>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    )
}

export default PageTitleFund;