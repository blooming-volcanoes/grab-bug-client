/* eslint-disable react/prop-types */
import React from "react";
import UserSingle from "./UserSingle";

function UserList({ users }: any) {
    return (
        <div className="space-y-2">
            {users.map((user: any) => (
                <UserSingle key={user.id} user={user} />
            ))}
        </div>
    );
}

export default UserList;
