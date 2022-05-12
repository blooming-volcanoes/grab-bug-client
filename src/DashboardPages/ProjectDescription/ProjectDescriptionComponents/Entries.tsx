/* eslint-disable react/destructuring-assignment */
import React from "react";

function Entries(projects: any) {
    return (
        <div className="">
            <span className="uppercase"> Show </span>
            <select
                className="mb-0 h-[35px] rounded-[5px] text-[16px]"
                name="entries"
                id="entries"
                form="entryform"
            >
                {/* we will update the values later */}
                <option value="5">X</option>
                <option value="10">Y</option>
                <option value="15">Z</option>
            </select>
            <span className="uppercase"> Entries out of {projects.projects.length} </span>
        </div>
    );
}

export default Entries;
