import React from "react";

function TicketsTableHead() {
    return (
        <div className="mt-2 rounded-[20px] bg-sky-700 p-4 md:mt-0">
            <h1 className="text-2xl font-bold uppercase text-[#FAFFAF]">Ticket of this project</h1>
            <p className="text-[#95D1CC]">Available ticket of this project</p>
        </div>
    );
}

export default TicketsTableHead;
