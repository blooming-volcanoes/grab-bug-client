/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React from "react";

function Text({ children, className, onClick }: any) {
    return (
        <div onClick={(e) => onClick(e)} className={className}>
            {children}
        </div>
    );
}

export default Text;
