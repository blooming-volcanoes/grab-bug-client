/* eslint-disable jsx-a11y/media-has-caption */

import { SocketContext } from "context/SocketContext";
import React, { useContext } from "react";

function Video() {
    const { callAccepted, myVideo, userVideo, callEnded, stream, name } = useContext(SocketContext);

    return (
        <div className=" mx-auto grid w-2/3 grid-cols-1 justify-items-center gap-4 p-0 md:grid-cols-2">
            {stream && (
                <div className="border border-gray-500 p-2 shadow-md">
                    <h3 className="text-white">Name || {name}</h3>
                    <video className="border" playsInline ref={myVideo} autoPlay />
                </div>
            )}
            {callAccepted && !callEnded && (
                <div className="border border-gray-500 p-2 shadow-md">
                    <h3 className="text-white">Name</h3>
                    <video className="border" playsInline ref={userVideo} autoPlay />
                </div>
            )}
        </div>
    );
}

export default Video;
