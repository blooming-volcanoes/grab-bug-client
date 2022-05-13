/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from "react";
/* eslint-disable react/function-component-definition */
/* eslint-disable react/prop-types */
/* eslint-disable consistent-return */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable react/self-closing-comp */

const Icons = ({ setContent, content, theme }) => {
    const reactions = [
        "❤️",
        "😆",
        "😯",
        "😢",
        "😡",
        "👍",
        "👎",
        "😄",
        "😂",
        "😍",
        "😘",
        "😗",
        "😚",
        "😳",
        "😭",
        "😓",
        "😤",
        "🤤",
        "👻",
        "💀",
        "🤐",
        "😴",
        "😷",
        "😵",
    ];

    return (
        <div
            className="dropdown nav-item"
            style={{ opacity: 1, filter: theme ? "invert(1)" : "invert(0)" }}
        >
            <span
                className="position-relative nav-link px-1"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
            >
                <span style={{ opacity: 0.4 }}>😄</span>
            </span>

            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <div className="reactions">
                    {reactions.map((icon) => (
                        <span key={icon} onClick={() => setContent(content + icon)}>
                            {icon}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Icons;
