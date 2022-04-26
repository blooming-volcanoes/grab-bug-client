import React, { useState } from "react";
import Text from "./Text";

function SelectUserAndAssignRoles({ users, roles }: any) {
    const [selected, setSelected] = useState("");
    const handleChange = (e: any) => {
        setSelected(e.target.value);
    };
    return (
        <>
            <div className="my-2 w-full">
                <Text className="mb-2 text-[20px]">Select 1 or more users</Text>
                <div className="mb-5 max-h-24 w-full overflow-y-auto border-2 bg-white">
                    <div>
                        {users.map((user: any) => (
                            <Text key={user.id} className="cursor-pointer hover:text-sky-700">
                                {user.name}
                            </Text>
                        ))}
                    </div>
                </div>
            </div>
            <div className="mb-5">
                <Text className="text-[20px]">Select the role to assign</Text>
                <select className="w-full" value={selected} onChange={handleChange}>
                    {roles.map((role: any) => (
                        <option value={role} key={role}>
                            {role}
                        </option>
                    ))}
                </select>
            </div>
        </>
    );
}

export default SelectUserAndAssignRoles;
