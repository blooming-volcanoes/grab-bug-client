/* eslint-disable react/function-component-definition */
/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */
/* eslint-disable react/button-has-type */
import React from "react";

const Toast = ({ msg, handleShow, bgColor }) => {
    return (
        <div
            className={`toast position-fixed text-light show ${bgColor}`}
            style={{ top: "5px", right: "5px", minWidth: "200px", zIndex: 50 }}
        >
            <div className={`toast-header text-light ${bgColor}`}>
                <strong className="text-light mr-auto">{msg.title}</strong>
                <button
                    className="close text-light ml-2 mb-1"
                    data-dismiss="toast"
                    style={{ outline: "none" }}
                    onClick={handleShow}
                >
                    &times;
                </button>
            </div>
            <div className="toast-body">{msg.body}</div>
        </div>
    );
};

export default Toast;
