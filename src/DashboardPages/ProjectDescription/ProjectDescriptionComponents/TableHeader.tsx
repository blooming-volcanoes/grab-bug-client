import React from "react";

function TableHeader() {
    return (
        <thead className="table-th border-b border-gray-400">
            <tr className="text-left">
                <th>Project Name</th>
                <th>Description</th>
                <th>Event</th>
            </tr>
        </thead>
    );
}

export default TableHeader;
