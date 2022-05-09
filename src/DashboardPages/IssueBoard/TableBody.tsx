/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import TableRowSingle from "./TableRowSingle";

function TableBody({ issues }: any) {
    return (
        <tbody className="text-center">
            {issues.map((issue: any) => (
                <TableRowSingle issue={issue} key={issue.id} />
            ))}
        </tbody>
    );
}

export default TableBody;
