import React from "react";
import TicketAttachment from "./TicketAttachment";
import TicketComments from "./TicketComments";
import TicketHistory from "./TicketHistory";
import TicketSingleDetails from "./TicketSingleDetails";

function Details() {
    return (
        <div className="mx-4 grid grid-cols-1 gap-y-10 gap-x-4 py-10 md:mx-auto md:max-w-3xl lg:mx-auto lg:max-w-7xl lg:grid-cols-12">
            {/* details side */}
            <div className="pr-2 lg:col-span-6 lg:border-r">
                <TicketSingleDetails />
            </div>

            {/* comment side */}
            <div className="lg:col-span-6 ">
                <TicketComments />
            </div>
            {/* History side */}
            <div className="pr-2 pt-5 lg:col-span-6  lg:border-r">
                <TicketHistory />
            </div>

            {/* comment side */}
            <div className="lg:col-span-6 ">
                <TicketAttachment />
            </div>
        </div>
    );
}

export default Details;
