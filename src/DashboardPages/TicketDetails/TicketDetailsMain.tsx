import React from "react";
import Details from "./Details";
<<<<<<< HEAD
import EditIssue from "./EditIssue";

function Main({ issue }: { issue: any }) {
    console.log(issue, "ISSUE");
    return (
        <section className="">
            <Details issue={issue} />
            <EditIssue issue={issue} />
=======
import TicketEdit from "./TicketEdit";

function Main() {
    return (
        <section className="">
            <Details />
            <TicketEdit />
>>>>>>> 690308be5cd3958a24faf9db8d12562fb7ae173a
        </section>
    );
}

export default Main;
