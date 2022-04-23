/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */

import CopyId from "components/Video/CopyId";
import Video from "components/Video/Video";
import React from "react";
import CallerNotify from "../../components/Video/CallerNotifiy";
import VideoCallstyles from "../../styles/VideoCallstyles.module.css";

const videoCall = () => (
    <div
        className={`backgroundImage flex h-screen w-full flex-col justify-center ${VideoCallstyles.backgroundImage}`}
    >
        <Video />
        <CopyId>
            {" "}
            <CallerNotify> </CallerNotify>
        </CopyId>
    </div>
);

export default videoCall;
