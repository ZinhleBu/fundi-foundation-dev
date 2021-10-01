import Link from 'next/link'
import { motion } from 'framer-motion'
const PageTitleContact = (props) => {
    return(
        <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1}}
        exit={{ opacity: 0}}
        transition={{ delay: .2}}
        className="wpo-breadcumb-area-contact">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="wpo-breadcumb-wrap">
                            <motion.h2
                             initial={{ opacity: 0, y: -20 }}
                             animate={{ opacity: 1, y: 0 }}
                             exit={{ opacity: 0, y: 10 }}
                             transition={{ delay: .4}}
                            >{props.pageTitleContact}</motion.h2>
                            <motion.ul
                             initial={{ opacity: 0, y: -20 }}
                             animate={{ opacity: 1, y: 0 }}
                             exit={{ opacity: 0, y: 10 }}
                             transition={{ delay: .6}}
                            >
                                <li><Link href="/"><a>Home</a></Link></li>
                                <li><span>{props.pagesub}</span></li>
                            </motion.ul>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default PageTitleContact;