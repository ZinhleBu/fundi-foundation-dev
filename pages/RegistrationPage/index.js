import React, { Fragment, useState, useEffect } from 'react';
import Header from '../../components/header'
import PageTitleRegiser from '../../components/pagetitleregister'
import Registration from '../../components/Registration'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Popup from '../../components/popup'
import Link from 'next/link'
import Head from 'next/head'

const RegistrationPage = () => {
   
    return (
        <Fragment>
            <Head>
                <title>Apply for 2022 Funding</title>
            </Head>
            <Header />
            <PageTitleRegiser pageTitleRegister={'Apply for 2022 Funding'} pagesub={'Apply'} />
            <Registration />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default RegistrationPage;
