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
    <div className="my-3 mx-2">
        <div className="container mx-auto rounded-[20px] border border-sky-700 md:p-4">
            <div className="flex flex-col justify-between space-x-3 md:flex-row">
                <div className="md:w-[40%]">
                    <HeadingText />
                    <div className="px-4">
                        <SelectUsers users={users} />
                        <AssignRoles roles={roles} />
                        <button className="w-[100px] rounded bg-sky-700 py-1 text-white hover:text-blue-300">
                            Submit
                        </button>
                    </div>
                </div>
                <div className="md:w-[60%]">
                    <TableTopText />
                    <div>
                        {/* number of entries and search */}
                        <div className="flex flex-col justify-between px-4 py-2 md:flex-row">
                            <NumberOfEntries users={users} />
                            <SearchUser />
                        </div>
                        <div className="w-full overflow-x-scroll">
                            <table className="mt-2 w-[900px] border border-sky-900">
                                {/* Users table */}
                                <TableHeading />
                                {/* users lists */}
                                <UserList users={users} roles={roles} />
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default ManageUserRoles;
