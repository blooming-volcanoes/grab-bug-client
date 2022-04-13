import React from "react";
import Text from "./Text";

function TableHeading() {
    return (
        <>
            {/* table heading */}
            <div className="flex items-center justify-between text-left">
                <Text className="w-3/12 font-bold">User Name</Text>
                <Text className="w-6/12 font-bold">Email</Text>
                <Text className="w-3/12 font-bold">Role</Text>
            </div>
            <hr />
        </>
    );
}

export default TableHeading;
