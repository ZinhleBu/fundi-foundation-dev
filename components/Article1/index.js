import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';
import SidebarWrap from '../SidebarWrap'


const Article1 = (props) => {

    const SubmitHandler = (e) => {
        e.preventDefault()
    }

    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    return (
        <div className="wpo-event-details-area section-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-8">
                        <div className="wpo-event-item">
                            <div className="wpo-event-img">
                                <img src='images/event-details2-ayanda.jpg' alt="" />
                                <div className="thumb-text">
                                    <span>25</span>
                                    <span>NOV</span>
                                </div>
                            </div>
                            <div className="wpo-event-details-text">
                                <h2>Ayandamantombazane Mhlongo writes:</h2>
                                <p>The job market is extremely competitive and skilled employees are high in demand. Degrees are required for a wide range of careers such as Medicine, Education, Engineering, Accounting and Law.</p>
                                <p>A university education will help the youth succeed in today's workforce and establish an enjoyable career of their choice.</p>
                                <p>This past week, students took to the streets to protest over a number of issues, including the financial exclusion of some 6,000 students due to historical debt.  In Solidarity with students across the country The R10 Goes A Long Way Initiative strives to assist with the current plight of students in South Africa who are currently unable to attend University due to their financial difficulties. This initiative is set to assist 50 students to be able to register for University & finally get a chance to participate in today’s economy.  </p>
                                <p>The impact of the R10 Goes A Long Way initiative will allow 50 students who were financially excluded in the year of 2021 to register to study further at University.</p>
                            </div>
                            <div className="wpo-event-details-wrap">
                                <div className="wpo-event-details-tab">
                                    <Nav tabs>
                                        <NavItem>
                                            <NavLink
                                                className={classnames({ active: activeTab === '1' })}
                                                onClick={() => { toggle('1'); }}
                                            >
                                                Donations
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                className={classnames({ active: activeTab === '2' })}
                                                onClick={() => { toggle('2'); }}
                                            >
                                                Map Location
                                            </NavLink>
                                        </NavItem>

                                        <NavItem>
                                            <NavLink
                                                className={classnames({ active: activeTab === '3' })}
                                                onClick={() => { toggle('3'); }}
                                            >
                                                Contact Us
                                            </NavLink>
                                        </NavItem>
                                    </Nav>
                                </div>
                                <div className="wpo-event-details-content">
                                    <TabContent activeTab={activeTab}>
                                        <TabPane tabId="1" id="Schedule">
                                            <p>The funds will be raised using a crowd funding technique aimed at raising small amounts of money from a large number of people. This will ensure that students who are financially excluded from University get an equal opportunity and level playing field in order to attend and graduate which is abasic Human Right.</p>
                                            <ul>
                                                <li> <h5>Apr 21, 2021 - R 1 090.00</h5>
                                                    "Thank you for starting this amazing initiative!" - Wicked Donuts.</li>
                                                <li><h5>Mar 19, 2021 - R 100.00 </h5>
                                                    ""Education is the passport to the future, for tomorrow belongs to those who prepare for it today" - Malcolm X" - Winnie </li>
                                                <li><h5> Mar 18, 2021 - R 200.00 </h5>
                                                    "It’s time we all played our part. We cannot look to government to solve the mess they themselves have created." - Kgomotso</li>
                                               
                                            </ul>
                                        </TabPane>
                                        <TabPane tabId="2">
                                            <div className="contact-map enent-map">
                                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.9147703055!2d-74.11976314309273!3d40.69740344223377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sbd!4v1547528325671" allowfullscreen></iframe>
                                            </div>
                                        </TabPane>
                                        <TabPane tabId="3">
                                            <div className="event-contact">
                                                <div className="wpo-donations-details">
                                                    <form onSubmit={SubmitHandler} id="contact-form">
                                                        <div className="row">
                                                            <div className="col-lg-12 col-md-12 col-sm-12 col-12 form-group">
                                                                <input type="text" className="form-control" name="name" id="name" placeholder="Your Name*" />
                                                            </div>
                                                            <div className="col-lg-12 col-md-12 col-sm-12 col-12 form-group clearfix">
                                                                <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" />
                                                            </div>
                                                            <div className="col-lg-12 col-12 form-group">
                                                                <textarea className="form-control" name="note" id="note" placeholder="Massage"></textarea>
                                                            </div>
                                                            <div className="submit-area col-lg-12 col-12">
                                                                <button type="submit" className="theme-btn submit-btn">Submit Now</button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </TabPane>
                                    </TabContent>
                                </div>
                            </div>
                        </div>
                    </div>
                    <SidebarWrap />

                </div>
            </div>
        </div>

    );
}

export default Article1;




