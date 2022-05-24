/* eslint-disable no-nested-ternary */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styles from "../../styles/projectDescriptionTable.module.css";

function TableRowSingle({ issue }: any) {
    console.log(issue);
    return (
        <tr className="border-b border-gray-400">
            <td className={`${styles.td} w-[400px]`}>{issue.title}</td>
            <select name="sfa" id="dsf">
                <option className="h-fit w-full" value="gs">
                    hifdsf
                </option>
                <option value="gs">hidfsf</option>
            </select>
            <td className={`${styles.td} md:w-[300px]`}>{issue.reporterName}</td>
            <td className={`${styles.td} md:w-[300px]`}>
                {new Date(issue.createdAt).toLocaleString()}
            </td>
            <td className={`${styles.td} md:w-[300px]`}>{issue.status}</td>
            <td className={`${styles.td} md:w-[300px]`}>{issue.status}</td>
            <td className={`${styles.td} md:w-[300px]`}>{issue.status}</td>
        </tr>
    );
}

export default TableRowSingle;
