import React from "react";

function TicketsTableHead() {
    return (
        <div className="mt-2 rounded-[3px] bg-gradient-to-r from-[#22577E] via-[#5584AC] to-[#22577E] p-4 md:mt-0">
            <h1 className="text-2xl font-bold uppercase text-[#FAFFAF]">Ticket of this project</h1>
            <p className="text-[#95D1CC]">Available ticket of this project</p>
        </div>
    );
}

export default TicketsTableHead;
