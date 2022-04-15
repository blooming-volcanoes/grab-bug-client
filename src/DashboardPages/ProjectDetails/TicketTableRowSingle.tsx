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
            <td className={`${styles.td} w-[300px]`}>
                <Link href="/dashboard/projectDetails">
                    <a className="mr-1 h-[30px] rounded-lg bg-slate-500 p-2 text-white hover:text-black">
                        More Details
                    </a>
                </Link>
                <a
                    className="h-[30px] rounded-lg bg-slate-500 p-2 text-white hover:text-black"
                    href="#"
                >
                    Manage Users
                </a>
            </td>
        </tr>
    );
}

export default TicketTableRowSingle;
