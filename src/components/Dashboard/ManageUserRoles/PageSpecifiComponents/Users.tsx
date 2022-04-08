/* eslint-disable react/prop-types */
import React from "react";
import Text from "./Text";

function Users({ users }: any) {
    return (
        <div>
            {users.map((user: any) => (
                <Text key={user.id} className="cursor-pointer">
                    {user.name}
                </Text>
            ))}
        </div>
    );
}

export default Users;
