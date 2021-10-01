
import 'react-toastify/dist/ReactToastify.css';
import '../styles/font-awesome.min.css';
import '../styles/themify-icons.css';
import '../styles/flaticon.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/react-modal-video/scss/modal-video.scss';
import '../styles/globals.css'
import '../styles/style.css'
import { AnimatePresence, motion } from "framer-motion";


function MyApp({ Component, pageProps }) {

  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div 
       initial={{ opacity: 0 }}
       animate={{ opacity: 1 }}
       exit={{ opacity: 0 }}
      >
      <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  )
}

export default MyApp
