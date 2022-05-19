/* eslint-disable no-underscore-dangle */
import React from "react";
import TicketTableRowSingle from "./TicketTableRowSingle";

function TicketTableBody({ tickets }: any) {
    return (
        <tbody className="text-center">
            {tickets.map((ticket: any) => (
                <TicketTableRowSingle ticket={ticket} key={ticket._id} />
            ))}
        </tbody>
    );
}

export default TicketTableBody;
