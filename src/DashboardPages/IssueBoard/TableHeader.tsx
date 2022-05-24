import React from "react";

function TableHeader() {
    return (
        <thead className="table-th  h-[40px] rounded-[5px] border-b border-[#22577E] bg-[#5584AC]">
            <tr className="text-center">
                <th className="text-[18px] text-[#FAFFAF]">Issue Name</th>
                <th className="text-[18px] text-[#FAFFAF]">Status</th>
                <th className="text-[18px] text-[#FAFFAF]">Reporter</th>
                <th className="text-[18px] text-[#FAFFAF]">Deadline</th>
                <th className="text-[18px] text-[#FAFFAF]">Timeline</th>
                <th className="text-[18px] text-[#FAFFAF]">Countdown</th>
                <th className="text-[18px] text-[#FAFFAF]">Files</th>
            </tr>
        </thead>
    );
}

export default TableHeader;
