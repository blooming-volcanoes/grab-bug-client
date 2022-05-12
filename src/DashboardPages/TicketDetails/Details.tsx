import React from "react";
import TicketAttachment from "./TicketAttachment";
import TicketComments from "./TicketComments";
import TicketHistory from "./TicketHistory";
import TicketSingleDetails from "./TicketSingleDetails";

<<<<<<< HEAD
function Details({ issue }: any) {
=======
function Details() {
>>>>>>> 690308be5cd3958a24faf9db8d12562fb7ae173a
    return (
        <div className="mx-4 grid grid-cols-1 gap-y-10 gap-x-4 px-2 py-10 md:mx-auto md:max-w-3xl lg:mx-auto lg:max-w-7xl lg:px-8 ">
            {/* details side */}
            <div className="pr-2">
<<<<<<< HEAD
                <TicketSingleDetails issue={issue} />
=======
                <TicketSingleDetails />
>>>>>>> 690308be5cd3958a24faf9db8d12562fb7ae173a
            </div>

            {/* comment side */}
            <div>
<<<<<<< HEAD
                <TicketComments issue={issue} />
=======
                <TicketComments />
>>>>>>> 690308be5cd3958a24faf9db8d12562fb7ae173a
            </div>
            {/* History side */}
            <div className="pr-2 pt-5">
                <TicketHistory />
            </div>

            {/* comment side */}
            <div className="">
                <TicketAttachment />
            </div>
        </div>
    );
}

export default Details;
