import React from 'react'
import "./VideoFooter.css";
import { MusicNote }from "@material-ui/core";
import Ticker from "react-ticker";

function VideoFooter() {
    return (
        <div className="videoFooter">
            <div className="videoFooter__text">

            <Ticker mode="smooth">
            {({ index }) => (
              <>
                <p>Gelli ooh</p>
              </>
            )}
          </Ticker>
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
