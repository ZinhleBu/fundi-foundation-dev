import React, {Fragment} from 'react';
import Header from '../../components/header'
import PageTitleR10 from '../../components/pagetitleR10'
import DonateR10 from '../../components/DonateR10'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Head from 'next/head'

const DonatePageR10GoesALongWay =() => {
    return(
        <Fragment>
             <Head>
                <title>Donate R10 Goes A Long Way</title>
                <meta name="description" content=" The protests inspired social media celebrity, Lasizwe Dambuza and friends into action and the #R10 Goes a long Way campaign was started – first raising R38 000 between the four friends, Takkies Nkateko, Sibu Mabena, Ayanda Mhlongo." />
                <meta property="og:title" content="R10 Goes A Long Way" key="title"/>
                <meta name="robots" content="index,follow" />
            </Head>
            <Header/>
            <PageTitleR10 pageTitle={'Donate Now'} pagesub={'Donate'}/> 
            <DonateR10/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default DonatePageR10GoesALongWay;
