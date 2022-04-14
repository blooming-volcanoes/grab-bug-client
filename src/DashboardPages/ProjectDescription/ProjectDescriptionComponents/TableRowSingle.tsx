/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styles from "../../../styles/projectDescriptionTable.module.css";

function TableRowSingle({ project }: any) {
    return (
        <tr className="border-b border-gray-400">
            <td className={`${styles.td} w-[200px]`}>{project.name}</td>
            <td className={`${styles.td} w-[700px]`}>{project.description}</td>
            <td className={`${styles.td} w-[300px]`}>
                <a
                    className="h-[30px] rounded-lg bg-slate-500 p-2 text-white hover:text-black"
                    href="#"
                >
                    Manage Users
                </a>{" "}
                <a
                    className="h-[30px] rounded-lg bg-slate-500 p-2 text-white hover:text-black"
                    href="#"
                >
                    More Details
                </a>{" "}
            </td>
        </tr>
    );
}

export default TableRowSingle;
