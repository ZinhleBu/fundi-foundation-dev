import VideoModal from '../ModalVideo'

const VedioCta = (props) => {
    return(
        <div className="wpo-about-video-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <div className="wpo-about-video-item">
                            <div className="wpo-about-video-img">
                                <img src='images/about-vedio.jpg' alt=""/>
                                <div className="entry-media video-holder video-btn2">
                                    <VideoModal/>
                                </div>
                            </div>
                            <h2>See what we do <span>as an organisation</span></h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VedioCta;