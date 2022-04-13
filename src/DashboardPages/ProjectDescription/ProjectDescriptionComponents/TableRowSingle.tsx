/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styles from "../../../styles/projectDescriptionTable.module.css";

function TableRowSingle({ project }) {
    return (
        <tr className="border-b border-gray-400">
            <td className={styles.td}>{project.name}</td>
            <td className={styles.td}>{project.description}</td>
            <td className={styles.td}>
                <a className="text-blue-500" href="#">
                    Manage Users
                </a>{" "}
                <a className="text-blue-500" href="#">
                    More Details
                </a>{" "}
            </td>
        </tr>
    );
}

export default TableRowSingle;
