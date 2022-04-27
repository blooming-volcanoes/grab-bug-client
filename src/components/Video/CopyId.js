/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { SocketContext } from "context/SocketContext";
import React, { useContext, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { BiPhoneCall } from "react-icons/bi";
import { HiPhoneMissedCall } from "react-icons/hi";
import { MdAssignment } from "react-icons/md";

function CopyId({ children }) {
    const [idToCall, setIdToCall] = useState("");
    const { me, callAccepted, setName, callEnded, leaveCall, callUser } = useContext(SocketContext);
    return (
        <div className="mx-auto mt-5">
            <div className="grid gap-4 bg-slate-100 md:grid-cols-2">
                <div className="p-2">
                    <h4> Account Info </h4>
                    <form>
                        <label className="text-slate-500"> Name </label>
                        <input
                            className="my-1 w-full bg-transparent"
                            type="text"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </form>

                    <CopyToClipboard text={me}>
                        <button
                            className="w-full rounded bg-blue-400 py-2 px-4 text-white hover:bg-blue-700"
                            type="button"
                        >
                            {" "}
                            <span className="flex items-center justify-center">
                                <MdAssignment className="mr-2" /> Copy Your Id{" "}
                            </span>
                        </button>
                    </CopyToClipboard>
                </div>
                <div className="p-2">
                    <h3>Make A Call</h3>
                    <form>
                        <label className="text-slate-500"> Id to Call </label>
                        <input
                            className="my-1 w-full"
                            type="text"
                            onChange={(e) => setIdToCall(e.target.value)}
                        />
                    </form>
                    {callAccepted && !callEnded ? (
                        <button
                            className="w-full rounded bg-red-400 py-2 px-4 text-white hover:bg-red-600"
                            type="button"
                            onClick={leaveCall}
                        >
                            {" "}
                            <span className="flex items-center justify-center">
                                <HiPhoneMissedCall className="mr-2" /> Hang Up{" "}
                            </span>
                        </button>
                    ) : (
                        <button
                            className="w-full rounded bg-blue-400 py-2 px-4 text-white hover:bg-blue-700"
                            type="button"
                            onClick={() => callUser(idToCall)}
                        >
                            {" "}
                            <span className="flex items-center justify-center">
                                <BiPhoneCall className="mr-2" /> Call{" "}
                            </span>
                        </button>
                    )}
                </div>
            </div>
            {children}
        </div>
    );
}

export default CopyId;
