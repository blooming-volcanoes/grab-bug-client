/*
 *** Title : Ticket view Dashboard
 *** Date : 4/5/2022
 *** Des : User can view there tickets details here
 *** Author : Raiyan
 */

import Main from "DashboardPages/TicketDetails/TicketDetailsMain";
import DashboardLayout from "Layouts/DashboardLayout";
import React from "react";
import IssueHttpReq from "services/Issue.service";

function TicketDetails({ issue }: { issue: any }) {
    return (
        <DashboardLayout>
            <Main issue={issue} />
        </DashboardLayout>
    );
}

export default TicketDetails;

export async function getServerSideProps(context: any) {
    const { params } = context;
    const { ticketId } = params;
    const issueData = await IssueHttpReq.getIssue(ticketId);
    return {
        props: {
            issue: issueData.data.result,
        },
    };
}
