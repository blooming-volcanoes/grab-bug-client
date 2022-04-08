/* eslint-disable react/button-has-type */
import Link from "next/link";
import React from "react";
import Text from "./Text";

function UserSingle({ user }: any) {
    return (
        <>
            <div className="flex items-center justify-between">
                <Text className="w-3/12">{user.name}</Text>
                <Text className="w-6/12">{user.email}</Text>
                <div className="flex w-3/12 flex-col">
                    <Link href="/" passHref>
                        <Text className="cursor-pointer text-indigo-600">Manage Users</Text>
                    </Link>
                    <Link href="/" passHref>
                        <Text className="cursor-pointer text-indigo-600">Details</Text>
                    </Link>
                </div>
            </div>
            <hr />
        </>
    );
}

export default UserSingle;
