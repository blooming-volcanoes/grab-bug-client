/* eslint-disable no-nested-ternary */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Countdown from "react-countdown";
import styles from "../../styles/projectDescriptionTable.module.css";

function TableRowSingle({ issue, project, index }: any) {
    const [datesData] = useState<any>([
        "450000678",
        "980567456",
        "230785987",
        "980087656",
        "340087964",
        "760000000",
        "870000000",
        "980000000",
        "670000000",
        "610000000",
        "450000678",
        "980567456",
        "230785987",
        "980087656",
        "340087964",
        "760000000",
        "870000000",
        "980000000",
        "670000000",
        "610000000",
    ]);
    const [issueStatus] = useState<any>([
        "reported",
        "working",
        "stuck",
        "on progress",
        "finished",
    ]);
    console.log(project, "project");
    return (
        <tr className="border-b border-gray-400">
            <td className={`${styles.td} w-[400px]`}>{issue.title}</td>
            <select name="sfa" id="dsf" className="h-[68px] w-[200px] outline-none">
                {issueStatus.map((status: any) => (
                    <option value={status}>{status}</option>
                ))}
            </select>
            <td className={`${styles.td} md:w-[300px]`}>{issue.reporterName}</td>
            <td className={`${styles.td} md:w-[300px]`}>
                {new Date(issue.createdAt).toLocaleString()}
            </td>
            <td className={`${styles.td} md:w-[300px]`}>
                {new Date(issue.createdAt).toLocaleTimeString()}
            </td>
            <td className={`${styles.td} md:w-[300px]`}>
                <Countdown date={Date.now() + Number(datesData[index])} />
            </td>
            <td className={`${styles.td} md:w-[300px]`}>{issue.status}</td>
        </tr>
    );
}

export default TableRowSingle;
