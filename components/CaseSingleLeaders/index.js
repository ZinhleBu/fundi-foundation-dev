import React from 'react';
import GalleryLeaders from '../Gallery-Leaders';
import Gallery4 from '../Gallery4';
import VideoPlayer from '../VideoPlayer';
import VideoPlayer4 from '../VideoPlayer4';


const CaseSingleLeaders = (props) => {

    return (
        <div className="wpo-case-details-area section-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-12">
                        <div className="wpo-case-details-wrap">
                            <div className="wpo-case-details-img">
                                <img src='images/event-details-leaders.png' alt="" />
                            </div>
                            <div className="wpo-case-details-text">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="wpo-case-content">
                                            <div className="wpo-case-text-top">
                                                <h2>Leaders 4 Learners</h2>
                                                <div className="case-b-text">
                                                    <p>For over 25 years Fundi has provided education funding and fund administration services to South Africans looking to further their career dreams. While as a business, we have successfully enabled over 6 million dreams, there are still thousands of students who are turned away because their guardians do not meet the criteria for study loans. It is for this reason we had set up FundiFund - a fund raising initiative to assist financially excluded students and help them pursue their education dreams.</p>
                                                    <br />
                                                <br />
                                                    <VideoPlayer />
                                                    <br />
                                                <br />
                                                    <p>In March this year, students were unable to register due to a lack of funding. The protests inspired social media celebrity, Lasizwe Dambuza and friends into action and the #R10 Goes a long Way campaign was started - raising over R2 million in 5 days to help the most deserving students with tuition fees. </p>
                                                    <p>FundiFund was asked to get involved – and of the 19 000 funding applications received, we were able to fund the registration fees of 132 student’s of the 161 selected from the first draw – while the others had to be turned away. FundiFund is calling on business leaders to Unite for Education with the LEADERS4LEARNERS Campaign on Nelson Mandela Day to honour Madiba’s passion for education. Funds raised will go a long way to help us provide funding for students over their 3 years of study. </p>
                                                </div>
                                                <br />
                                                <Gallery4/>
                                                <br />
                                                <VideoPlayer4 />
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

export default CaseSingleLeaders;




