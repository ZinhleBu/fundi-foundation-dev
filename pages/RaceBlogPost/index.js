import React, {Fragment} from 'react';
import Header from '../../components/header'
import PageTitle from '../../components/pagetitle'
import Article4 from '../../components/Article4'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Head from 'next/head'

const RaceBlogPost =() => {
    return(
        <Fragment>
             <Head>
                <title>Kempton Express || Thembisan post</title>
            </Head>
            <Header/>
            <PageTitle pageTitle={'Local News'} pagesub={'By Charlene Somduth'}/> 
            <Article4/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default RaceBlogPost;
