/* eslint-disable react/prop-types */
import React from "react";

function SelectOption({ roles }: any) {
    return (
        <>
            {roles.map((role: any) => (
                <option value={role} key={role}>
                    {role}
                </option>
            ))}
        </>
    );
}

export default SelectOption;
