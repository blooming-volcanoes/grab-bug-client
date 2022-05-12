import React from "react";

function TableHeader() {
    return (
        <thead className="table-th  h-[40px] rounded-[5px] border-b border-[#22577E] bg-[#5584AC]">
            <tr className="text-center">
                <th className="text-[18px] text-[#FAFFAF]">Project Name</th>
                <th className="text-[18px] text-[#FAFFAF]">Email</th>
                <th className="text-[18px] text-[#FAFFAF]">Role</th>
            </tr>
        </thead>
    );
}

export default TableHeader;
