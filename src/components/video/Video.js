import React, {useRef} from 'react'
import "./Video.css";


function Video() {
  const videoRef = useRef(null);
   
  const onVideoPress = () => {
      
  }

    return (
        <div className="video">
            <video 
            onClick={onVideoPress}
            loop
            ref={videoRef}
            className="video__player"  src="">

            </video>
        </div>
    )
}

export default Video
