/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from "next/link";
import React from "react";
import styles from "../../../styles/projectDescriptionTable.module.css";

function TableRowSingle({ project }: any) {
    return (
        <tr className="border-b border-gray-400">
            <td className={`${styles.td} w-[200px]`}>{project.name}</td>
            <td className={`${styles.td} w-[700px]`}>{project.description}</td>
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

export default TableRowSingle;
