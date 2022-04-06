/*
 *** Title : Ticket List Dashboard
 *** Date : 4/6/2022
 *** Des : User can view their tickets List here
 *** Author : Awal 
 
 */

import TicketDetailsList from "components/Dashboard/TicketComponents/TicketList/TicketDetailsList";
import React from "react";

function allTicket() {
    return (
        <div>
            <TicketDetailsList />
        </div>
    );
}

export default allTicket;
