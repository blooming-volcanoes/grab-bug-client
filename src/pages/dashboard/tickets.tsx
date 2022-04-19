import TicketDetailsList from "DashboardPages/Tickets/TicketDetailsList";
import DashboardLayout from "Layouts/DashboardLayout";
import React from "react";

function tickets() {
    return (
        <DashboardLayout>
            <TicketDetailsList />
        </DashboardLayout>
    );
}

export default tickets;
