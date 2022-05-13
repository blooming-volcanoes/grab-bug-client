/* eslint-disable import/extensions */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import TableRowSingle from "./TableRowSingle";

function TableBody({ users }: any) {
    return (
        <tbody className="text-center">
            {users.map((user: any) => (
                <TableRowSingle user={user} key={user.id} />
            ))}
        </tbody>
    );
}

export default TableBody;
