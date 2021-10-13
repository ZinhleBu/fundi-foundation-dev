import React from 'react';

import GalleryFund from '../Gallery-Fund';
import Gallery2 from '../Gallery2';
import VideoPlayer1 from '../VideoPlayer1';


const CaseSingleFund = (props) => {

    return (
        <div className="wpo-case-details-area section-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-12">
                        <div className="wpo-case-details-wrap">
                            <div className="wpo-case-details-img">
                                <img src='images/event-details-makwena.jpg' alt="" />
                            </div>
                            <div className="wpo-case-details-text">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="wpo-case-content">
                                            <div className="wpo-case-text-top">
                                                <h2>#SavingTheClassOf2020 #Fundi12412</h2>
                                                <div className="case-b-text">
                                                    <p>Nearly 800 000 Matric learners were out of school for over 2 months due to the Covid19 lockdown. Learners from township and rural schools were seriously disadvantaged by the limited access and technologies which would have allowed teachers to remain in contact with them during the lockdown.</p>
                                                    <p>After schools opened for Grade 12, many learners are still struggling to catch up with their matric curriculum.</p>
                                                    <p>Fundi, together with Primestars invites you to be a part of our fundraising initiative to help us get the Class of 2020 to the finish line by donating any amount you can to the FundiFund12for12 Challenge.</p>
                                                </div>
                                                <Gallery2/> 
                                                <VideoPlayer1/>
                                           </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CaseSingleFund;




