/* eslint-disable react/prop-types */
import React from "react";

function SelectOption({ roles }) {
    return (
        <>
            {roles.map((role) => (
                <option value={role} key={role}>
                    {role}
                </option>
            ))}
        </>
    );
}

export default SelectOption;
