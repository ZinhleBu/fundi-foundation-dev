import Link from 'next/link'
import { motion } from 'framer-motion'

const PageTitleAbout = (props) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0}}
            transition={{ delay: .2 }}
            exit={{ opacity: 0 }}
            className="wpo-breadcumb-area-about">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="wpo-breadcumb-wrap">
                            <motion.h2
                                animate={{ opacity: 1, y: -10 }}
                                exit={{ opacity: 0, y: 10 }}
                                transition={{ delay: .2 }}
                                exit={{ opacity: 0 }}
                            >{props.pageTitleAbout}</motion.h2>
                            <ul>
                                <li><Link href="/"><a>Home</a></Link></li>
                                <li><span>{props.pagesub}</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default PageTitleAbout;