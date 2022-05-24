/* eslint-disable no-nested-ternary */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import IssueHttpReq from "services/Issue.service";
import styles from "../../styles/projectDescriptionTable.module.css";

function TableRowSingle({ issue }: any) {
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
    const handelDownload = (e) => {
        if (e.target.value === "" || e.target.value === showDropdown) return;
        window.open(e.target.value);
    };
    console.log(files);

    return (
        <tr className="border-b border-gray-400">
            <td className={`${styles.td} w-[200px]`}>{issue.title}</td>
            {issue.status === "working" ? (
                <td className={`${styles.td} w-[500px] bg-yellow-500`}>{issue.title}</td>
            ) : issue.status === "pending" ? (
                <td className={`${styles.td} w-[500px] bg-gray-500`}>{issue.status}</td>
            ) : (
                <td className={`${styles.td} w-[500px]`}>{issue.status}</td>
            )}
            <td className={`${styles.td} md:w-[300px]`}>{issue.reporterName}</td>
            <td className={`${styles.td} md:w-[300px]`}>
                {new Date(issue.createdAt).toLocaleString()}
            </td>
            <td className={`${styles.td} md:w-[300px]`}>{issue.status}</td>
            <td className={`${styles.td} md:w-[300px]`}>{issue.status}</td>
            <td className={`${styles.td} flex flex-col space-y-3 md:w-[300px]`}>
                {files.length <= 0 && " Upload files"}

                {files.length > 0 &&
                    files.slice(0, 1).map((file) => (
                        <select
                            onClick={(e) => {
                                handelDownload(e);
                                setShowDropdown(e.target.value);
                            }}
                            className="w-full rounded border-none bg-gray-100 ring-2 focus:ring-2"
                        >
                            <option value="">Select</option>
                            {file.attachments.map((f) => (
                                <option value={file.path}>{f.fileName}</option>
                            ))}
                        </select>
                    ))}
            </td>
        </tr>
    );
}

export default TableRowSingle;
