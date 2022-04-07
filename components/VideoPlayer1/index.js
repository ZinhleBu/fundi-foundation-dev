import React, { useRef } from "react";

import { Video, CloudinaryContext, Transformation } from "cloudinary-react";
const VideoPlayer1 = () => {
    const videoRef = useRef();
    return (
        <CloudinaryContext cloud_name="icultivate">
            <div>
                <Video
                    loop
                    data-cld-font-face="Roboto"
                    data-cld-autoplay-mode="on-scroll"
                    data-cld-colors='{ "base": "#e20001", "accent": "#e67b7b", "text": "#fff" }'
                    width="100%"
                    controls
                   
                    publicId="https://res.cloudinary.com/database1z/video/upload/v1634035103/Makwena_Moloto_interview_iqfrou.mp4" resourceType="video"
                    className="cld-video-player cld-video-player-skin-light"
                >
                </Video>
            </div>
        </CloudinaryContext>
    );
};
export default VideoPlayer1;