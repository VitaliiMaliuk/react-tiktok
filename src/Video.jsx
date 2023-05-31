import React from "react";
import FooterLeft from "./Footerleft";
import "./Video.css";


export default function Video(props) {
  const { url, channel, description, song } = props;
  return (
    <div className="video">
      <video className="player" loop src={url}></video>
      <div className="bottom-controls">
        <FooterLeft channel={channel} description={description} song={song} />
      </div>
    </div>
  );
}
