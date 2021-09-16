import React, {Fragment} from 'react';
import Header from '../../components/header'
import PageTitleContact from '../../components/pagetitlecontact'
import Contactpage from '../../components/Contactpage'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Head from 'next/head'

const ContactPage =() => {
    return(
        <Fragment>
             <Head>
                <title>Contact</title>
            </Head>
            <Header/>
            <PageTitleContact pageTitleContact={'Contact Us'} pagesub={'Contact'}/> 
            <Contactpage/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default ContactPage;

