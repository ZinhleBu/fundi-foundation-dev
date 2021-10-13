import React, {Fragment} from 'react';
import Header from '../../components/header'
import PageTitleRebuild from '../../components/pagetitlerebuild'
import CaseSingleRebuild from '../../components/CaseSingleRebuild'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Head from 'next/head'

const CaseSinglePageRebuild =() => {
    return(
        <Fragment>
             <Head>
                <title>#Unite4Schools Details</title>
            </Head>
            <Header/>
            <PageTitleRebuild pageTitleRebuild={'#Unite4Schools'} pagesub={'Enabling education dreams'}/> 
            <CaseSingleRebuild/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default CaseSinglePageRebuild;
