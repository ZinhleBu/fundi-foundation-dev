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
                            {/* <div className="wpo-case-details-img">
                                <img src='images/R10.jpg' alt="" />
                            </div> */}
                            <div className="wpo-case-details-tab">
                                <Nav tabs>
                                    <NavItem>
                                        <NavLink
                                            className={classnames({ active: activeTab === '1' })}
                                            onClick={() => { toggle('1'); }}
                                        >
                                            Description
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            className={classnames({ active: activeTab === '2' })}
                                            onClick={() => { toggle('2'); }}
                                        >
                                            Donations
                                        </NavLink>
                                    </NavItem>

                                    {/* <NavItem>
                                        <NavLink
                                            className={classnames({ active: activeTab === '3' })}
                                            onClick={() => { toggle('3'); }}
                                        >
                                            Comments
                                        </NavLink>
                                    </NavItem> */}
                                </Nav>
                            </div>
                            <div className="wpo-case-details-text">
                                <TabContent activeTab={activeTab}>
                                    <TabPane tabId="1">
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="wpo-case-content">
                                                    <div className="wpo-case-text-top">
                                                        <h1>The Challenge</h1>
                                                        <div className="progress-section">
                                                            <div className="process">
                                                                <div className="progress">
                                                                    <div className="progress-bar">
                                                                        <div className="progress-value"><span>55.5</span>%</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <ul>

                                                            {/* <li><span>Donar:</span> 380</li> */}
                                                        </ul>
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
                                                            <CounterSection countclass={'wpo-counter-style-2'} />

                                                            <div>
                                                                <h1>Apply for Registration Fees Funding </h1>
                                                                <p>If you've applied for registration at a tertiary institution, and havee been accepted to study further, you can apply for funding here.</p>
                                                                <p>Please provide the following documents with your application.:</p>
                                                                <ul>
                                                                    <li>Acceptance letter reflecting the registration amount.</li>
                                                                    <li>Proof of registration (if available).</li>
                                                                    <li>ID Copy.</li>
                                                                    <li>Student fee account and proof of payment for those that made the payment by other personal means.</li>                                                            </ul>
                                                            </div>
                                                            <WorldSection worldclass={'wpo-world-area-2'} />

                                                        </div>
                                                    </div>

                                                    <List/>

                                                </div>
                                            </div>
                                        </div>
                                    </TabPane>
                                    <TabPane tabId="2">
                                        <form onSubmit={SubmitHandler} action="#">
                                            <div className="wpo-donations-amount">
                                                <h2>Your Donation</h2>
                                                <input type="text" className="form-control" name="text" id="text" placeholder="Enter Donation Amount" />
                                            </div>
                                            <div className="wpo-donations-details">
                                                <h2>Details</h2>
                                                <div className="row">
                                                    <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                                                        <input type="text" className="form-control" name="name" id="fname" placeholder="First Name" />
                                                    </div>
                                                    <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                                                        <input type="text" className="form-control" name="name" id="name" placeholder="Last Name" />
                                                    </div>
                                                    <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group clearfix">
                                                        <input type="email" className="form-control" name="email" id="email" placeholder="Email" />
                                                    </div>
                                                    <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                                                        <input type="text" className="form-control" name="Adress" id="Adress" placeholder="Adress" />
                                                    </div>
                                                    <div className="col-lg-12 col-12 form-group">
                                                        <textarea className="form-control" name="note" id="note" placeholder="Message"></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="wpo-doanation-payment">
                                                <h2>Choose Your Payment Method</h2>
                                                <div className="wpo-payment-area">
                                                    <div className="row">
                                                        <div className="col-12">
                                                            <div className="wpo-payment-option" id="open4">
                                                                <div className="wpo-payment-select">
                                                                    <ul>
                                                                        <li className="addToggle">
                                                                            <input id="add" type="radio" name="payment" value="30" />
                                                                            <label htmlFor="add">Payment By Card</label>
                                                                        </li>
                                                                        <li className="removeToggle">
                                                                            <input id="remove" type="radio" name="payment" value="30" />
                                                                            <label htmlFor="remove">Offline Donation</label>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div id="open5" className="payment-name">
                                                                    <ul>
                                                                        <li className="visa"><input id="1" type="radio" name="size" value="30" />
                                                                            <label htmlFor="1"><img src='images/checkout/img-1.png' alt="" /></label>
                                                                        </li>
                                                                        <li className="mas"><input id="2" type="radio" name="size" value="30" />
                                                                            <label htmlFor="2"><img src='images/checkout/img-2.png' alt="" /></label>
                                                                        </li>
                                                                        <li className="ski"><input id="3" type="radio" name="size" value="30" />
                                                                            <label htmlFor="3"><img src='images/checkout/img-3.png' alt="" /></label>
                                                                        </li>
                                                                        <li className="pay"><input id="4" type="radio" name="size" value="30" />
                                                                            <label htmlFor="4"><img src='images/checkout/img-4.png' alt="" /></label>
                                                                        </li>
                                                                        <a href="https://www.payfast.co.za/eng/process?cmd=_paynow&amp;receiver=16564521&amp;item_name=R10+goes+a+long+way&amp;amount=10.00&amp;return_url=https%3A%2F%2Fwww.fundifoundation.org&amp;cancel_url=https%3A%2F%2Fwww.fundifoundation.org"><img src="https://www.payfast.co.za/images/buttons/light-small-donate.png" width="165" height="36" alt="Buy" title="Buy Now with PayFast" /></a>

                                                                    </ul>
                                                                    <div className="contact-form form-style">
                                                                        <div className="row">
                                                                            <div className="col-lg-6 col-md-12 col-12">
                                                                                <label>Card holder Name</label>
                                                                                <input type="text" placeholder="" name="name" />
                                                                            </div>
                                                                            <div className="col-lg-6 col-md-12 col-12">
                                                                                <label>Card Number</label>
                                                                                <input type="text" placeholder="" id="card" name="card" />
                                                                            </div>
                                                                            <div className="col-lg-6 col-md-12 col-12">
                                                                                <label>CVV</label>
                                                                                <input type="text" placeholder="" name="CVV" />
                                                                            </div>
                                                                            <div className="col-lg-6 col-md-12 col-12">
                                                                                <label>Expire Date</label>
                                                                                <input type="text" placeholder="" name="date" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="submit-area">
                                                <button type="submit" className="theme-btn submit-btn">Donate Now</button>
                                            </div>
                                        </form>
                                    </TabPane>
                                    <TabPane tabId="3">
                                        <div className="wpo-blog-single-section">
                                            <div className="comments-area">
                                                <div className="comments-section">
                                                    <h3 className="comments-title">Comments</h3>
                                                    <ol className="comments">
                                                        <li className="comment even thread-even depth-1" id="comment-1">
                                                            <div id="div-comment-1">
                                                                <div className="comment-theme">
                                                                    <div className="comment-image"> <img src='images/blog-details/comments-author/img-1.jpg' alt="" /> </div>
                                                                </div>
                                                                <div className="comment-main-area">
                                                                    <div className="comment-wrapper">
                                                                        <div className="comments-meta">
                                                                            <h4>John Abraham <span className="comments-date">Octobor 28,2018 At 9.00am</span></h4>
                                                                        </div>
                                                                        <div className="comment-area">
                                                                            <p>I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, </p>
                                                                            <div className="comments-reply">
                                                                                <Link href="/CaseSinglePage"><a className="comment-reply-link"><i className="fa fa-reply" aria-hidden="true"></i><span>Reply</span></a></Link>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <ul className="children">
                                                                <li className="comment">
                                                                    <div>
                                                                        <div className="comment-theme">
                                                                            <div className="comment-image"> <img src='images/blog-details/comments-author/img-2.jpg' alt="" /></div>
                                                                        </div>
                                                                        <div className="comment-main-area">
                                                                            <div className="comment-wrapper">
                                                                                <div className="comments-meta">
                                                                                    <h4>Lily Watson <span className="comments-date">Octobor 28,2018 At 9.00am</span></h4>
                                                                                </div>
                                                                                <div className="comment-area">
                                                                                    <p>I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, </p>
                                                                                    <div className="comments-reply">
                                                                                        <Link href="/CaseSinglePage"><a className="comment-reply-link"><span><i className="fa fa-reply" aria-hidden="true"></i> Reply</span></a></Link>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <ul>
                                                                        <li className="comment">
                                                                            <div>
                                                                                <div className="comment-theme">
                                                                                    <div className="comment-image"><img src='images/blog-details/comments-author/img-3.jpg' alt="" /> </div>
                                                                                </div>
                                                                                <div className="comment-main-area">
                                                                                    <div className="comment-wrapper">
                                                                                        <div className="comments-meta">
                                                                                            <h4>John Abraham <span className="comments-date">Octobor 28,2018 At 9.00am</span></h4>
                                                                                        </div>
                                                                                        <div className="comment-area">
                                                                                            <p>I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, </p>
                                                                                            <div className="comments-reply">
                                                                                                <Link href="/CaseSinglePage"><a className="comment-reply-link"><span><i className="fa fa-reply" aria-hidden="true"></i> Reply</span></a></Link>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </li>
                                                                    </ul>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ol>
                                                </div>
                                            </div>
                                            <div className="comment-respond">
                                                <h3 className="comment-reply-title">Leave a Comment</h3>
                                                <form onSubmit={SubmitHandler} className="comment-form">
                                                    <div className="form-inputs">
                                                        <input placeholder="Name" type="text" />
                                                        <input placeholder="Email" type="email" />
                                                        <input placeholder="Website" type="url" />
                                                    </div>
                                                    <div className="form-textarea">
                                                        <textarea id="comment" placeholder="Write Your Comments..."></textarea>
                                                    </div>
                                                    <div className="form-submit">
                                                        <input id="submit" value="Reply" type="submit" />
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </TabPane>
                                </TabContent>

                            </div>
                        </div>
                    </div>
                    {/* <SidebarWrap /> */}
                </div>
            </div>
        </div>
    );
}

export default CaseSingleR10;




