/* eslint-disable react/require-default-props */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unused-prop-types */
import React from "react";

function SelectInputs({ values, className }: { values: string[]; className?: string }) {
    return (
        <select className={`${className}`}>
            {values.map((value, i) => (
                <option key={i} value={value}>
                    {value}
                </option>
            ))}
        </select>
    );
}

export default SelectInputs;
