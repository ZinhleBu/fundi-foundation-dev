import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';
import Link from 'next/link'
import SidebarWrap from '../SidebarWrap'
import CounterSection from '../../components/counter'
import AdvisorySection from '../advisoryboard'
import Gallery from '../Gallery';
import WorldSection from '../world';
import List from '../beneficiaries';
const CaseSingleR10 = (props) => {

    const SubmitHandler = (e) => {
        e.preventDefault()
    }

    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

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
                                                <h1>The Challenge</h1>
                                                <div className="case-b-text">
                                                    <p>
                                                        Over the years we have witnessed an exponential growth in higher education fees prohibiting thousands of Black students’ access. This problem saw the rise of student protests like the #FeesMustFall movement that began in 2015. Since 2015, there have been various advocacy related activities by students to make higher education accessible. In the beginning of 2021, we witnessed again students protest all over the country over the following challenges:
                                                    </p>
                                                    <p>
                                                        ▪ Historical debt: prohibiting them from graduating, receiving the qualification and or registering for the new academic year.</p>
                                                    <p>
                                                        ▪ Registration fees: not affording registration fees excludes deserving students from being allowed to study towards their dream qualification: and </p>
                                                    <p>
                                                        ▪ Increase of fees: Data shows that 70% of students at some point during the academic year cannot afford to buy food, 68% are unable to afford student materials, and 62% feel they could not afford to pay to participate in campus-based social and academic activities.
                                                    </p>
                                                </div>
                                                <AdvisorySection />
                                                <div className="case-bb-text">
                                                    <h1>#R10GoesALongWay - History</h1>
                                                    <h3>How and why #R10GoesALongWay started?</h3>
                                                    <p>
                                                        In March this year, students were unable to register due to a lack of funding. The protests inspired social media celebrity, Lasizwe Dambuza and friends into action and the #R10 Goes a long Way campaign was started – first raising R38 000 between the four friends, Takkies Nkateko, Sibu Mabena, Ayanda Mhlongo.
                                                    </p>
                                                    <p>
                                                        The initiative went on to raise over R2 million in 5 days to help the most deserving students with registration fees, giving  them access to education. FundiFund was asked to get involved – and of the 19 000 funding applications received, we were able to fund the registration fees of 106 student’s of the 161 selected from the first draw.
                                                    </p>
                                                    <p>
                                                        On 13 March Sibu Mabena, Ayanda Mhlongo ,Lasizwe Dambuza and Nkateko Dinwiddy deposited R38 000 into the Duma Investment FNB, Account Number: 62859284152 Cheque Account to kick start #R10GoesALongWay to help students. In 16 hours... YOU ALL HAVE TURNED THAT INTO R200 000
                                                    </p>
                                                    <Gallery />
                                                    <div
                                                        className="col-12 col-md-8"
                                                        style={{
                                                            marginTop: "20px",
                                                            marginBottom: "20px",
                                                            posiion: "relative"
                                                        }}>
                                                        <h1>List of Beneficiaries</h1>
                                                        <p>To view the list of all the beneficiaries of the #10GoesA LongWay campaign, clickon the button below:</p>
                                                        <List />
                                                    </div>
                                                    <CounterSection countclass={'wpo-counter-style-2'} />
                                                    <div>
                                                        <h1>Register for Registration Fees Funding </h1>
                                                        <p>If you've applied for registration at a tertiary institution, and havee been accepted to study further, you can apply for funding here.</p>
                                                        <p>Please provide the following documents with your application.:</p>
                                                        <ul>
                                                            <li>Acceptance letter reflecting the registration amount.</li>
                                                            <li>Proof of registration (if available).</li>
                                                            <li>ID Copy.</li>
                                                            <li>Student fee account and proof of payment for those that made the payment by other personal means.</li>
                                                        </ul>
                                                    </div>
                                                    <WorldSection worldclass={'wpo-world-area-2'} />
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

export default CaseSingleR10;




