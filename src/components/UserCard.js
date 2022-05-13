/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable no-nested-ternary */
/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React from "react";
import { useSelector } from "react-redux";
import Avatar from "./Avatar";

const UserCard = ({ children, user, border, msg }) => {
    const { theme } = useSelector((state) => state);

    // const handleCloseAll = () => {
    //     if(handleClose) handleClose()
    //     if(setShowFollowers) setShowFollowers(false)
    //     if(setShowFollowing) setShowFollowing(false)
    // }

    const showMsg = (user) => {
        return (
            <>
                <div style={{ filter: theme ? "invert(1)" : "invert(0)" }}>{user.text}</div>
                {user.media.length > 0 && (
                    <div>
                        {user.media.length} <i className="fas fa-image" />
                    </div>
                )}

                {user.call && (
                    <span className="material-icons">
                        {user.call.times === 0
                            ? user.call.video
                                ? "videocam_off"
                                : "phone_disabled"
                            : user.call.video
                            ? "video_camera_front"
                            : "call"}
                    </span>
                )}
            </>
        );
    };

    return (
        <div className={`flex w-full items-center justify-between p-2 ${border}`}>
            <div>
                {/* <Link to={`/profile/${user._id}`} onClick={handleCloseAll}
                className="d-flex align-items-center"> */}
                <div className="flex items-center">
                    <Avatar src={user.pic} size="big-avatar" />

                    <div className="ml-1" style={{ transform: "translateY(-2px)" }}>
                        <span className="block">{user.name}</span>

                        <small style={{ opacity: 0.7 }}>
                            {msg ? showMsg(user) : user.fullname}
                        </small>
                    </div>
                </div>
                {/* </Link> */}
            </div>

            {children}
        </div>
    );
};

export default UserCard;
