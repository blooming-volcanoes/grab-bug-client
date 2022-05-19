import React from "react";

function TicketTableHeader() {
    return (
        <thead className="table-th  h-[40px] rounded-[5px] border-b border-[#22577E] bg-[#5584AC]">
            <tr className="text-center">
                <th className="text-[18px] text-[#FAFFAF]">Title</th>
                <th className="text-[18px] text-[#FAFFAF]">Submitter</th>
                <th className="text-[18px] text-[#FAFFAF]">Severity</th>
                <th className="text-[18px] text-[#FAFFAF]">Category</th>
                <th className="text-[18px] text-[#FAFFAF]">Status</th>
                <th className="text-[18px] text-[#FAFFAF]">Reported at</th>
                <th className="text-[18px] text-[#FAFFAF]">Description</th>
                <th className="text-[18px] text-[#FAFFAF]">More</th>
            </tr>
        </thead>
    );
}

export default TicketTableHeader;
