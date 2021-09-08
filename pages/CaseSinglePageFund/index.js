import React, {Fragment} from 'react';
import Header from '../../components/header'
import PageTitle from '../../components/pagetitle'
import CaseSingleFund from '../../components/CaseSingleFund'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Head from 'next/head'

const CaseSinglePageFund =() => {
    return(
        <Fragment>
             <Head>
                <title>Fundi Fund Details</title>
            </Head>
            <Header/>
            <PageTitle pageTitle={'Fundi Fund'} pagesub={'Funding the dreams of matriculants throughout the country.'}/> 
            <CaseSingleFund/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default CaseSinglePageFund;
