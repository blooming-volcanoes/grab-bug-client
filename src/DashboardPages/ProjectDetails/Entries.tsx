import React from "react";

<<<<<<< HEAD
function Entries({ peopleAssigned }: any) {
    return (
        <div className="">
            <span className="uppercase"> Show </span>
            <span> {peopleAssigned.length} </span>
=======
function Entries({ users }: any) {
    return (
        <div className="">
            <span className="uppercase"> Show </span>
            <span> {users.length} </span>
>>>>>>> 690308be5cd3958a24faf9db8d12562fb7ae173a
            <span className="uppercase"> Entries </span>
        </div>
    );
}

export default Entries;
