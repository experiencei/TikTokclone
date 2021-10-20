import React from 'react'
import "./VideoFooter.css";
import { MusicNote }from "@material-ui/core";
import Ticker from "react-ticker";

function VideoFooter() {
    return (
        <div className="videoFooter">
      <div className="videoFooter__text">
        <h3>warning</h3>
        <p>description</p>
        <div className="videoFooter__ticker">
          <MusicNoteIcon className="videoFooter__icon" />
          <Ticker mode="smooth">
            {({ index }) => (
              <>
                <p>Cools</p>
              </>
            )}
          </Ticker>
        </div>
      </div>
      <img
        className="videoFooter__record"
        src="https://static.thenounproject.com/png/934821-200.png"
        alt=""
      />
    </div>
    )
}

export default VideoFooter
