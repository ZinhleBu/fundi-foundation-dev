import React, {Fragment} from 'react';
import Header from '../../components/header'
import PageTitleCase from '../../components/pagetitlecase'
import Mission from '../../components/mission'
import Casesection from '../../components/case2'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Head from 'next/head'

const CasePage =() => {
    return(
        <Fragment>
             <Head>
                <title>Causes</title>
            </Head>
            <Header/>
            <PageTitleCase pageTitleCase={'Our Causes'} pagesub={'Causes'}/> 
            <Casesection/>
            <Mission subclass={'section-padding'}/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default CasePage;
