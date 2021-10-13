import React from "react";

import { Video, CloudinaryContext } from "cloudinary-react";
const VideoPlayer5 = () => {
    return (
        <div
            style={{
               marginTop:"100px",
               marginBottom:"100px"

            }} className="container">
            <div className="row">
                <div className="col-12">
                    <CloudinaryContext cloud_name="icultivate">
                        <div>
                            <Video
                                style={{
                                    width: "100%",
                                    position: "relative"
                                }}
                                loop
                                data-cld-font-face="Roboto"
                                data-cld-autoplay-mode="on-scroll"
                                data-cld-colors='{ "base": "#e20001", "accent": "#e67b7b", "text": "#fff" }'
                                width="0%"
                                controls
                                publicId="https://res.cloudinary.com/icultivate/video/upload/v1634126256/Mala_interview_spsdvn.mp4" resourceType="video"
                                className="cld-video-player cld-video-player-skin-light"
                            >
                            </Video>
                        </div>
                    </CloudinaryContext>
                </div>
            </div>
        </div>
    );
};
export default VideoPlayer5;