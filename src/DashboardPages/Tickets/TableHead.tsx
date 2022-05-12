import React from "react";

function TableHead() {
    return (
        <thead className="text-sx border-b uppercase">
            <tr>
                <th scope="col" className="table-th">
                    Title
                </th>
                <th scope="col" className="table-th">
                    Ticket Priority
                </th>
                <th scope="col" className="table-th">
                    Ticket Status
                </th>
                <th scope="col" className="table-th">
                    Ticket Type
                </th>
                <th scope="col" className="table-th">
                    Created by
                </th>
                <th scope="col" className="table-th">
                    Endorsement
                </th>
            </tr>
        </thead>
    );
}

export default TableHead;
