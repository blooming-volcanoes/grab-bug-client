/* eslint-disable react/prop-types */
import React from "react";

function GlobalFilter({ filter, setFilter }) {
    // filter is the value of text
    // setFilter is setter function
    const handleChange = (e) => {
        setFilter(e.target.value);
    };
    return (
        <div>
            Search :
            <input className="border" value={filter || ""} onChange={(e) => handleChange(e)} />
        </div>
    );
}

export default GlobalFilter;
