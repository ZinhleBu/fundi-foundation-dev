import React, {Fragment} from 'react';
import Header from '../../components/header'
import PageTitleFund from '../../components/pagetitlefund'
import CaseSingleFund from '../../components/CaseSingleFund'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Head from 'next/head'

const CaseSinglePageFund =() => {
    return(
        <Fragment>
             <Head>
                <title>FundiFund Details</title>
            </Head>
            <Header/>
            <PageTitleFund pageTitleFund={'FundiFund 12412'} pagesub={'Funding the dreams of matriculants throughout the country.'}/> 
            <CaseSingleFund/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default CaseSinglePageFund;
