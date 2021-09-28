import React, {Fragment} from 'react';
import Header from '../../components/header'
import PageTitleThank from '../../components/pagetitlethankyou'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Head from 'next/head'
import ThankYoupage from '../../components/ThankYoupage';

const ThankYouPage =() => {
    return(
        <Fragment>
             <Head>
                <title>Contact</title>
            </Head>
            <Header/>
            <PageTitleThank pageTitleThank={'Thank you!'} pagesub={'Your message has been sent successfully'}/> 
            <ThankYoupage/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default ThankYouPage;

