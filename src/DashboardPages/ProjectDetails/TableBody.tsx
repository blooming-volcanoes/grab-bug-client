/* eslint-disable no-underscore-dangle */

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
