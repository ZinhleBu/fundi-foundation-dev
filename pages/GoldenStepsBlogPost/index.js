import React, {Fragment} from 'react';
import Header from '../../components/header'
import PageTitle from '../../components/pagetitle'
import Article3 from '../../components/Article3'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Head from 'next/head'

const GoldenStepsBlogPost =() => {
    return(
        <Fragment>
             <Head>
                <title>Golden Steps School post</title>
            </Head>
            <Header/>
            <PageTitle pageTitle={'Local News'} pagesub={'By Charlene Somduth'}/> 
            <Article3/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default GoldenStepsBlogPost;
