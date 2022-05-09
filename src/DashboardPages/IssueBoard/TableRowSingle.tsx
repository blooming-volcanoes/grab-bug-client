/* eslint-disable no-nested-ternary */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styles from "../../styles/projectDescriptionTable.module.css";

function TableRowSingle({ issue }: any) {
    return (
        <tr className="border-b border-gray-400">
            <td className={`${styles.td} w-[200px]`}>{issue.name}</td>
            {issue.status === "working" ? (
                <td className={`${styles.td} w-[500px] bg-yellow-500`}>{issue.status}</td>
            ) : issue.status === "pending" ? (
                <td className={`${styles.td} w-[500px] bg-gray-500`}>{issue.status}</td>
            ) : (
                <td className={`${styles.td} w-[500px]`}>{issue.status}</td>
            )}
            <td className={`${styles.td} md:w-[300px]`}>{issue.person}</td>
            <td className={`${styles.td} md:w-[300px]`}>{issue.time}</td>
            <td className={`${styles.td} md:w-[300px]`}>{issue.timeline}</td>
            <td className={`${styles.td} md:w-[300px]`}>{issue.countdown}</td>
            <td className={`${styles.td} md:w-[300px]`}>{issue.files}</td>
        </tr>
    );
}

export default TableRowSingle;
