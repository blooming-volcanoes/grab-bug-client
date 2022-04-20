/* eslint-disable react/prop-types */
import React from "react";
import EditingForm from "./EditingForm";
import Heading from "./Heading";

function EditAsignTicket({ ticketsId }: any) {
    console.log(ticketsId);
    return (
        <div className="m-0 md:m-3">
            <div className="container mx-auto h-max rounded-[3px] shadow-[0_0_10px_#5584AC] md:p-3">
                <Heading />
                <EditingForm />
            </div>
        </div>
    );
}

export default EditAsignTicket;
