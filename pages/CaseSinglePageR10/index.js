import React, {Fragment} from 'react';
import Header from '../../components/header'
import PageTitleR10 from '../../components/pagetitleR10'
import CaseSingleR10 from '../../components/CaseSingleR10'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Head from 'next/head'

const CaseSinglePageR10 =() => {
    return(
        <Fragment>
             <Head>
                <title>#R10GoesALongWay</title>
            </Head>
            <Header/>
            <PageTitleR10 pageTitleR10={'#R10GoesALongWay'} pagesub={'Enabling the dreams of all South Africans'}/> 
            <CaseSingleR10/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default CaseSinglePageR10;
