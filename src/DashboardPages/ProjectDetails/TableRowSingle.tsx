/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styles from "../../styles/projectDescriptionTable.module.css";

<<<<<<< HEAD
function TableRowSingle({ person }: any) {
    return (
        <tr className="border-b border-gray-400">
            <td className={`${styles.td} w-[100px]`}>{person.assignedUser.name}</td>
            <td className={`${styles.td} w-[100px]`}>{person.assignedUser.email}</td>
            <td className={`${styles.td} w-[100px]`}>{person.role}</td>
=======
function TableRowSingle({ user }: any) {
    return (
        <tr className="border-b border-gray-400">
            <td className={`${styles.td} w-[100px]`}>{user.name}</td>
            <td className={`${styles.td} w-[100px]`}>{user.email}</td>
            <td className={`${styles.td} w-[100px]`}>{user.role}</td>
>>>>>>> 690308be5cd3958a24faf9db8d12562fb7ae173a
        </tr>
    );
}

export default TableRowSingle;
