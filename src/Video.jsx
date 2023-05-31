import React from "react";
import FooterLeft from "./Footerleft";
import FooterRight from "./Footerright"
import "./Video.css";


export default function Video(props) {
  const { url, channel, description, song, likes, shares, messages } = props;
  return (
    <div className="video">
      <video className="player" loop src={url}></video>
      <div className="bottom-controls">
        <FooterLeft channel={channel} description={description} song={song} />
        <FooterRight likes={likes} shares={shares} messages={messages} />
      </div>
    </div>
  );
}
