import React, {Fragment} from 'react';
import Header from '../../components/header'
import PageTitleAbout from '../../components/pagetitleabout'
import TeamSection from '../../components/team'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Head from 'next/head'
import MissionAbout from '../../components/missionabout'
import { AnimatePresence, motion } from "framer-motion";
import VideoPlayer5 from '../../components/VideoPlayer5';

const AboutPage =() => {
    return(

        <Fragment>
            <Head>
                <title>About - FundiFoundation </title>
                <meta name="Description" CONTENT="The FundiFoundation is a universe of all things that enable education and learning for those who can’t help themselves." />
                <meta name="robots" content="index,follow"/>

                <link
                    rel="canonical"
                    href="https://fundifoundation.org/AboutPage"
                    key="canonical"
                />
            </Head>
            <AnimatePresence exitBeforeEnter>
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            >
            <Header/>
            <PageTitleAbout pageTitleAbout={'About Us'} pagesub={'About'}/> 
            <MissionAbout/>
            <TeamSection/>
            <VideoPlayer5/>
            <Footer/>
            <Scrollbar/>
            </motion.div>
            </AnimatePresence>
        </Fragment>
    )
};
export default AboutPage;
