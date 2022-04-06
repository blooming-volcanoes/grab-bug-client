import React from "react";
import Text from "./Text";

function TableTopText() {
    return (
        <div className="mb-5 bg-indigo-500 p-5 text-white">
            <Text className="mb-2 text-2xl font-bold">All personnel</Text>
            <Text className="text-sm">All the users in the database</Text>
        </div>
    );
}

export default TableTopText;
