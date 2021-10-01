import Link from 'next/link'
import { motion } from 'framer-motion'

const PageTitleR10 = (props) => {
    return(
        <motion.div 
        initial={{ opacity: 0}}
        animate={{ opacity: 1}}
        exit={{ opacity: 0 }}
        transition={{ delay: .2 }}
        className="wpo-breadcumb-area-R10">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="wpo-breadcumb-wrap">
                            <motion.h2>{props.pageTitleR10}</motion.h2>
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

export default PageTitleR10;