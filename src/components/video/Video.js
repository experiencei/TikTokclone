import React, {useRef , useState} from 'react'
import "./Video.css";


function Video() {
    const [playing, setPlaying] = useState(false);
    const videoRef = useRef(null);
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
        </div>
    )
}

export default Video
