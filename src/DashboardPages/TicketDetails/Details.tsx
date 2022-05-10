import React from "react";
import TicketAttachment from "./TicketAttachment";
import TicketComments from "./TicketComments";
import TicketHistory from "./TicketHistory";
import TicketSingleDetails from "./TicketSingleDetails";

function Details({ issue }: any) {
    return (
        <div className="m-0 md:m-3">
            {/* details side */}
            <div className="my-2">
                <TicketSingleDetails issue={issue} />
            </div>

            {/* comment side */}
            <div className="my-2">
                <TicketComments issue={issue} />
            </div>
            {/* History side */}
            <div className="my-2">
                <TicketHistory />
            </div>

            {/* comment side */}
            <div className="my-2">
                <TicketAttachment />
            </div>
        </div>
    );
}

export default Details;
