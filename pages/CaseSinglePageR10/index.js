import React, { Fragment, useEffect } from 'react';
import { useRouter } from 'next/router'
import Header from '../../components/header'
import PageTitleR10 from '../../components/pagetitleR10'
import CaseSingleR10 from '../../components/CaseSingleR10'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Head from 'next/head'

const CaseSinglePageR10 = () => {

    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/R10GoesALongWay');
        }, 0)
    }, [])
    return (
        <Fragment>
            <Head>
                <title>#R10GoesALongWay</title>
                <meta name="Description" CONTENT="The initiative went on to raise over R2 million in 5 days to help the most deserving students with registration fees, giving  them access to education." />
                <meta name="keywords" content="R10GoesALongWay, #dumacollective, donations, lasizwe, bursary, loans, Fundi, Fundi Foundation" />
                <meta name="author" content="#10 Goes A long Way" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="robots" content="index,follow" />
                <link
                    rel="canonical"
                    href="https://fundifoundation.org/R10GoesALongWay"
                    key="canonical"
                />
            </Head>
            <Header />
            <PageTitleR10 pageTitleR10={'#R10GoesALongWay'} pagesub={'Enabling the dreams of all South Africans'} />
            <CaseSingleR10 />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default CaseSinglePageR10;
