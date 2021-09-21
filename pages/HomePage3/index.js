import React, {Fragment} from 'react';
import Header from '../../components/header'
import Hero3 from '../../components/hero3'
import Mission from '../../components/mission'
import AboutSec from '../../components/aboutsec'
import CaseSlide from '../../components/case'
import CounterSection from '../../components/counter'
import TeamSection from '../../components/team'
import WorldSection from '../../components/world'
import BlogSection from '../../components/BlogSection'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Head from 'next/head'
import ImageSlide from '../../components/imageSlider';


const HomePage3 =() => {
    return(
        <Fragment>
             <Head>
                <title>Fundi Foundation</title>
            </Head>
            <Header/>
            <Hero3/>
            <AboutSec/>
            <ImageSlide/>

            <Mission subclass={'section-padding'}/>
            <CounterSection countclass={'wpo-counter-style-2'}/>
            <CaseSlide/>
            {/* <TeamSection/> */}
            <WorldSection worldclass={'wpo-world-area-2'}/>
            {/* <BlogSection/> */}
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default HomePage3;