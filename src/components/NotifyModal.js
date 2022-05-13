/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/prop-types */
/* eslint-disable consistent-return */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable react/self-closing-comp */
import moment from "moment";
import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import NoNotice from "../images/notice.png";
import { deleteAllNotifies, isReadNotify, NOTIFY_TYPES } from "../redux/actions/notifyAction";
import Avatar from "./Avatar";

const NotifyModal = () => {
    const { auth, notify } = useSelector((state) => state);
    const dispatch = useDispatch();

    const handleIsRead = (msg) => {
        dispatch(isReadNotify({ msg, auth }));
    };

    const handleSound = () => {
        dispatch({ type: NOTIFY_TYPES.UPDATE_SOUND, payload: !notify.sound });
    };

    const handleDeleteAll = () => {
        const newArr = notify.data.filter((item) => item.isRead === false);
        if (newArr.length === 0) return dispatch(deleteAllNotifies(auth.token));

        if (
            window.confirm(
                `You have ${newArr.length} unread notices. Are you sure you want to delete all?`
            )
        ) {
            return dispatch(deleteAllNotifies(auth.token));
        }
    };

    return (
        <div style={{ minWidth: "300px" }}>
            <div className="d-flex justify-content-between align-items-center px-3">
                <h3>Notification</h3>
                {notify.sound ? (
                    <i
                        className="fas fa-bell text-danger"
                        style={{ fontSize: "1.2rem", cursor: "pointer" }}
                        onClick={handleSound}
                    />
                ) : (
                    <i
                        className="fas fa-bell-slash text-danger"
                        style={{ fontSize: "1.2rem", cursor: "pointer" }}
                        onClick={handleSound}
                    />
                )}
            </div>
            <hr className="mt-0" />

            {notify.data.length === 0 && <img src={NoNotice} alt="NoNotice" className="w-100" />}

            <div style={{ maxHeight: "calc(100vh - 200px)", overflow: "auto" }}>
                {notify.data.map((msg, index) => (
                    <div key={index} className="mb-3 px-2">
                        <Link
                            herf={`${msg.url}`}
                            className="d-flex text-dark align-items-center"
                            onClick={() => handleIsRead(msg)}
                        >
                            <Avatar src={msg.user.avatar} size="big-avatar" />

                            <div className="flex-fill mx-1">
                                <div>
                                    <strong className="mr-1">{msg.user.username}</strong>
                                    <span>{msg.text}</span>
                                </div>
                                {msg.content && <small>{msg.content.slice(0, 20)}...</small>}
                            </div>

                            {msg.image && (
                                <div style={{ width: "30px" }}>
                                    {msg.image.match(/video/i) ? (
                                        <video src={msg.image} width="100%" />
                                    ) : (
                                        <Avatar src={msg.image} size="medium-avatar" />
                                    )}
                                </div>
                            )}
                        </Link>
                        <small className="text-muted d-flex justify-content-between px-2">
                            {moment(msg.createdAt).fromNow()}
                            {!msg.isRead && <i className="fas fa-circle text-primary" />}
                        </small>
                    </div>
                ))}
            </div>

            <hr className="my-1" />
            <div
                className="text-danger mr-2 text-right"
                style={{ cursor: "pointer" }}
                onClick={handleDeleteAll}
            >
                Delete All
            </div>
        </div>
    );
};

export default NotifyModal;
