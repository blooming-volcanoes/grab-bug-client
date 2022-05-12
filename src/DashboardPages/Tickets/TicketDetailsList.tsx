import React from "react";
import SerchTicket from "./SearchTicket";
import TicketList from "./TicketList";

function TicketDetailsList({ tickets }: any) {
    return (
        <div className="m-0 md:m-3">
            <div className="container mx-auto h-max rounded-[3px] shadow-[0_0_10px_#5584AC] md:p-3">
                {/* Ticker Header */}
                <div className="rounded-[3px] bg-gradient-to-r from-[#22577E] via-[#5584AC] to-[#22577E] p-4">
                    <h1 className="text-2xl font-bold uppercase text-[#FAFFAF]">
                        All Tickets Reported
                    </h1>
                    <p className="text-[#95D1CC]">
                        You can approve or reject this ticket by clicking on the button at the right
                    </p>
                </div>

                {/* Serch Option */}
                <SerchTicket />

                {/* Ticket List */}
                <TicketList tickets={tickets} />
            </div>
        </div>
    );
}

export default TicketDetailsList;
