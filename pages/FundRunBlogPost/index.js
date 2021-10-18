import React, {Fragment} from 'react';
import Header from '../../components/header'
import PageTitle from '../../components/pagetitle'
import Article6 from '../../components/Article6'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Head from 'next/head'

const FundRunBlogPost =() => {
    return(
        <Fragment>
             <Head>
                <title>School Bags Donations</title>
            </Head>
            <Header/>
            <PageTitle pageTitle={'Local News'} pagesub={'By Fundi'}/> 
            <Article6/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default FundRunBlogPost;
