import React from "react";

function TicketTableHeader() {
    return (
        <thead className="table-th  h-[40px] rounded-[5px] border-b border-black bg-sky-400">
            <tr className="text-center">
                <th className="text-[20px]">Title</th>
                <th className="text-[20px]">Submitter</th>
                <th className="text-[20px]">Developer</th>
                <th className="text-[20px]">Role</th>
                <th className="text-[20px]">Time</th>
                <th className="text-[20px]">More</th>
            </tr>
        </thead>
    );
}

export default TicketTableHeader;
