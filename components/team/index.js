import Link from 'next/link'

const TeamSection = (props) => {
    return (
        <><div className="wpo-team-area section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-15">
                        <div className="wpo-section-title">
                            <span>Board of Trustees</span>
                            <h2>Governance</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12 col-12 custom-grid">
                        <div className="wpo-team-wrap">
                            <div className="wpo-team-img">
                                <img src='images/team/team-1.png' alt="" />
                            </div>
                            <div className="wpo-team-content">
                                <div className="wpo-team-text-sub">
                                    <h2><Link href="/volunteerPage"><a>Makgau Dibakwane</a></Link> </h2>
                                    <span>CEO</span>
                                    {/* <ul>
                                        <li><Link href="https://web.facebook.com/makgau.dibakwane.9"><a><i className="ti-facebook"></i></a></Link></li>
                                        <li><Link href="linkedin.com/in/makgau-dibakwane-ca-sa-92570797"><a><i className="ti-linkedin"></i></a></Link></li>
                                    </ul> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 col-12 custom-grid">
                        <div className="wpo-team-wrap">
                            <div className="wpo-team-img">
                                <img src='images/team/team-2.png' alt="" />
                            </div>
                            <div className="wpo-team-content">
                                <div className="wpo-team-text-sub">
                                    <h2><Link href="/volunteerPage"><a>Phumla Tshabalala</a></Link></h2>
                                    <span>Managing Executive Lending</span>
                                    {/* <ul>
                                        <li><Link href="/volunteerPage"><a><i className="ti-facebook"></i></a></Link></li>
                                        <li><Link href="/volunteerPage"><a><i className="ti-twitter"></i></a></Link></li>
                                        <li><Link href="/volunteerPage"><a><i className="ti-google"></i></a></Link></li>
                                        <li><Link href="/volunteerPage"><a><i className="ti-instagram"></i></a></Link></li>
                                    </ul> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 col-12 custom-grid">
                        <div className="wpo-team-wrap">
                            <div className="wpo-team-img">
                                <img src='images/team/mala.png' alt="" />
                            </div>
                            <div className="wpo-team-content">
                                <div className="wpo-team-text-sub">
                                    <h2><Link href="/volunteerPage"><a>Mala Suriah</a></Link></h2>
                                    <span>Fundi CMO</span>
                                    {/* <ul>
                                        <li><Link href="/volunteerPage"><a><i className="ti-facebook"></i></a></Link></li>
                                        <li><Link href="/volunteerPage"><a><i className="ti-twitter"></i></a></Link></li>
                                        <li><Link href="/volunteerPage"><a><i className="ti-google"></i></a></Link></li>
                                        <li><Link href="/volunteerPage"><a><i className="ti-instagram"></i></a></Link></li>
                                    </ul> */}
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12 custom-grid">
                            <div className="wpo-team-wrap">
                                <div className="wpo-team-img">
                                    <img src='images/team/team-4-lefa.png' alt="" />
                                </div>
                                <div className="wpo-team-content">
                                    <div className="wpo-team-text-sub">
                                        <h2><Link href="/volunteerPage"><a>Lifa Magwentshu</a></Link></h2>
                                        <span></span>
                                        {/* <ul>
                                            <li><Link href="/volunteerPage"><a><i className="ti-facebook"></i></a></Link></li>
                                            <li><Link href="/volunteerPage"><a><i className="ti-twitter"></i></a></Link></li>
                                            <li><Link href="/volunteerPage"><a><i className="ti-google"></i></a></Link></li>
                                            <li><Link href="/volunteerPage"><a><i className="ti-instagram"></i></a></Link></li>
                                        </ul> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12 custom-grid">
                            <div className="wpo-team-wrap">
                                <div className="wpo-team-img">
                                    <img src='images/team/fulu.png' alt="" />
                                </div>
                                <div className="wpo-team-content">
                                    <div className="wpo-team-text-sub">
                                        <h2><Link href="/volunteerPage"><a>Fulu Makwetla </a></Link></h2>
                                        <span>CEO Third Way Investments</span>
                                        {/* <ul>
                                            <li><Link href="/volunteerPage"><a><i className="ti-facebook"></i></a></Link></li>
                                            <li><Link href="/volunteerPage"><a><i className="ti-twitter"></i></a></Link></li>
                                            <li><Link href="/volunteerPage"><a><i className="ti-google"></i></a></Link></li>
                                            <li><Link href="/volunteerPage"><a><i className="ti-instagram"></i></a></Link></li>
                                        </ul> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>

            </>





    )
}

export default TeamSection;