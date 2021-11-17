import React, { useState, useEffect, Fragment } from 'react';
import Header from '../components/header'
import Hero3 from '../components/hero3'
import AboutSec from '../components/aboutsec'
import CaseSlide from '../components/case'
import Footer from '../components/footer'
import Scrollbar from '../components/scrollbar'
import Head from 'next/head'
import ImageSlide from '../components/imageSlider';
import Popup from '../components/popup'
import Link from 'next/link'
function HomePage() {

    const [timedPopup, setTimedPopup] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setTimedPopup(true);
        }, 8000);
    }, []);

    return (
        <Fragment>
            <Head>
                <title>FundiFoundation</title> 
            </Head>
            <Header />
            <Hero3 />
            <CaseSlide />
            <AboutSec />
            <ImageSlide />
            <Footer />
            <Scrollbar />
            <Popup trigger={timedPopup} setTrigger={setTimedPopup}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                                <h2>Apply for 2022 registration fees funding</h2>
                                <Link href="/RegistrationPage"><a className="theme-btn-s3" ><img src='/images/team/1.png' alt="" /> Apply </a></Link>
                        </div>
                    </div>
                </div>
            </Popup>
        </Fragment>
    )
};
export default HomePage;


