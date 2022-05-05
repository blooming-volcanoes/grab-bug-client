import React from "react";
import Details from "./Details";
import TicketEdit from "./TicketEdit";

function Main({ issue }: any) {
    console.log(issue, "ISSUE");
    return (
        <section className="">
            <Details issue={issue} />
            <TicketEdit issue={issue} />
        </section>
    );
}

export default Main;
