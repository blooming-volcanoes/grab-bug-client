import React from "react";

function TicketEntries() {
    return (
        <div className="">
            <span className="uppercase"> Show </span>
            <select
                className="mb-0 h-[35px] rounded-[5px] text-[16px]"
                name="entries"
                id="entries"
                form="entryform"
            >
                <option value="5">5</option>
                <option value="5">10</option>
                <option value="5">15</option>
                <option value="5">20</option>
            </select>
            <span className="uppercase"> Entries </span>
        </div>
    );
}

export default TicketEntries;
