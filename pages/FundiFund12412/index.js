import React, {Fragment} from 'react';
import Header from '../../components/header'
import PageTitleFund from '../../components/pagetitlefund'
import CaseSingleFund from '../../components/CaseSingleFund'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Head from 'next/head'

const FundiFund12412 =() => {
    return(
        <Fragment>
             <Head>
                <title>Fundi Fund 12412 Details</title>
                <meta name="description" content="Helping matriculants get past the finish line." />
                <meta property="og:title" content="Fundi Fund 12412" key="title"/>
                <meta name="robots" content="index,follow" />
            </Head>
            <Header/>
            <PageTitleFund pageTitleFund={'FundiFund 12412'} pagesub={'Helping matriculants get past the finish line.'}/> 
            <CaseSingleFund/>

            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default FundiFund12412;
