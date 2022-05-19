/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styles from "../../styles/projectDescriptionTable.module.css";

function TableRowSingle({ person }: any) {
    return (
        <tr className="border-b border-gray-400">
            <td className={`${styles.td} w-[100px]`}>{person.assignedUser.name}</td>
            <td className={`${styles.td} w-[100px]`}>{person.assignedUser.email}</td>
            <td className={`${styles.td} w-[100px]`}>{person.role}</td>
        </tr>
    );
}

export default TableRowSingle;
