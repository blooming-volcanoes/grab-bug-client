import { SocketContext } from "context/SocketContext";
import React, { useContext } from "react";
import { MdWifiCalling2 } from "react-icons/md";

function CallerNotify() {
    const { answerCall, call, callAccepted } = useContext(SocketContext);

    return (
        <div>
            {call.isReceivingCall && !callAccepted && (
                <div className="flex justify-around">
                    <h1 className="text-white">{call.name} is calling:</h1>
                    <button
                        className="rounded bg-blue-400 py-2 px-4 text-white hover:bg-blue-600"
                        type="button"
                        onClick={answerCall}
                    >
                        <MdWifiCalling2 />
                    </button>
                </div>
            )}
        </div>
    );
}

export default CallerNotify;
