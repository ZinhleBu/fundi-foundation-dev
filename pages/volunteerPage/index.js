import React, {Fragment} from 'react';
import Header from '../../components/header'
import PageTitleRegiser from '../../components/pagetitleregister'
import Volunteer from '../../components/Volunteer'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Head from 'next/head'

const VolunteerPage =() => {
    return(
        <Fragment>
             <Head>
                <title>Register for 2022 Funding</title>
            </Head>
            <Header/>
            <PageTitleRegiser pageTitleRegister={'Register for 2022 Funding'} pagesub={'Register'}/> 
            <Volunteer/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default VolunteerPage;
