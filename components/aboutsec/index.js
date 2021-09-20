import VideoModal from '../ModalVideo'
import Link from 'next/link'
import SimpleImageSlider from "react-simple-image-slider";

const AboutSec = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    return (
        <div className="wpo-about-area section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 colsm-12">
                        <div className="wpo-about-text">
                            <div className="wpo-section-title">
                                <span>Foundation</span>
                                <h2>Impact to date – fundi capital</h2>
                            </div>
                            <h3>Tembisa High School Bags</h3>
                            <h3>Mandela Day Bursary Students Mpumi and Nompilo Cheque handover – UCT</h3>
                            <h3>12for12 Pics – Cheque handover</h3>
                            <h3>Sibonile school of the blind. </h3>
                            <h3>Bukho Bami community centre, Sakhile Nsibande</h3>
                            <div className="btns">
                                <Link href="/DonateR10GoesAlongWayPage">
                                    <a className="theme-btn" onClick={ClickHandler}>Donate Now</a>
                                </Link>
                                <ul>
                                    <li className="video-holder">
                                        <VideoModal />
                                    </li>
                                    <li className="video-text">
                                        Watch Our Video
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 colsm-12">
                        <div className="wpo-about-img-3">
     
                            <img src='images/about3-foundation2.png' alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutSec;