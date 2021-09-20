
const Mission = (props) => {
    return(
        <div className={`wpo-mission-area ${props.subclass}`}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="wpo-section-title">
                            <span>What We Do?</span>
                            <h2>We Are On A Mission To Help The Helpless</h2>
                        </div>
                    </div>
                </div>
                <div className="wpo-mission-wrap">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12 custom-grid">
                            <div className="wpo-mission-item">
                                <div className="wpo-mission-icon-5">
                                    <img src='images/mission/icon1.png' alt=""/>
                                </div>
                                <div className="wpo-mission-content">
                                    <h2>#RebuildSA</h2>
                                    <p>Lorem ipsum dolor amet cosectetur adipiscing, sed do eiusmod.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12 custom-grid">
                            <div className="wpo-mission-item">
                                <div className="wpo-mission-icon-6">
                                    <img src='images/mission/icon2.png' alt=""/>
                                </div>
                                <div className="wpo-mission-content">
                                    <h2>R10 goes a long way</h2>
                                    <p>Lorem ipsum dolor amet cosectetur adipiscing, sed do eiusmod.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12 custom-grid">
                            <div className="wpo-mission-item">
                                <div className="wpo-mission-icon-7">
                                    <img src='images/mission/icon3.png' alt=""/>
                                </div>
                                <div className="wpo-mission-content">
                                    <h2>Leaders4Learners</h2>
                                    <p>Lorem ipsum dolor amet cosectetur adipiscing, sed do eiusmod.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12 custom-grid">
                            <div className="wpo-mission-item">
                                <div className="wpo-mission-icon-8">
                                    <img src='images/mission/icon4.png' alt=""/>
                                </div>
                                <div className="wpo-mission-content">
                                    <h2>FundiFund</h2>
                                    <p>Lorem ipsum dolor amet cosectetur adipiscing, sed do eiusmod.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12 custom-grid"
                        style={{ marginTop:"20px"}} >
                            <div className="wpo-mission-item">
                                <div className="wpo-mission-icon-8">
                                    <img src='images/mission/icon4.png' alt=""/>
                                </div>
                                <div className="wpo-mission-content">
                                    <h2>Fundi CSI</h2>
                                    <p>Lorem ipsum dolor amet cosectetur adipiscing, sed do eiusmod.</p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mission;