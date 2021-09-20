import React, {Fragment} from 'react';
import Header from '../../components/header'
import PageTitle from '../../components/pagetitle'
import VedioCta from '../../components/vediocta'
import MissionAbout from '../../components/MissionAbout'
import Mission from '../../components/Mission'
import AboutSec from '../../components/aboutsec'
import CaseSlide from '../../components/case'
import CounterSection from '../../components/counter'
import TeamSection from '../../components/team'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Head from 'next/head'

const CasePage =() => {
    return(
        <Fragment>
            <Head>
                <title>About Us</title>
            </Head>
            <Header/>
            <PageTitle pageTitle={'About Us'} pagesub={'About'}/> 
            <VedioCta/>
            <MissionAbout subclass={'section-padding'}/>
            <Mission/>

            <TeamSection/>
            <CounterSection/>

            <AboutSec/>
            <CaseSlide/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default CasePage;
