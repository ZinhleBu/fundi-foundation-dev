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
            <PageTitleFund pageTitleFund={'FundiFund 12412'} pagesub={'Helping matriculants get past the finish line.'}/> 
            <CaseSingleFund/>

            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default CaseSinglePageFund;
