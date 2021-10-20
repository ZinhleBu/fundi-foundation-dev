import React, { Fragment } from 'react';
import Header from '../../components/header'
import PageTitleFund from '../../components/pagetitlefund'
import Donate12412 from '../../components/Donate12412'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Head from 'next/head'

const DonatePage12412 = () => {
    return (
        <Fragment>
            <Head>
                <title>Donate</title>
            </Head>
            <Header />
            <PageTitleFund pageTitle={'Donate Now'} pagesub={'Donate'} />
            <Donate12412 />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default DonatePage12412;
