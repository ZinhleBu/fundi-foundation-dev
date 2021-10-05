import React, { Fragment } from 'react';
import Header from '../components/header'
import Hero3 from '../components/hero3'
import AboutSec from '../components/aboutsec'
import CaseSlide from '../components/case'
import Footer from '../components/footer'
import Scrollbar from '../components/scrollbar'
import Head from 'next/head'
import ImageSlide from '../components/imageSlider';

const HomePage = () => {
    return (
        <Fragment>
            <Head>
                <title>FundiFoundation</title>

            </Head>
            <Header />
            <Hero3 />
            <CaseSlide />
            {/* <Mission subclass={'section-padding'}/> */}
            <AboutSec />
            {/* <Gallery/> */}
            <ImageSlide />
            {/* <CounterSection countclass={'wpo-counter-style-2'}/> */}
            {/* <TeamSection/> */}
            {/* <WorldSection worldclass={'wpo-world-area-2'}/> */}
            {/* <BlogSection/> */}
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default HomePage;


