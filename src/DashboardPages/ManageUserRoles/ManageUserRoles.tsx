/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
import React from "react";
import AssignRoles from "./ManageUserRolesComponents/AssignRoles";
import HeadingText from "./ManageUserRolesComponents/HeadingText";
import NumberOfEntries from "./ManageUserRolesComponents/NumberOfEntries";
import SearchUser from "./ManageUserRolesComponents/SearchUser";
import SelectUsers from "./ManageUserRolesComponents/SelectUsers";
import TableHeading from "./ManageUserRolesComponents/TableHeading";
import TableTopText from "./ManageUserRolesComponents/TableTopText";
import UserList from "./ManageUserRolesComponents/UserList";

const ManageUserRoles = ({ users, roles }: any) => (
    <div className="flex flex-col justify-between space-x-20 lg:flex-row">
        <div className="w-1/3">
            <HeadingText />
            <div>
                <SelectUsers users={users} />
                <AssignRoles roles={roles} />
                <button className="w-full rounded bg-indigo-500 py-1 text-white">Submit</button>
            </div>
        </div>
        <div className="w-2/3">
            <TableTopText />
            <div>
                {/* number of entries and search */}
                <div className="mb-3 flex justify-between">
                    <NumberOfEntries users={users} />
                    <SearchUser />
                </div>
                <div>
                    {/* Users table */}
                    <TableHeading />
                    {/* users lists */}
                    <UserList users={users} />
                    <hr />
                </div>
                <div />
            </div>
        </div>
    </div>
);

export default ManageUserRoles;
