/* eslint-disable react/prop-types */
import EditAsignTicket from "DashboardPages/SingleTicketDetails/EditAsignTicket";
import DashboardLayout from "Layouts/DashboardLayout";
import { useRouter } from "next/router";
import React from "react";

function SingleTicketDetails() {
    const router = useRouter();
    const { ticketId } = router.query;
    return (
        <DashboardLayout>
            <EditAsignTicket ticketId={ticketId} />
        </DashboardLayout>
    );
}

export default SingleTicketDetails;
