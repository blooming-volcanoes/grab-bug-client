import React from "react";
import TicketAttachment from "./TicketAttachment";
import TicketComments from "./TicketComments";
import TicketHistory from "./TicketHistory";
import TicketSingleDetails from "./TicketSingleDetails";

function Details() {
    return (
        <div className="mx-4 grid grid-cols-1 gap-y-10 gap-x-4 px-2 py-10 md:mx-auto md:max-w-3xl lg:mx-auto lg:max-w-7xl lg:px-8 ">
            {/* details side */}
            <div className="pr-2">
                <TicketSingleDetails />
            </div>

            {/* comment side */}
            <div>
                <TicketComments />
            </div>
            {/* History side */}
            <div className="pr-2 pt-5">
                <TicketHistory />
            </div>

            {/* comment side */}
            <div className="">
                <TicketAttachment />
            </div>
        </div>
    );
}

export default Details;
