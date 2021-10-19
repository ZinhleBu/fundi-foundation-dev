import React, {Fragment} from 'react';
import PrivacySection from "../../components/privacy";
import Head from 'next/head'
import Header from '../../components/header'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'

const PrivacyPage = (props) => {

    return (
        <Fragment>
        <Head>
           <title>FundiFoundation</title>
       </Head>
       <Header/>
       <PrivacySection/>
       <Footer/>
       <Scrollbar/>
   </Fragment>

    );
}

export default PrivacyPage;




