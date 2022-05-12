/* eslint-disable no-underscore-dangle */
import Link from "next/link";
import React from "react";

function TableRow({ ticket }: any) {
    return (
        <tr className="border-b">
            <td className="table-td">{ticket.title}</td>
            <td className="table-td">{ticket.severity}</td>
            <td className="table-td">{ticket.status}</td>
            <td className="table-td">{ticket.bugCategory}</td>
            <td className="table-td">{ticket.reporterName}</td>
            <td className="table-td">
                {" "}
                <li className="text-blue-600 underline decoration-solid">
                    <Link
<<<<<<< HEAD
                        href={`/dashboard/tickets/approve/${ticket._id}`}
=======
                        href={`/dashboard/tickets/${ticket._id}`}
>>>>>>> 690308be5cd3958a24faf9db8d12562fb7ae173a
                        // as="/dashboard/tickets/issue-details"
                    >
                        Approve/Reject
                    </Link>
                </li>
                <li className="text-blue-600 underline decoration-solid">
<<<<<<< HEAD
                    <Link href={`/dashboard/tickets/details/${ticket._id}`}>Details</Link>
=======
                    <Link href="/home">Details</Link>
>>>>>>> 690308be5cd3958a24faf9db8d12562fb7ae173a
                </li>
            </td>
        </tr>
    );
}

export default TableRow;
