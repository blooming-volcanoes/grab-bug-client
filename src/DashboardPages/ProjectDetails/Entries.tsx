import React from "react";

function Entries({ users }: any) {
    return (
        <div className="">
            <span className="uppercase"> Show </span>
            <span> {users.length} </span>
            <span className="uppercase"> Entries </span>
        </div>
    );
}

export default Entries;
