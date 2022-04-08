/*
 *** Title : Ticket view Dashboard
 *** Date : 4/5/2022
 *** Des : User can view there tickets details here
 *** Author : Raiyan
 */

import TicketAttachment from "components/Dashboard/TicketComponents/TicketDetails/TicketAttachment";
import TicketComments from "components/Dashboard/TicketComponents/TicketDetails/TicketComments";
import TicketHistory from "components/Dashboard/TicketComponents/TicketDetails/TicketHistory";
import TicketSingleDetails from "components/Dashboard/TicketComponents/TicketDetails/TicketSingleDetails";
import TicketEdit from "components/Dashboard/TicketComponents/TicketEdit";
import React from "react";

function TaskDetails() {
    return (
        <section className="min-h-screen bg-gray-100 py-10">
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
            <TicketEdit />
        </section>
    );
}

export default TaskDetails;
