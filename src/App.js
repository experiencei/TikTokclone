import React , {useEffect} from "react"
import './App.css';
import Video from "./components/video/Video";
import VideoSidebar from "./components/videosidebar/VideoSidebar";
import { db } from "./components/firebase/firebase";
function App() {
  return (
    <div className="app">
      <h1>Hello World</h1>

      <div className="app__videos">
        <Video/>
        <Video/>
        <Video/>
        <Video/>
      </div>
    </div>
  );
}

export default App;
