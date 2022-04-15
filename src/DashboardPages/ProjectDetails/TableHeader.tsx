import React from "react";

function TableHeader() {
    return (
        <thead className="table-th  h-[40px] rounded-[5px] border-b border-black bg-sky-400">
            <tr className="text-center">
                <th className="text-[20px]">Project Name</th>
                <th className="text-[20px]">Email</th>
                <th className="text-[20px]">Role</th>
            </tr>
        </thead>
    );
}

export default TableHeader;
