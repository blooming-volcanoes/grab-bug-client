import TicketComments from "components/Dashboard/TicketComponents/TicketComments";
import TicketSingleDetails from "components/Dashboard/TicketComponents/TicketSingleDetails";
import React from "react";

function TaskDetails() {
    return (
        <section className="min-h-screen bg-gray-100">
            <div className="gird-cols-1 mx-4 grid gap-y-4 gap-x-4 py-10 md:mx-auto md:max-w-3xl lg:mx-auto lg:max-w-6xl lg:grid-cols-12">
                {/* details side */}
                <div className="border-r pr-2 lg:col-span-6">
                    <TicketSingleDetails />
                </div>

                {/* comment side */}
                <div className="lg:col-span-6">
                    <TicketComments />
                </div>
                {/* details side */}
                <div className="border-r pr-2 lg:col-span-6">
                    <TicketSingleDetails />
                </div>

                {/* comment side */}
                <div className=" lg:col-span-6">
                    <TicketComments />
                </div>
            </div>
        </section>
    );
}

export default TaskDetails;
