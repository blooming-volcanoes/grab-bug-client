/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/button-has-type */
/* eslint-disable react/function-component-definition */
/* eslint-disable no-underscore-dangle */

import { BsFillCameraVideoOffFill } from "react-icons/bs";
import { MdCallEnd, MdPhoneCallback } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { deleteMessages } from "../../redux/actions/messageAction";
import { imageShow, videoShow } from "../../utils/mediaShow";
import Avatar from "../Avatar";
import Times from "./Times";

const MsgDisplay = ({ user, msg, theme, data }) => {
    const { auth } = useSelector((state) => state);
    const dispatch = useDispatch();

    const handleDeleteMessages = () => {
        if (!data) return;

        if (window.confirm("Do you want to delete?")) {
            dispatch(deleteMessages({ msg, data, auth }));
        }
    };

    // console.log(msg, "dispala");

    return (
        <>
            <div className="chat_title">
                <Avatar src={user.pic} size="small-avatar" />
                <span>{user.name}</span>
            </div>

            <div className="you_content">
                {user._id === auth.user._id && (
                    <i className="fas fa-trash text-danger" onClick={handleDeleteMessages} />
                )}

                <div>
                    {msg.text && (
                        <div
                            className="chat_text"
                            style={{ filter: theme ? "invert(1)" : "invert(0)" }}
                        >
                            {msg.text}
                        </div>
                    )}
                    {msg.length > 0 &&
                        msg.media.map((item, index) => (
                            <div key={index}>
                                {item.url.match(/video/i)
                                    ? videoShow(item.url, theme)
                                    : imageShow(item.url, theme)}
                            </div>
                        ))}
                </div>

                {msg.call && (
                    <button
                        className="d-flex align-items-center btn py-3"
                        style={{ background: "#eee", borderRadius: "10px" }}
                    >
                        <span
                            className="material-icons font-weight-bold mr-1"
                            style={{
                                fontSize: "2.5rem",
                                color: msg.call.times === 0 ? "crimson" : "green",
                                filter: theme ? "invert(1)" : "invert(0)",
                            }}
                        >
                            {msg.call.times === 0 ? (
                                msg.call.video ? (
                                    <BsFillCameraVideoOffFill />
                                ) : (
                                    <MdCallEnd />
                                )
                            ) : msg.call.video ? (
                                <BsFillCameraVideoOffFill />
                            ) : (
                                <MdPhoneCallback />
                            )}
                        </span>

                        <div className="text-left">
                            <h6>{msg.call.video ? "Video Call" : "Audio Call"}</h6>
                            <small>
                                {msg.call.times > 0 ? (
                                    <Times total={msg.call.times} />
                                ) : (
                                    new Date(msg.createdAt).toLocaleTimeString()
                                )}
                            </small>
                        </div>
                    </button>
                )}
            </div>

            <div className="chat_time">{new Date(msg.createdAt).toLocaleString()}</div>
        </>
    );
};

export default MsgDisplay;
