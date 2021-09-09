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
                <title>Fundi Fund Details</title>
            </Head>
            <Header/>
            <PageTitleFund pageTitleFund={'Fundi Fund'} pagesub={'Funding the dreams of matriculants throughout the country.'}/> 
            <CaseSingleFund/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default CaseSinglePageFund;
