/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/button-has-type */
import Link from "next/link";
import React from "react";
import styles from "../../../styles/projectDescriptionTable.module.css";

function UserSingle({ user }: any) {
    return (
        <tr className="border-b border-gray-400">
<<<<<<< HEAD
            <td className={`${styles.td} w-[300px]`}>{user.assignedUser.name}</td>
            <td className={`${styles.td} w-[300px]`}>{user.role}</td>
=======
            <td className={`${styles.td} w-[300px]`}>{user.name}</td>
            <td className={`${styles.td} w-[300px]`}>{user.email}</td>
>>>>>>> 690308be5cd3958a24faf9db8d12562fb7ae173a
            <td className={`${styles.td} md:w-[300px]`}>
                <div className="flex justify-center">
                    <Link href="/dashboard/projectDetails">
                        <a className="table-btn ">More Details</a>
                    </Link>
                    <a className="table-btn mx-2" href="#">
                        Manage Users
                    </a>
                </div>
            </td>
        </tr>
    );
}

export default UserSingle;
