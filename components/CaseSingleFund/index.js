import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';
import Link from 'next/link'
import SidebarWrap from '../SidebarWrap'
import GalleryFund from '../Gallery-Fund';


const CaseSingleFund = (props) => {

    const SubmitHandler = (e) =>{
        e.preventDefault()
    }

    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
      if(activeTab !== tab) setActiveTab(tab);
    }

        return (
            <div className="wpo-case-details-area section-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-12">
                        <div className="wpo-case-details-wrap">
                            <div className="wpo-case-details-img">
                                <img src='images/event-details-makwena.jpg' alt=""/>
                            </div>
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
                                    {/* <NavItem>
                                        <NavLink
                                            className={classnames({ active: activeTab === '2' })}
                                            onClick={() => { toggle('2'); }}
                                        >
                                        Donations
                                        </NavLink>
                                    </NavItem> */}
{/* 
                                    <NavItem>
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
                                                    <h2>#SavingTheClassOf2020 #Fundi12412</h2>
                                                    <div className="progress-section">
                                                        <div className="process">
                                                            <div className="progress">
                                                                <div className="progress-bar">
                                                                    <div className="progress-value"><span>65.5</span>%</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* <ul>
                                                        <li><span>Raised:</span> R7,000.00</li>
                                                        <li><span>Goal:</span> R8,000.00</li>
                                                        <li><span>Donar:</span> 380</li>
                                                    </ul> */}
                                                    <div className="case-b-text">
                                                        <p>Nearly 800 000 Matric learners were out of school for over 2 months due to the Covid19 lockdown. Learners from township and rural schools were seriously disadvantaged by the limited access and technologies which would have allowed teachers to remain in contact with them during the lockdown.</p>
                                                        <p>After schools opened for Grade 12, many learners are still struggling to catch up with their matric curriculum.</p>
                                                        <p>Fundi, together with Primestars invites you to be a part of our fundraising initiative to help us get the Class of 2020 to the finish line by donating any amount you can to the FundiFund12for12 Challenge.</p>
                                                    </div>
                                                    <GalleryFund/>
                                                    {/* <div className="case-bb-text">
                                                        <h3>We want to ensure the education for the kids.</h3>
                                                        <p>These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure.</p>
                                                        <ul>
                                                            <li>The wise man therefore always holds in these matters.</li>
                                                            <li>In a free hour, when our power of choice and when nothing.</li>
                                                            <li>Else he endures pains to avoid worse pains.</li>
                                                            <li>We denounce with righteous indignation and dislike men. </li>
                                                            <li>Which is the same as saying through.</li>
                                                        </ul>
                                                    </div> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabPane>
                                <TabPane tabId="2">
                                    <form onSubmit={SubmitHandler} action="#">
                                        <div className="wpo-donations-amount">
                                            <h2>Your Donation</h2>
                                            <input type="text" className="form-control" name="text" id="text" placeholder="Enter Donation Amount"/>
                                        </div>
                                        <div className="wpo-donations-details">
                                            <h2>Details</h2>
                                            <div className="row">
                                                <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                                                    <input type="text" className="form-control" name="name" id="fname" placeholder="First Name"/>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                                                    <input type="text" className="form-control" name="name" id="name" placeholder="Last Name"/>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group clearfix">
                                                    <input type="email" className="form-control" name="email" id="email" placeholder="Email"/>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                                                    <input type="text" className="form-control" name="Adress" id="Adress" placeholder="Adress"/>
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
                                                                        <input id="add"  type="radio" name="payment" value="30"/>
                                                                        <label htmlFor="add">Payment By Card</label>
                                                                    </li>
                                                                    <li className="removeToggle">
                                                                        <input id="remove" type="radio" name="payment" value="30"/>
                                                                        <label htmlFor="remove">Offline Donation</label>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div id="open5" className="payment-name">
                                                                <ul>
                                                                    <li className="visa"><input id="1" type="radio" name="size" value="30"/>
                                                                        <label htmlFor="1"><img src='images/checkout/img-1.png' alt=""/></label>
                                                                    </li>
                                                                    <li className="mas"><input id="2" type="radio" name="size" value="30"/>
                                                                        <label htmlFor="2"><img src='images/checkout/img-2.png' alt=""/></label>
                                                                    </li>
                                                                    <li className="ski"><input id="3" type="radio" name="size" value="30"/>
                                                                        <label htmlFor="3"><img src='images/checkout/img-3.png' alt=""/></label>
                                                                    </li>
                                                                    <li className="pay"><input id="4" type="radio" name="size" value="30"/>
                                                                        <label htmlFor="4"><img src='images/checkout/img-4.png' alt=""/></label>
                                                                    </li>
                                                                </ul>
                                                                <div className="contact-form form-style">
                                                                    <div className="row">
                                                                        <div className="col-lg-6 col-md-12 col-12">
                                                                            <label>Card holder Name</label>
                                                                            <input type="text" placeholder="" name="name"/>
                                                                        </div>
                                                                        <div className="col-lg-6 col-md-12 col-12">
                                                                            <label>Card Number</label>
                                                                            <input type="text" placeholder="" id="card" name="card"/>
                                                                        </div>
                                                                        <div className="col-lg-6 col-md-12 col-12">
                                                                            <label>CVV</label>
                                                                            <input type="text" placeholder="" name="CVV"/>
                                                                        </div>
                                                                        <div className="col-lg-6 col-md-12 col-12">
                                                                            <label>Expire Date</label>
                                                                            <input type="text" placeholder="" name="date"/>
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
                                                                <div className="comment-image"> <img src='images/blog-details/comments-author/img-1.jpg' alt=""/> </div>
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
                                                                        <div className="comment-image"> <img src='images/blog-details/comments-author/img-2.jpg' alt=""/></div>
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
                                                                                <div className="comment-image"><img src='images/blog-details/comments-author/img-3.jpg' alt=""/> </div>
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
                                                    <input placeholder="Name" type="text"/>
                                                    <input placeholder="Email" type="email"/>
                                                    <input placeholder="Website" type="url"/>
                                                </div>
                                                <div className="form-textarea">
                                                    <textarea id="comment" placeholder="Write Your Comments..."></textarea>
                                                </div>
                                                <div className="form-submit">
                                                    <input id="submit" value="Reply" type="submit"/>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </TabPane>
                            </TabContent>
                             
                            </div>
                        </div>
                    </div>
                    {/* <SidebarWrap/> */}
                </div>
            </div>
        </div>
            );
    }
    
    export default CaseSingleFund;
          
          
          
          
