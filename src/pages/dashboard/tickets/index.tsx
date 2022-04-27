import TicketDetailsList from "DashboardPages/Tickets/TicketDetailsList";
import DashboardLayout from "Layouts/DashboardLayout";
import React from "react";
import IssueHttpReq from "../../../services/Issue.service";

function tickets({ allTickets }: any) {
    return (
        <DashboardLayout>
            <TicketDetailsList tickets={allTickets} />
        </DashboardLayout>
    );
}

export default tickets;

export async function getServerSideProps() {
    const allTickets = await IssueHttpReq.getAllIssues();
    return {
        props: {
            allTickets: allTickets.data.result,
        },
    };
}
