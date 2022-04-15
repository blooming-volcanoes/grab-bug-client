import React from "react";
import TicketTableRowSingle from "./TicketTableRowSingle";

function TicketTableBody({ tickets }: any) {
    return (
        <tbody className="text-center">
            {tickets.map((ticket: any) => (
                <TicketTableRowSingle ticket={ticket} key={ticket.id} />
            ))}
        </tbody>
    );
}

export default TicketTableBody;
