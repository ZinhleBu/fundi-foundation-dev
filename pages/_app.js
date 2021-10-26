
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

        <meta name="Description" CONTENT="The FundiFoundation is a universe of all things that enable education and learning for those who can’t help themselves." />
        <meta name="robots" content="index,follow" />
        <meta charset="UTF-8" />
        <meta name="keywords" content="Fundi, Foundation, donation, schools, loans, students, accommodation, devices" />
        <meta name="author" content="Fundi" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="canonical"
          href="https://fundifoundation.org/AboutPage"
          key="canonical"
        />
      </Head>
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
