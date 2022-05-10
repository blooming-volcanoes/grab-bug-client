/* eslint-disable no-underscore-dangle */
/* eslint-disable import/extensions */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import TableRowSingle from "./TableRowSingle";

function TableBody({ peopleAssigned }: any) {
    return (
        <tbody className="text-center">
            {peopleAssigned.map((person: any) => (
                <TableRowSingle person={person} key={person._id} />
            ))}
        </tbody>
    );
}

export default TableBody;
