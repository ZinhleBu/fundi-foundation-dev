import React, {Fragment} from 'react';
import Header from '../../components/header'
import PageTitle from '../../components/pagetitle'
import Article5 from '../../components/Article5'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Head from 'next/head'

const SchoolBagsBlogPost =() => {
    return(
        <Fragment>
             <Head>
                <title>School Bags Donations</title>
            </Head>
            <Header/>
            <PageTitle pageTitle={'Local News'} pagesub={'By Fundi'}/> 
            <Article5/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default SchoolBagsBlogPost;
