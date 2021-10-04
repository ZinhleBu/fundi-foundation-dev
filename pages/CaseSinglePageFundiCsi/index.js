import React, {Fragment} from 'react';
import Header from '../../components/header'
import PageTitleFundiCsi from '../../components/pagetitlefundicsi'
import CaseSingleFundiCsi from '../../components/CaseSingleFundiCsi'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Head from 'next/head'

const CaseSinglePageFundiCsi =() => {
    return(
        <Fragment>
             <Head>
                <title>FundiCSI Details</title>
            </Head>
            <Header/>
            <PageTitleFundiCsi pageTitleFundiCsi={'Fundi CSI'} pagesub={'Fundi Corporate Social Investment'}/> 
            <CaseSingleFundiCsi/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default CaseSinglePageFundiCsi;
