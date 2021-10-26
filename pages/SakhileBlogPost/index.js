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
                <title>Sakhile - Article post</title>
                <meta name="Description" CONTENT="From sleeping in a park at night, a young student is now able to enjoy full-time tertiary studies thanks to a generous bursary" />
                <meta name="robots" content="index,follow"/>
                <link
                    rel="canonical"
                    href="https://fundifoundation.org/SakhileBlogPost"
                    key="canonical"
                />
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
