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
            className="video__player"  src="https://player.vimeo.com/external/408278747.sd.mp4?s=22ce19663174765b4faafb6e11fca46620149ad3&profile_id=165&oauth2_token_id=57447761">
           
            </video>
            <VideoFooter/>
        </div>
    )
}

export default Video
