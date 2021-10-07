import React, {Fragment} from 'react';
import Header from '../../components/header'
import PageTitleRegiser from '../../components/pagetitleregister'
import Registration from '../../components/Registration'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Head from 'next/head'

const RegistrationPage =() => {
    return(
        <Fragment>
             <Head>
                <title>Register for 2022 Funding</title>
            </Head>
            <Header/>
            <PageTitleRegiser pageTitleRegister={'Register for 2022 Funding'} pagesub={'Register'}/> 
            <Registration/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default RegistrationPage;
