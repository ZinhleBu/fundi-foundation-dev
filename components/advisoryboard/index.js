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
                                <img src='images/advisory/img-1-sibu.jpg' alt="" />
                            </div>
                            <div className="wpo-team-content">
                                <div className="wpo-team-text-sub">
                                    <h5><Link href="/"><a>Sibu Mabena</a></Link> </h5>
                                    {/* <span>CEO</span> */}

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 col-12 custom-grid">
                        <div className="wpo-team-wrap">
                            <div className="wpo-team-img">
                                <img src='images/advisory/img-2-lasizwe.jpg' alt="" />
                            </div>
                            <div className="wpo-team-content">
                                <div className="wpo-team-text-sub">
                                    <h5><Link href="/"><a>Lasizwe Dambuza </a></Link></h5>
                                    {/* <span>Managing Executive Lending</span> */}

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 col-12 custom-grid">
                        <div className="wpo-team-wrap">
                            <div className="wpo-team-img">
                                <img src='images/advisory/img-3-ayanda.jpg' alt="" />
                            </div>
                            <div className="wpo-team-content">
                                <div className="wpo-team-text-sub">
                                    <h5><Link href="/"><a>Ayanda Mhlongo </a></Link></h5>
                                    {/* <span>CMO</span> */}

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 col-12 custom-grid">
                        <div className="wpo-team-wrap">
                            <div className="wpo-team-img">
                                <img src='images/advisory/img-4-nkateko.jpg' alt="" />
                            </div>
                            <div className="wpo-team-content">
                                <div className="wpo-team-text-sub">
                                    <h5><Link href="/"><a>Nkateko Dinwiddy</a></Link></h5>
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