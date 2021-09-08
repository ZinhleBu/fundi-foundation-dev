import React, {Fragment} from 'react';
import Header from '../../components/header'
import PageTitle from '../../components/pagetitle'
import CaseSingleLeaders from '../../components/CaseSingleLeaders'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Head from 'next/head'

const CaseSinglePageLeaders =() => {
    return(
        <Fragment>
             <Head>
                <title>Leaders4Learners Details</title>
            </Head>
            <Header/>
            <PageTitle pageTitle={'Leaders4Learners'} pagesub={'Ensure Education for every poor children'}/> 
            <CaseSingleLeaders/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default CaseSinglePageLeaders;
