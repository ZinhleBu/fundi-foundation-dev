import React, {Fragment} from 'react';
import Header from '../../components/header'
import PageTitle from '../../components/pagetitle'
import Article8 from '../../components/Article8'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Head from 'next/head'

const R10EventBlogPost =() => {
    return(
        <Fragment>
             <Head>
                <title>R10 Goes A Long Way Second Phase</title>
            </Head>
            <Header/>
            <PageTitle pageTitle={'#R10GoesALongWay - Second phase'} pagesub={'Education for All Children'}/> 
            <Article8/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default R10EventBlogPost;
