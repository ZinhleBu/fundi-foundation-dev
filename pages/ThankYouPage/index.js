import React, {Fragment} from 'react';
import Header from '../../components/header'
import PageTitleThank from '../../components/pagetitlethank'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Head from 'next/head'
import ThankYou from '../../components/ThankYou';

const ThankYouPage =() => {
    return(
        <Fragment>
             <Head>
                <title>Contact</title>
            </Head>
            <Header/>
            <PageTitleThank pageTitleThank={'Payment was successful'} pagesub={'Thank you for your donation'}/> 
            <ThankYou/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default ThankYouPage;

