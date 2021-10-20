import React, {useRef , useState} from 'react'
import VideoFooter from '../videofooter/VideoFooter';
import VideoSidebar from '../videosidebar/VideoSidebar';
import "./Video.css";


function  Video({ url, channel, description, song, likes, messages, shares }) {
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
        className="video__player"
        loop
        onClick={onVideoPress}
        ref={videoRef}
        src={url}
      ></video>
      <VideoFooter channel={channel} description={description} song={song} />
      <VideoSidebar likes={likes} messages={messages} shares={shares} />
        </div>
    )
}

export default Video



// https://player.vimeo.com/external/408278747.sd.mp4?s=22ce19663174765b4faafb6e11fca46620149ad3&profile_id=165&oauth2_token_id=57447761