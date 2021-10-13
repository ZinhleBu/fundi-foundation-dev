import React from 'react';

import GalleryUniversityDonations from '../Gallery-University-Bursary-Donations'
import GallerySibongile from '../Gallery-Sibongile';

const CaseSingleFundiCsi = (props) => {


    return (
        <div className="wpo-case-details-area section-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-12">
                        <div className="wpo-case-details-wrap">
                            <div className="wpo-case-details-text">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="wpo-case-content">
                                            <div className="wpo-case-text-top">
                                                <h2>FundiCSI | Corporate Social Investment</h2>
                                                <div className="case-b-text">
                                                    <p>By 2019, through a small CSI budget and employee contributions, Fundi was already making a significant impact through student bursaries, financial commitments to institutions as well as contributions to Bhuko Bhami Community Centre and Sibonile School for the Blind.
                                                    </p>
                                                    <p> Doing Good is good business, and due to our ethos of doing more to enable more learning as well as being confronted by the challenges students face in getting access to education, Fundi made a strategic decision to establish Fundi Foundation as a long-term commitment to enabling education dreams and making an impactful difference in society. FundiFoundation is a universe of all things that enable education and learning for those who can’t help themselves.
                                                    </p>
                                                    <GalleryUniversityDonations />
                                                    <br></br>
                                                    <br></br>
                                                    <GallerySibongile />
                                                </div>
                                            </div>
                                        </div>
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

export default CaseSingleFundiCsi;




