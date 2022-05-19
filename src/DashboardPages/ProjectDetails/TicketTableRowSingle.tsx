/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from "next/link";
import React from "react";
import styles from "../../styles/projectDescriptionTable.module.css";

function TicketTableRowSingle({ ticket }: any) {
    console.log(ticket);
    return (
        <tr className="border-b border-gray-400">
            <td className={`${styles.td} w-[200px]`}>{ticket.title}</td>
            <td className={`${styles.td} w-[200px]`}>{ticket.reporterName}</td>
            <td className={`${styles.td} w-[200px]`}>{ticket.severity}</td>
            <td className={`${styles.td} w-[200px]`}>{ticket.bugCategory}</td>
            <td className={`${styles.td} w-[200px]`}>{ticket.status}</td>
            <td className={`${styles.td} w-[200px]`}>
                {new Date(ticket.createdAt).toLocaleDateString()}{" "}
                {new Date(ticket.createdAt).toLocaleTimeString()}
            </td>
            <td className={`${styles.td} w-[200px]`}>
                {`${ticket.bugDescription.slice(0, 40)}...`}{" "}
                {/** shows only 40 characters coz description is too long */}
            </td>
            <td className={`${styles.td} md:w-[300px]`}>
                <div className="flex justify-center">
                    <Link href={`/dashboard/tickets/details/${ticket._id}`}>
                        <a className="table-btn ">Details</a>
                    </Link>
                </div>
            </td>
        </tr>
    );
}

export default TicketTableRowSingle;
