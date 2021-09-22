import React, {Fragment} from 'react';
import Header from '../../components/header'
import PageTitle from '../../components/pagetitle'
import Article1 from '../../components/Article1'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Head from 'next/head'

const AyandamantombazaneBlogPost =() => {
    return(
        <Fragment>
             <Head>
                <title>Ayandamantombazane post</title>
            </Head>
            <Header/>
            <PageTitle pageTitle={'#R10GoesALongWay - History'} pagesub={'Education for All Children'}/> 
            <Article1/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default AyandamantombazaneBlogPost;
