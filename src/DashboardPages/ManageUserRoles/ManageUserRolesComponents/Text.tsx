/* eslint-disable react/prop-types */
import React from "react";

function Text({ children, className }: any) {
    return <div className={className}>{children}</div>;
}

export default Text;
