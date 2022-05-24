/* eslint-disable no-nested-ternary */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import Countdown from "react-countdown";
import IssueHttpReq from "services/Issue.service";
import styles from "../../styles/projectDescriptionTable.module.css";

function TableRowSingle({ issue, project, index }: any) {
    const [loading, setLoading] = useState(false);
    const [files, setFiles] = useState<any[]>([]);
    const [showDropdown, setShowDropdown] = useState(false);

    const fetchFiles = async () => {
        setLoading(true);
        try {
            const data = await IssueHttpReq.getIssuesFiles();
            setFiles(data);
            console.log(data);
        } catch (error: any) {
            if (error.response) {
                const { message } = error.response.data;
                console.log(message);
            }
            setLoading(false);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchFiles();
    }, []);
    const handelDownload = (e: any) => {
        if (e.target.value === "" || e.target.value === showDropdown) return;
        window.open(e.target.value);
    };

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
            <td className={`${styles.td} flex flex-col  md:w-[300px]`}>
                {files.length <= 0 && " Upload files"}

                {files.length > 0 &&
                    files.slice(0, 1).map((file) => (
                        <select
                            onClick={(e) => {
                                e.stopPropagation();
                                handelDownload(e);
                                setShowDropdown(e.target.value);
                            }}
                            className="mx-auto w-2/3 rounded border-none bg-gray-100 ring-2 focus:ring-2"
                        >
                            <option value="">Select</option>
                            {file.attachments.map((f) => (
                                <option value={f.path}>{f.fileName}</option>
                            ))}
                        </select>
                    ))}
            </td>
        </tr>
    );
}

export default TableRowSingle;
