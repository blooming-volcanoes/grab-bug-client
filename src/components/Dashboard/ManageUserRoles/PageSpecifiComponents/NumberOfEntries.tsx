import React from "react";
import Text from "./Text";

function NumberOfEntries({ users }) {
    return <Text className="font-light">showing {users.length} entires</Text>;
}

export default NumberOfEntries;
