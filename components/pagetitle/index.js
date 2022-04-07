import Link from 'next/link'
import { AnimatePresence, motion } from "framer-motion";

const PageTitle = (props) => {

    const genKey = () => {
        return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    }
    console.log(genKey);

    return(
        <AnimatePresence exitBeforeEnter>

        <motion.div 
key={genKey()}
         initial={{ opacity: 0 }}
         animate={{ opacity: 1}}
         exit={{ opacity: 0 }}
         transition={{ delay: .1}}
        className="wpo-breadcumb-area">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="wpo-breadcumb-wrap">
                            <motion.h2
                            key={1}
                             initial={{ opacity: 0 }}
                             animate={{ opacity: 1, y: -10 }}
                             exit={{ opacity: 0, y: 10 }}
                             transition={{ delay: .2}}
                            >{props.pageTitle}</motion.h2>
                            <motion.ul
                                                            key={2}

                             initial={{ opacity: 0 }}
                             animate={{ opacity: 1, y: -10 }}
                             exit={{ opacity: 0, y: 10 }}
                             transition={{ delay: .3}}
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