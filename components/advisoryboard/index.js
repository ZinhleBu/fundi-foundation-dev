import Link from 'next/link'

const AdvisorySection = (props) => {
    return (
        <div className="wpo-team-area section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="wpo-section-title">
                            <span>Advisory Board</span>
                            <h2>#R10GoesALongWay</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-16 col-sm-12 col-12 custom-grid">
                        <div className="wpo-team-wrap">
                            <div className="wpo-team-img">
                                <img src='images/advisory/sibu.jpg' alt="" />
                            </div>
                            <div className="wpo-team-content">
                                <div className="wpo-team-text-sub">
                                    <h2><Link href="/volunteerPage"><a>Sibu Mabena</a></Link> </h2>
                                    {/* <span>CEO</span> */}

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 col-12 custom-grid">
                        <div className="wpo-team-wrap">
                            <div className="wpo-team-img">
                                <img src='images/advisory/lasizwe.jpeg' alt="" />
                            </div>
                            <div className="wpo-team-content">
                                <div className="wpo-team-text-sub">
                                    <h2><Link href="/volunteerPage"><a>Lasizwe Dambuza </a></Link></h2>
                                    {/* <span>Managing Executive Lending</span> */}

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 col-12 custom-grid">
                        <div className="wpo-team-wrap">
                            <div className="wpo-team-img">
                                <img src='images/advisory/ayanda.jpg' alt="" />
                            </div>
                            <div className="wpo-team-content">
                                <div className="wpo-team-text-sub">
                                    <h2><Link href="/volunteerPage"><a>Ayanda Mhlongo </a></Link></h2>
                                    {/* <span>CMO</span> */}

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 col-12 custom-grid">
                        <div className="wpo-team-wrap">
                            <div className="wpo-team-img">
                                <img src='images/advisory/ntateko.png' alt="" />
                            </div>
                            <div className="wpo-team-content">
                                <div className="wpo-team-text-sub">
                                    <h2><Link href="/volunteerPage"><a>Nkateko Dinwiddy</a></Link></h2>
                                    {/* <span>-</span> */}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        
    )
}

export default AdvisorySection;