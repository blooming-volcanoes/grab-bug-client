import React from "react";

function Entries({ peopleAssigned }: any) {
    return (
        <div className="">
            <span className="uppercase"> Show </span>
            <span> {peopleAssigned.length} </span>
            <span className="uppercase"> Entries </span>
        </div>
    );
}

export default Entries;
