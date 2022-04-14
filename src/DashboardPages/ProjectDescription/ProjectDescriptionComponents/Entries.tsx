import React from "react";

function Entries() {
    return (
        <div className="mb-2 sm:mb-0">
            <span> Show </span>
            <select name="entries" id="entries" form="entryform">
                <option value="5">5</option>
                <option value="5">10</option>
                <option value="5">15</option>
                <option value="5">20</option>
            </select>
            <span> Entries </span>
        </div>
    );
}

export default Entries;
