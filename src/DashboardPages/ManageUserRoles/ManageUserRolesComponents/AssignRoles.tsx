/* eslint-disable react/prop-types */
import React, { useState } from "react";
import SelectOption from "./SelectOption";
import Text from "./Text";

function AssignRoles({ roles }: any) {
    const [selected, setSelected] = useState("");
    const handleChange = (e: any) => {
        setSelected(e.target.value);
    };
    return (
        <div className="mb-5">
            <Text className="text-[20px]">Select the role to assign</Text>
            <select className="w-full" value={selected} onChange={handleChange}>
                <SelectOption roles={roles} />
            </select>
        </div>
    );
}

export default AssignRoles;
