import Link from 'next/link'


const EventSection2 = (props) => {
    return (
        <div className="wpo-event-area wpo-event-area2 section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="wpo-section-title">
                            <span>Our News and Articles</span>
                            <h2>Current News</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12 col-12 custom-grid">
                        <div className="wpo-event-item">
                            <div className="wpo-event-img">
                                <img src='images/event/img-1-ayanda.jpg' alt="" />
                                <div className="thumb-text">
                                    <span>25</span>
                                    <span>NOV</span>
                                </div>
                            </div>
                            <div className="wpo-event-text">
                                <h2>Ayandamantombazane Mhlongo writes:</h2>
                                <ul>
                                    <li><i className="fa fa-clock-o" aria-hidden="true"></i>8.00 - 5.00</li>
                                    <li><i className="fi flaticon-pin"></i>Johannesburg</li>
                                </ul>
                                <p>
                                    The job market is extremely competitive and skilled employees are high in demand...
                                </p>
                                <Link href="/AyandamantombazaneBlogPost">Learn More...</Link>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 col-12 custom-grid">
                        <div className="wpo-event-item">
                            <div className="wpo-event-img">
                                <img src='images/event/img-1-sakhile.jpg' alt="" />
                                <div className="thumb-text">
                                    <span>25</span>
                                    <span>JUN</span>
                                </div>
                            </div>
                            <div className="wpo-event-text">
                                <h2>Struggling Sakhile’s academic dreams come true:</h2>
                                <ul>
                                    <li><i className="fa fa-clock-o" aria-hidden="true"></i>8.00 - 5.00</li>
                                    <li><i className="fi flaticon-pin"></i>Johannesburg</li>
                                </ul>
                                <p>
                                    From sleeping in a park at night, a young student is now able to...
                                </p>
                                <Link href="/SakhileBlogPost">Learn More...</Link>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 col-12 custom-grid">
                        <div className="wpo-event-item">
                            <div className="wpo-event-img">
                                <img src='images/event/img-1-gs.jpg' alt="" />
                                <div className="thumb-text">
                                    <span>30</span>
                                    <span>JUL</span>
                                </div>
                            </div>
                            <div className="wpo-event-text">
                                <h2>Uncertain future for Golden Steps School in KZN destroyed by looting:</h2>
                                <ul>
                                    {/* <li><i className="fa fa-clock-o" aria-hidden="true"></i>8.00 - 5.00</li> */}
                                    <li><i className="fi flaticon-pin"></i>Durban</li>
                                    <li><i className="fi flaticon-profile"></i>By Charlene Somduth</li>

                                </ul>
                                <p>
                                    Durban: Golden Steps School for the intellectually challenged opened in 1979 by volunteers...
                                </p>
                                <Link href="/GoldenStepsBlogPost">Learn More...</Link>

                            </div>
                        </div>
                    </div>

                </div>



            </div>
        </div>
    )
}

export default EventSection2;