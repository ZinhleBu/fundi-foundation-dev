import React, {Fragment} from 'react';
import Header from '../../components/header'
import PageTitleAbout from '../../components/pagetitleabout'
import PrivacySection from 'PrivacySection'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Head from 'next/head'
import { AnimatePresence, motion } from "framer-motion";
import VideoPlayer5 from '../../components/VideoPlayer5';

const AboutPage =() => {
    return(

        <Fragment>
            <Head>
                <title>Privacy Policy</title>
            </Head>
            <AnimatePresence exitBeforeEnter>
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            >
            <Header/>
            <PageTitleAbout pageTitleAbout={'Privacy Policy'} pagesub={'FundiFoundation'}/> 
         <PrivacySection/>
            <Footer/>
            <Scrollbar/>
            </motion.div>
            </AnimatePresence>

        </Fragment>
    )
};
export default AboutPage;
