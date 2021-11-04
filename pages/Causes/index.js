import React, {Fragment} from 'react';
import Header from '../../components/header'
import PageTitle from '../../components/pagetitle'
import Casesection from '../../components/case2'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Head from 'next/head'

const Causes =() => {
    return(
        <Fragment>
             <Head>
                <title>Causes</title>
            </Head>
            <Header/>
            <PageTitle pageTitle={'Our Causes'} pagesub={'Causes'}/> 
            <Casesection/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default Causes;
