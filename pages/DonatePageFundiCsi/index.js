import React, { Fragment } from 'react';
import Header from '../../components/header'
import PageTitleFundiCsi from '../../components/pagetitlefundicsi'
import DonateFundiCsi from '../../components/DonateFundiCsi'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Head from 'next/head'

const DonatePageFundiCsi = () => {
    return (
        <Fragment>
            <Head>
                <title>Donate</title>
            </Head>
            <Header />
            <PageTitleFundiCsi pageTitle={'Donate Now'} pagesub={'Donate'} />
            <DonateFundiCsi />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default DonatePageFundiCsi;
