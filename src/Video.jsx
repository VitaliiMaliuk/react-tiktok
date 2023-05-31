import React from 'react'

export default function Video(props) {
    
    return (
        <div className="video">
            <video className="player" loop src={props.url}></video>
        </div>
    )
}