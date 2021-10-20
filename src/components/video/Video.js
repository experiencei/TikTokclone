import React, {useRef , useState} from 'react'
import VideoFooter from '../videofooter/VideoFooter';
import "./Video.css";


function Video() {
const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);
   
  const onVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

    return (
        <div className="video">
            <video 
            onClick={onVideoPress}
            loop
            ref={videoRef}
            className="video__player"  src="">
           
            </video>
            <VideoFooter/>
        </div>
    )
}

export default Video
