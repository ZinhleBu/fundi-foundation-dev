import React, {Fragment} from 'react';
import Header from '../../components/header'
import PageTitleEvent from '../../components/pagetitleevent'
import EventSection2 from '../../components/event2'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Head from 'next/head'

const EventPage =() => {
    return(
        <Fragment>
             <Head>
                <title>Articles</title>
            </Head>
            <Header/>
            <PageTitleEvent pageTitle={'Articles'} pagesub={'Events'}/> 
            <EventSection2/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default EventPage;
