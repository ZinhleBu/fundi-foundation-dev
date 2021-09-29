import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';
import SidebarWrap from '../SidebarWrap'


const Article3 = (props) => {

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
                                <img src='images/event/img-1-gs-2.jpg' alt="" />
                                <div className="thumb-text">
                                    <span>30</span>
                                    <span>JUL</span>

                                </div>
                            </div>
                            <div className="wpo-event-details-text">
                                <h2>Uncertain future for Golden Steps School in KZN destroyed by looting:</h2>
                                <p>
                                    Durban: Golden Steps School for the intellectually challenged opened in 1979 by volunteers. Today, the school management is uncertain about the future of teaching and learning after the property was damaged and looted.
                                </p>
                                <p>
                                    The school currently caters to more than 200 pupils and it employs 22 teachers.
                                </p>
                                <p>
                                    "Initially, classes began in the basement of a home in Watsonia in Tongaat with 12 pupils. Thereafter, they were held in the basement of the nearby Chelmsford Hotel. As the enrolment grew to 36, the school moved to the Hindu Patshala Temple in Fairbreeze. As the enrolment numbers grew, classes were then held in a wooden structure in Verulam and in 1985 it was converted into a brick structure, said Shireen Hariparsad, the head of the senior phase.

                                </p>
                                <p>
                                    During the unrest, 25 sponsored computers from the school's computer centre and three television sets were stolen. The looters also vandalised the skills room.

                                </p>
                                <p>
                                    "The kitchen, where we prepare one hot meal a day for pupils, was destroyed, and the appliances, including the fridge, microwave, kettle and industrial cooker, were stolen. They also stole the stored food, dishes, the tools from the agriculture centre, the equipment from the woodwork room and the hair salon where we train pupils."
                                </p>
                                <p>
                                    Hariparsad said the two school buses that they recently acquired from the Department of Education were damaged and parts were stolen. Fuel from the bus tanks was extracted. Hariparsad said the damages amounted to more than R100 000.

                                </p>
                                <p>
                                    She said this would impact teaching and learning.
                                </p>
                                <p>
                                    "We admit pupils with multiple disabilities and we currently have 217 learners. They are placed in different classes according to their capabilities. Here, they acquire speech and occupational therapy and skills development. We have nurtured artists, environmentalists, office admin assistants, and hair, nail and beauty assistants.
                                </p>
                                <p>
                                    "Our pupils excel in hospitality skills, woodwork, building, maintenance, metalwork, needlework, and agriculture. Apart from their disabilities, they also come from impoverished backgrounds. We provide them with hot meals and transport to and from home. Although Golden Steps is a public school and it receives a subsidy from the Department of Education, the subsidy is not enough to sustain the school’s day-to-day operations. The looting and damage will subsequently cripple the culture of learning and teaching at the school."
                                </p>
                                <p>
                                    Hariparsad said the school was reliant on sponsorships and donations from non-profit organisations and the public.
                                </p>
                                <p>
                                    Due to the pandemic and the lockdowns, they recently embarked on hamper drives to assist the pupils' families.
                                </p>
                                <p>
                                    She said the school always maintained and upheld its standard of education.
                                </p>
                                <p>
                                    "Our vision is to ensure our learners are provided with quality education and skills, so that they become responsible and independent individuals. However, today the school does not have the basic necessities to pursue that vision. We may have to close until the infrastructure is repaired, rebuilt or replaced."
                                </p>
                                <p>
                                    Hariparsad said the matter was reported to the Department of Education and a decision was reopened once all the damages were repaired.
                                </p>
                                <p>
                                    Thandekile Shandu, who has an 11-year-old child at the school, said: "When my daughter was unable to cope in mainstream school, I was lucky to find Golden Steps which is near my home. My daughter has been here since 2019. The school has been so helpful in teaching and helping her to develop academically. It hurts and it's sad that people would destroy and steal from a school meant for special kids. I hope they are caught."
                                </p>
                                <p>
                                    The Department of Education did not comment at the time of publication.
                                </p>
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

export default Article3;




