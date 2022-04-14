import React from "react";
import Details from "./Details";
import TicketEdit from "./TicketEdit";

function Main() {
    return (
        <section className="min-h-screen bg-gray-100 py-10">
            <Details />
            <TicketEdit />
        </section>
    );
}

export default Main;
