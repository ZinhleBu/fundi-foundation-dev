import React, {Fragment} from 'react';
import Header from '../../components/header'
import PageTitleLeaders from '../../components/pagetitleleaders'
import DonateLeaders from '../../components/DonateLeaders'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Head from 'next/head'

const DonatePageLeaders4Learners =() => {
    return(
        <Fragment>
             <Head>
                <title>Donate</title>
            </Head>
            <Header/>
            <PageTitleLeaders pageTitle={'Donate Now'} pagesub={'Donate'}/> 
            <DonateLeaders/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default DonatePageLeaders4Learners;
