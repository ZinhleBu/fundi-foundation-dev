
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
import Head from 'next/head';


function MyApp({ Component, pageProps }) {
 

  return (
    <AnimatePresence exitBeforeEnter>

      <Head>

        <meta name="Description" content="The Fundi Foundation is a universe of all things that enable education and learning for those who can’t help themselves." />
        <meta name="robots" content="index,follow" />
        <meta charSet="UTF-8" />
        <meta name="keywords" content="Fundi, Foundation, donation, schools, loans, students, accommodation, devices" />
        <meta name="author" content="Fundi" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="google-site-verification" content="lFLYZHjblJ-fRbu3n_CtiUvf4fDzwM3gqDzUWCgmF8A" />
      </Head>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: {delay: .4, duration: .4}}}
        exit={{ opacity: 0, transition: {delay: .4, duration: .6} }}
      >
        <Component {...pageProps} />
       
      </motion.div>
    </AnimatePresence>
  )
}

export default MyApp
