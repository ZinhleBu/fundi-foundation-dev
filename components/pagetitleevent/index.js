import Link from 'next/link'
import { AnimatePresence, motion } from "framer-motion";

const PageTitle = (props) => {
    return (
        <AnimatePresence exitBeforeEnter>
            <motion.div
                key={4}

                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: .2 }}
                className="wpo-breadcumb-area-event">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="wpo-breadcumb-wrap">
                                <motion.h2
                                    key={8}

                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1, y: -10 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    transition={{ delay: .4 }}
                                >{props.pageTitle}</motion.h2>
                                <motion.ul
                                    key={81}

                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1, y: -10 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    transition={{ delay: .6 }}
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

export default PageTitle;