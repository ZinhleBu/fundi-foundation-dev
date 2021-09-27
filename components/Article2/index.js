import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';
import SidebarWrap from '../SidebarWrap'


const Article2 = (props) => {

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
                                <img src='images/event/img-1-sakhile.jpg' alt="" />
                                <div className="thumb-text">
                                    <span>25</span>
                                    <span>JUN</span>
                                </div>
                            </div>
                            <div className="wpo-event-details-text">
                                <h2>Struggling Sakhile’s academic dreams come true:</h2>
                                <p>From sleeping in a park at night, a young student is now able to enjoy full-time tertiary studies thanks to a generous bursary</p>
                                <p>WHEN homeless student Sakhile Nsibande was interviewed on eNCA recently about his Covid-19 lockdown experience, and how he wished he could continue his studies, he never imagined how those three minutes would change his life.</p>
                                <p>A Fundi employee watching the story alerted the team and they launched a massive social media search to find him.
                                    Three weeks later and Sakhile has just moved into his new student accommodation, with his food, airtime and data all sponsored by Fundi.
                                </p>
                                <p>He is now ready and able to pursue his full-time studies after years of challenges.
                                    Fundi is an education finance and fund management solution organisation.
                                </p>
                                <p>Being the son of a single mom in rural Kwanibela near Hluhluwe, Nsibande has always dreamed of studying economics.

                                    After matriculating in 2011, he wanted to apply at Unisa, but discovered he couldn’t register because he did not have an ID document.
                                </p>
                                <p>

                                    There was also no money to finance his studies.

                                    Not wanting to burden his family, Nsibande tried to support himself while saving to register for the course.

                                    Over the next five years he worked as a petrol attendant, on construction sites and doing whatever piece jobs he could find.

                                </p>
                                <p>Throughout this period, he kept applying to study and was not successful. He was finally accepted at Unisa last year.

                                    He applied for NSFAS funding and used his savings to pay for the first two modules of his qualification – business management and economics.
                                </p>
                                <p>But he soon found himself struggling, unable to study and support himself at the same time.

                                    After defaulting on his rent, his landlord evicted him, but the young man was determined to write his exams.

                                    He lived on the street and slept in a park at night.
                                </p>
                                <p>Despite not being able to study, he passed the two modules. He received NSFAS funding in January and registered for more modules.
                                    ‘When we heard about Sakhile and how he has continued to pursue his dream of studying despite everything, we immediately wanted to help,’ said Fundi CMO Mala Suriah.
                                </p>
                                <h4>‘We were touched and inspired by his resilience and determination. His story also speaks directly to our own internal response to
                                    Covid-19, namely a campaign we’ve entitled ‘challenge accepted’.
                                </h4>
                                <p>This is an invitation to all of our team members and stakeholders to step-up and make an extraordinary contribution during this time.’

                                    Finding Nsibande became the next immediate challenge for the team.

                                    Without a cellphone or regular internet access, Fundi launched a social media search to make contact.
                                </p>
                                <h4>‘We were finally able to trace him to a shelter and offer him a bursary for accommodation, food, data and airtime for the duration of his studies,’ said Suriah.

                                </h4>



                            </div>
                            {/* <div className="wpo-event-details-wrap">
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
                            </div> */}
                        </div>
                    </div>
                    <SidebarWrap />

                </div>
            </div>
        </div>

    );
}

export default Article2;




