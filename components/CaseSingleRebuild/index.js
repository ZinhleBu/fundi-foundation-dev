import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';
import Link from 'next/link'
import SidebarWrap from '../SidebarWrap'
import GalleryUnite from '../Gallery-Unite';
import VideoPlayer2 from '../VideoPlayer2';
import VideoPlayer3 from '../VideoPlayer3';
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
                                                    <p>The school was com-pletely ransacked, with looters taking everything from food and appliances to specialised computers and TVs designed to assist children with disabilities.</p>
                                                    <p>For many children in South Africa, school is so much more than just a place to learn. It is often where they receive their only nutritious meal of the day. It is a place of hope, long lasting friendships and big dreams.</p>
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




