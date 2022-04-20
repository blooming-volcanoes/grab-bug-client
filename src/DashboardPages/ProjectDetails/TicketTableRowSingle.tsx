/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from "next/link";
import React from "react";
import styles from "../../styles/projectDescriptionTable.module.css";

function TicketTableRowSingle({ ticket }: any) {
    return (
        <tr className="border-b border-gray-400">
            <td className={`${styles.td} w-[200px]`}>{ticket.title}</td>
            <td className={`${styles.td} w-[200px]`}>{ticket.submitter}</td>
            <td className={`${styles.td} w-[200px]`}>{ticket.developer}</td>
            <td className={`${styles.td} w-[200px]`}>{ticket.status}</td>
            <td className={`${styles.td} w-[200px]`}>{ticket.created}</td>
            <td className={`${styles.td} md:w-[300px]`}>
                <div className="flex justify-center">
                    <Link href="/dashboard/projectDetails">
                        <a className="table-btn ">More Details</a>
                    </Link>
                    <a className="table-btn mx-2" href="#">
                        Manage Users
                    </a>
                </div>
            </td>
        </tr>
    );
}

export default TicketTableRowSingle;
