import React, {Fragment} from 'react';
import Header from '../../components/header'
import PageTitle from '../../components/pagetitle'
import Success from '../../components/Success'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Head from 'next/head'

const SuccessPage =() => {
    return(
        <Fragment>
             <Head>
                <title>Payment successful</title>
            </Head>
            <Header/>
            <PageTitle pageTitle={'Payment successful'} pagesub={'Thank you for your donation'}/> 
            <Success/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default SuccessPage;
