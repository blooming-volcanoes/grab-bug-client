import TicketComments from "components/Dashboard/TicketComponents/TicketComments";
import TicketEdit from "components/Dashboard/TicketComponents/TicketEdit";
import React from "react";

function Dashboard() {
    return (
        <div className="text-center text-2xl">
            <div>Side Bar</div>
            <div>Main Dashboard</div>
            <TicketComments />
            <TicketEdit />
        </div>
    );
}

export default Dashboard;
