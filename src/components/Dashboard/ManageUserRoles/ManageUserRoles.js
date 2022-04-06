/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
import React from "react";
import AssignRoles from "./PageSpecifiComponents/AssignRoles";
import HeadingText from "./PageSpecifiComponents/HeadingText";
import SelectUsers from "./PageSpecifiComponents/SelectUsers";

const ManageUserRoles = ({ users, roles }) => (
    <div className="flex flex-row">
        <div className="w-1/3">
            <HeadingText />
            <div>
                <SelectUsers users={users} />
                <AssignRoles roles={roles} />
                <button className="w-full rounded bg-indigo-500 py-1 text-white">Submit</button>
            </div>
        </div>
        <div className="w-2/3">
            {/* All personnel */}
            <div>all personnel</div>
        </div>
    </div>
);

export default ManageUserRoles;
