// This component will be deleted later

import Link from "next/link";
import React from "react";

function Navigation() {
    const linkStyle = { padding: "20px", background: "#ddd" };
    const containerStyle = {
        background: "#eee",
        display: "flex",
        gap: "30px",
        justifyContent: "center",
    };
    return (
        <div style={containerStyle}>
            <Link href="/dashboard">
                <a style={linkStyle}>Dashboard</a>
            </Link>
            <Link href="/dashboard/manageUserRoles">
                <a style={linkStyle}>Manage User Roles</a>
            </Link>
            <Link href="/dashboard/projectDescription">
                <a style={linkStyle}>Project Description</a>
            </Link>
            <Link href="/dashboard/projectDetails">
                <a style={linkStyle}>Project Details</a>
            </Link>
            <Link href="/dashboard/ticketDetails">
                <a style={linkStyle}>Ticket Details</a>
            </Link>
            <Link href="/dashboard/tickets">
                <a style={linkStyle}>Tickets</a>
            </Link>
        </div>
    );
}

export default Navigation;
