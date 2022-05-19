/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-underscore-dangle */

import Link from "next/link";
import React from "react";
import styles from "../../../styles/projectDescriptionTable.module.css";

function TableRowSingle({ project }: any) {
    return (
        <tr className="border-b border-gray-400">
            <td className={`${styles.td} w-[200px]`}>{project.name}</td>
            <td className={`${styles.td} w-[500px]`}>{project.description}</td>
            <td className={`${styles.td} md:w-[300px]`}>
                <div className="flex justify-center">
                    <Link href={`/dashboard/projects/${project._id}`}>
                        <a className="table-btn ">Project Details</a>
                    </Link>
                    <Link href={`/dashboard/projects/manageUserRoles/${project._id}`}>
                        <a className="table-btn mx-2">Manage Users</a>
                    </Link>
                </div>
            </td>
        </tr>
    );
}

export default TableRowSingle;
