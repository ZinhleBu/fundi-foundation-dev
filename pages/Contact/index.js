import React, {Fragment} from 'react';
import Header from '../../components/header'
import PageTitleContact from '../../components/pagetitlecontact'
import Contactpage from '../../components/Contactpage'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Head from 'next/head'

const Contact =() => {
    return(
        <Fragment>
             <Head>
                <title>Contact</title>
                <meta name="Description" CONTENT="Contact FundiFoundation and find out more about our fund raising initiatives." />
                <meta name="robots" content="index,follow"/>
                <link
                    rel="canonical"
                    href="https://fundifoundation.org/Contact"
                    key="canonical"
                />
           
            </Head>
            <Header/>
            <PageTitleContact pageTitleContact={'Contact Us'} pagesub={'Contact'}/> 
            <Contactpage/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default Contact;

