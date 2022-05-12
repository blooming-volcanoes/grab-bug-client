/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import React from "react";
import UserSingle from "./UserSingle";

function UserList({ users }: any) {
    return (
        <tbody className="text-center">
            {users.map((user: any) => (
<<<<<<< HEAD
                <UserSingle user={user} key={user.assignedUser._id} />
=======
                <UserSingle user={user} key={user._id} />
>>>>>>> 690308be5cd3958a24faf9db8d12562fb7ae173a
            ))}
        </tbody>
    );
}

export default UserList;
