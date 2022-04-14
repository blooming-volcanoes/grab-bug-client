/*
 *** Title : Ticket view Dashboard
 *** Date : 4/5/2022
 *** Des : User can view there tickets details here
 *** Author : Raiyan
 */

import Main from "DashboardPages/TicketDetails/TicketDetailsMain";
import DashboardLayout from "molecules/DashboardLayout";
import React from "react";

function TicketDetails() {
    return (
        <DashboardLayout>
            <Main />
        </DashboardLayout>
    );
}

export default TicketDetails;
