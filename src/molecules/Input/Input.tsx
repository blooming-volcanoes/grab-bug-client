/* eslint-disable import/prefer-default-export */
/* eslint-disable react/require-default-props */
import React from "react";

function Input({
    placeholder,
    value,
    type,
    id,
    className,
}: {
    placeholder: string | undefined;
    value?: string;
    type: string | undefined;
    id?: string;
    className?: string;
}) {
    return (
        <input
            type={type}
            className={`${className}`}
            placeholder={placeholder}
            value={value}
            id={id}
        />
    );
}

export default Input;
