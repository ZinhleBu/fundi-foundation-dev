import React, { useState, useEffect, Fragment } from 'react';
// import Header from '../components/header'
import Hero3 from '../components/hero3'
import AboutSec from '../components/aboutsec'
import CaseSlide from '../components/case'
import Footer from '../components/footer'
import Scrollbar from '../components/scrollbar'
import Head from 'next/head'
import ImageSlide from '../components/imageSlider';
import Popup from '../components/popup'
import Link from 'next/link'
import dynamic from 'next/dynamic'

function HomePage() {
    
    const Header = dynamic(import("../components/header"));
    const Hero3 = dynamic(import("../components/hero3"));
    const CaseSlide = dynamic(import("../components/case"));

    const [timedPopup, setTimedPopup] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setTimedPopup(true);
        }, 0);
    }, []);

    return (
        <Fragment>
            <Head>
                <title>Fundi Foundation</title>
                <meta name="description" content="Enabling The Education Dreams of All South Africans" />
                <meta property="og:title" content="Fundi Foundation" />
                <meta name="robots" content="index,follow" />
                <meta charSet="UTF-8" />
                <meta name="keywords" content="Fundi, Foundation, donation, schools, loans, students, accommodation, devices" />
                <meta name="author" content="Fundi" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />

            </Head>
            <Header />
            <Hero3 />
            <CaseSlide />
            <AboutSec />
            <ImageSlide />
            <Footer />
            <Scrollbar />
            {/* <Popup trigger={timedPopup} setTrigger={setTimedPopup}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                                <h2>Apply for 2022 registration fees funding</h2>
                                <p></p>
                                <Link href="/RegistrationPage"><a className="theme-btn-s3" ><img src='/images/team/1.png' alt="" /> Apply </a></Link>
                        </div>
                    </div>
                </div>
            </Popup> */}
        </Fragment>
    )
};
export default HomePage;


