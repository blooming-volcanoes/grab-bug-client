/* eslint-disable react/prop-types */
import React from "react";

function GlobalFilter({ filter, setFilter }) {
    // filter is the value of text
    // setFilter is setter function
    const handleChange = (e) => {
        setFilter(e.target.value);
    };
    return (
        <div className="flex flex-col md:flex-row">
            Search :
            <input
                className="rounded border"
                value={filter || ""}
                onChange={(e) => handleChange(e)}
            />
        </div>
    );
}

export default GlobalFilter;
