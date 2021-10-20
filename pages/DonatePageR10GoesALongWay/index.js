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
                <title>Donate</title>
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
