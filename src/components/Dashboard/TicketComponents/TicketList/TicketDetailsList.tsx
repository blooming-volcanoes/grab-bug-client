import React from "react";
import SerchTicket from "./SearchTicket";
import TicketList from "./TicketList";

function TicketDetailsList() {
    return (
        <div className="mx-4 mt-10 rounded-lg  border-r p-4 shadow-lg">
            {/* Ticker Header */}
            <div className="-mt-10  mb-8 space-y-2 rounded-lg bg-indigo-500 p-4 capitalize text-white shadow-2xl">
                <h1 className="text-lg">Your Tickets </h1>
                <p className="text-sm ">All the ticket that you have in the database </p>
            </div>

            {/* Serch Option */}
            <SerchTicket />

            {/* Ticket List */}
            <TicketList />
        </div>
    );
}

export default TicketDetailsList;
