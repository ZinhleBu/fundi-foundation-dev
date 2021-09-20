
import React, { Component } from 'react'
import Link from 'next/link'

class Casesection extends Component {
    render() {
        const ClickHandler = () =>{
            window.scrollTo(10, 0);
         }
        return (
          <div className="wpo-case-area-2 section-padding">
              <div className="container">
                  <div className="row">
                      <div className="col-12">
                          <div className="wpo-section-title">
                              <span>Our Causes</span>
                              <h2>Popular Causes What You Should Know</h2>
                          </div>
                      </div>
                  </div>
                  <div className="wpo-case-wrap">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 custom-grid col-12">
                            <div className="wpo-case-item">
                                <div className="wpo-case-img">
                                    <img src='images/case/img-1.png' alt=""/>
                                </div>
                                <div className="wpo-case-content">
                                    <div className="wpo-case-text-top">
                                        <h2>#R10 Goes A long Way</h2>
                                        <div className="progress-section">
                                            <div className="process">
                                                <div className="progress">
                                                    <div className="progress-bar">
                                                        <div className="progress-value"><span>65.5</span>%</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <ul>
                                            <li><span>Raised:</span> R 2 192 462.58</li>
                                            <li><span>Funds payed::</span> R 872 462.58</li>
                                        </ul>
                                    </div>
                                    <div className="case-btn">
                                        <ul>
                                            <li><Link onClick={ClickHandler} href="/CaseSinglePageR10"><a>Learn More</a></Link></li>
                                            <li><Link onClick={ClickHandler} href="/DonatePage"><a>Donate Now</a></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 custom-grid col-12">
                            <div className="wpo-case-item">
                                <div className="wpo-case-img">
                                    <img src='images/case/img-2.png' alt=""/>
                                </div>
                                <div className="wpo-case-content">
                                    <div className="wpo-case-text-top">
                                        <h2>#RebuildSA</h2>
                                        <div className="progress-section">
                                            <div className="process">
                                                <div className="progress">
                                                    <div className="progress-bar">
                                                        <div className="progress-value"><span>40.5</span>%</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <ul>
                                            <li><span>Raised:</span> $7,000.00</li>
                                            <li><span>Donated:</span> $8,000.00</li>
                                        </ul>
                                    </div>
                                    <div className="case-btn">
                                        <ul>
                                            <li><Link onClick={ClickHandler} href="/CaseSinglePageRebuild"><a>Learn More</a></Link></li>
                                            <li><Link onClick={ClickHandler} href="/DonatePage"><a>Donate Now</a></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 custom-grid col-12">
                            <div className="wpo-case-item">
                                <div className="wpo-case-img">
                                    <img src='images/case/img-3.png' alt=""/>
                                </div>
                                <div className="wpo-case-content">
                                    <div className="wpo-case-text-top">
                                        <h2>Leaders4Learners</h2>
                                        <div className="progress-section">
                                            <div className="process">
                                                <div className="progress">
                                                    <div className="progress-bar">
                                                        <div className="progress-value"><span>80.5</span>%</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <ul>
                                            <li><span>Raised:</span> $7,000.00</li>
                                            <li><span>Goal:</span> $8,000.00</li>
                                        </ul>
                                    </div>
                                    <div className="case-btn">
                                        <ul>
                                            <li><Link onClick={ClickHandler} href="/CaseSingleLeaders"><a>Learn More</a></Link></li>
                                            <li><Link onClick={ClickHandler} href="/DonatePage"><a>Donate Now</a></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>    
                        </div>
                        <div className="col-lg-4 col-md-6 custom-grid col-12">
                            <div className="wpo-case-item">
                                <div className="wpo-case-img">
                                    <img src='images/case/img-4.png' alt=""/>
                                </div>
                                <div className="wpo-case-content">
                                    <div className="wpo-case-text-top">
                                        <h2>Fundi Fund</h2>
                                        <div className="progress-section">
                                            <div className="process">
                                                <div className="progress">
                                                    <div className="progress-bar">
                                                        <div className="progress-value"><span>50.5</span>%</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <ul>
                                            <li><span>Raised:</span> $7,000.00</li>
                                            <li><span>Goal:</span> $8,000.00</li>
                                        </ul>
                                    </div>
                                    <div className="case-btn">
                                        <ul>
                                            <li><Link onClick={ClickHandler} href="/CaseSingleFund"><a>Learn More</a></Link></li>
                                            <li><Link onClick={ClickHandler} href="/DonatePage"><a>Donate Now</a></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>    
                        </div>
                        <div className="col-lg-4 col-md-6 custom-grid col-12">
                            <div className="wpo-case-item">
                                <div className="wpo-case-img">
                                    <img src='images/case/img-5.png' alt=""/>
                                </div>
                                <div className="wpo-case-content">
                                    <div className="wpo-case-text-top">
                                        <h2>Fundi Capital</h2>
                                        <div className="progress-section">
                                            <div className="process">
                                                <div className="progress">
                                                    <div className="progress-bar">
                                                        <div className="progress-value"><span>90.5</span>%</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <ul>
                                            <li><span>Raised:</span> $7,000.00</li>
                                            <li><span>Goal:</span> $8,000.00</li>
                                        </ul>
                                    </div>
                                    <div className="case-btn">
                                        <ul>
                                            <li><Link onClick={ClickHandler} href="/CaseSinglePage"><a>Learn More</a></Link></li>
                                            <li><Link onClick={ClickHandler} href="/DonatePage"><a>Donate Now</a></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>    
                        </div>
                        <div className="col-lg-4 col-md-6 custom-grid col-12">
                            <div className="wpo-case-item">
                                <div className="wpo-case-img">
                                    <img src='images/case/img-6.png' alt=""/>
                                </div>
                                <div className="wpo-case-content">
                                    <div className="wpo-case-text-top">
                                        <h2>Fundi CSI</h2>
                                        <div className="progress-section">
                                            <div className="process">
                                                <div className="progress">
                                                    <div className="progress-bar">
                                                        <div className="progress-value"><span>70.5</span>%</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <ul>
                                            <li><span>Raised:</span> $7,000.00</li>
                                            <li><span>Goal:</span> $8,000.00</li>
                                        </ul>
                                    </div>
                                    <div className="case-btn">
                                        <ul>
                                            <li><Link onClick={ClickHandler} href="/CaseSinglePage"><a>Learn More</a></Link></li>
                                            <li><Link onClick={ClickHandler} href="/DonatePage"><a>Donate Now</a></Link></li>
                                        </ul>
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
    }
    
    export default Casesection;
          
          
          
          
