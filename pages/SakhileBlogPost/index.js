import React, {Fragment} from 'react';
import Header from '../../components/header'
import PageTitle from '../../components/pagetitle'
import Article2 from '../../components/Article2'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Head from 'next/head'

const SakhileBlogPost =() => {
    return(
        <Fragment>
             <Head>
                <title>Sakhile post</title>
            </Head>
            <Header/>
            <PageTitle pageTitle={'Local News'} pagesub={'Erica Abrahams'}/> 
            <Article2/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default SakhileBlogPost;
