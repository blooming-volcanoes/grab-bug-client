<<<<<<< HEAD
/* eslint-disable no-underscore-dangle */
=======
>>>>>>> 690308be5cd3958a24faf9db8d12562fb7ae173a
/* eslint-disable import/extensions */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import TableRowSingle from "./TableRowSingle";

<<<<<<< HEAD
function TableBody({ peopleAssigned }: any) {
    console.log("====================================");
    console.log(peopleAssigned);
    console.log("====================================");
    return (
        <tbody className="text-center">
            {peopleAssigned.map((person: any) => (
                <TableRowSingle person={person} key={person._id} />
=======
function TableBody({ users }: any) {
    return (
        <tbody className="text-center">
            {users.map((user: any) => (
                <TableRowSingle user={user} key={user.id} />
>>>>>>> 690308be5cd3958a24faf9db8d12562fb7ae173a
            ))}
        </tbody>
    );
}

export default TableBody;
