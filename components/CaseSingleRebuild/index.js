import React from 'react';
import Link from 'next/link'
import VideoPlayer2 from '../VideoPlayer2';
import Gallery3 from '../Gallery3';

const CaseSingleLeaders = (props) => {

    return (
        <div className="wpo-case-details-area section-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-12">
                        <div className="wpo-case-details-wrap">
                            <div className="wpo-case-details-text">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="wpo-case-content">
                                            <div className="wpo-case-text-top">
                                                <h2>#Unite4Schools | Save Our Schools</h2>
                                                <div className="case-b-text">
                                                    <p>FundiFund and Save the Children SA is calling on business leaders to Unite for Education and help us Rebuild our schools and rebuild the hope young people have in grown ups.</p>
                                                    <p>Funds raised will go a long way to help us get students back to school.At least 139 schools were looted and vandalised during last month’s unrest. Among the schools that lost everything was Golden Steps, a special needs school, in Verulam, KZN.</p>
                                                    <p>The school was completely ransacked, with looters taking everything from food and appliances to specialised computers and TVs designed to assist children with disabilities.</p>
                                                    <p>For many children in South Africa, school is so much more than just a place to learn. It is often where they receive their only nutritious meal of the day. It is a place of hope, long lasting friendships and big dreams.</p>
                                                    <h2>FundiCSI | Corporate Social Investment</h2>
                                                    <p>
                                                        By 2019, through a small CSI budget and employee contributions, Fundi was already making a significant impact through student bursaries, financial commitments to institutions as well as contributions to Bhuko Bhami Community Centre and Sibonile School for the Blind.
                                                    </p>
                                                    <p> 
                                                        Doing Good is good business, and due to our ethos of doing more to enable more learning as well as being confronted by the challenges students face in getting access to education, Fundi made a strategic decision to establish Fundi Foundation as a long-term commitment to enabling education dreams and making an impactful difference in society. FundiFoundation is a universe of all things that enable education and learning for those who can’t help themselves.
                                                    </p>
                                                    <br></br>
                                                    
                                                    <div
                                                        style={{
                                                            position: "relative",
                                                            left: "40%",
                                                            marginBottom: "30px"
                                                        }}
                                                        className="btns">
                                                        <Link href="/DonatePageUnite4Schools">
                                                            <a className="theme-btn">Donate Now</a>
                                                        </Link>
                                                    </div>
                                                    <Gallery3/>
                                                    <VideoPlayer2 />
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
        </div>
    );
}

export default CaseSingleLeaders;




