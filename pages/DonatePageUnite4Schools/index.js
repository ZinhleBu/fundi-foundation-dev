import React, {Fragment} from 'react';
import Header from '../../components/header'
import PageTitleRebuild from '../../components/pagetitlerebuild'
import DonateUnite from '../../components/DonateUnite'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Head from 'next/head'

const DonatePageUnite4Schools =() => {
    return(
        <Fragment>
             <Head>
                <title>Donate</title>
            </Head>
            <Header/>
            <PageTitleRebuild pageTitle={'Donate Now'} pagesub={'Donate'}/> 
            <DonateUnite/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default DonatePageUnite4Schools;
