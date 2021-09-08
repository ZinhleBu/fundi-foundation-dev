import React, {Fragment} from 'react';
import Header from '../../components/header'
import PageTitle from '../../components/pagetitle'
import CaseSingleR10 from '../../components/CaseSingleR10'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Head from 'next/head'

const CaseSinglePageR10 =() => {
    return(
        <Fragment>
             <Head>
                <title>R10 Goes a Long Way</title>
            </Head>
            <Header/>
            <PageTitle pageTitle={'R10 Goes a Long Way'} pagesub={'Funding the dreams of matriculants throughout the country.'}/> 
            <CaseSingleR10/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default CaseSinglePageR10;
