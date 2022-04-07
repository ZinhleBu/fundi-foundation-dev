import React, { Fragment } from 'react';
import Header from '../../components/header'
import Hero3 from '../../components/hero3'
import AboutSec from '../../components/aboutsec'
import CaseSlide from '../../components/case'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Head from 'next/head'
import ImageSlide from '../../components/imageSlider';


const Home = () => {
    return (
        <Fragment>
            <Head>
                <title>Home - FundiFoundation</title>
                <meta name="Description" content="The FundiFoundation is a universe of all things that enable education and learning for those who can’t help themselves." />
                <meta name="robots" content="index,follow"/>
                <link
                    rel="canonical"
                    href="https://fundifoundation.org/Home"
                    key="canonical"
                />
            </Head>
            <Header />
            <Hero3 />
            <CaseSlide />
            <AboutSec />
            <ImageSlide />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default Home;