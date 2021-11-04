import React, {Fragment} from 'react';
import Header from '../../components/header'
import PageTitleLeaders from '../../components/pagetitleleaders'
import CaseSingleLeaders from '../../components/CaseSingleLeaders'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Head from 'next/head'

const Leaders4Learners =() => {
    return(
        <Fragment>
             <Head>
                <title>Leaders4Learners Details</title>
            </Head>
            <Header/>
            <PageTitleLeaders pageTitleLeaders={'Leaders4Learners'} pagesub={'Unite 4 Education'}/> 
            <CaseSingleLeaders/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default Leaders4Learners;
