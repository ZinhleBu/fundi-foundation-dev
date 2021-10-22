import React, {Fragment} from 'react';
import Header from '../../components/header'
import PageTitle from '../../components/pagetitle'
import Article7 from '../../components/Article7'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Head from 'next/head'

const SibongileSchoolBlogPost =() => {
    return(
        <Fragment>
             <Head>
                <title>to Sibonile School  Donations</title>
            </Head>
            <Header/>
            <PageTitle pageTitle={'Local News'} pagesub={'By Fundi'}/> 
            <Article7/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default SibongileSchoolBlogPost;
