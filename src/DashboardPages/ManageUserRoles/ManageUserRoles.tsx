/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
import React from "react";
import HeadingText from "./ManageUserRolesComponents/HeadingText";
import NumberOfEntries from "./ManageUserRolesComponents/NumberOfEntries";
import SearchUser from "./ManageUserRolesComponents/SearchUser";
import SelectUserAndAssignRoles from "./ManageUserRolesComponents/SelectUserAndAssignRoles";
import TableHeading from "./ManageUserRolesComponents/TableHeading";
import TableTopText from "./ManageUserRolesComponents/TableTopText";
import UserList from "./ManageUserRolesComponents/UserList";

<<<<<<< HEAD
const ManageUserRoles = ({ users, roles, project }: any) => (
=======
const ManageUserRoles = ({ users, roles }: any) => (
>>>>>>> 690308be5cd3958a24faf9db8d12562fb7ae173a
    <div className="m-0 md:m-3">
        <div className="container mx-auto h-max rounded-[3px] shadow-[0_0_10px_#5584AC] md:p-3">
            <div className="flex flex-col justify-between space-x-3 md:flex-row">
                <div className="md:w-[40%]">
<<<<<<< HEAD
                    <HeadingText project={project} />
                    <div className="px-4">
                        <SelectUserAndAssignRoles users={users} roles={roles} project={project} />
=======
                    <HeadingText />
                    <div className="px-4">
                        <SelectUserAndAssignRoles users={users} roles={roles} />
>>>>>>> 690308be5cd3958a24faf9db8d12562fb7ae173a
                    </div>
                </div>
                <div className="md:w-[60%]">
                    <TableTopText />
                    <div>
                        {/* number of entries and search */}
                        <div className="flex flex-col justify-between px-4 py-2 md:flex-row">
<<<<<<< HEAD
                            <NumberOfEntries users={project.assignedPeople} />
=======
                            <NumberOfEntries users={users} />
>>>>>>> 690308be5cd3958a24faf9db8d12562fb7ae173a
                            <SearchUser />
                        </div>
                        <div className="w-full overflow-auto rounded-[3px] border border-[#22577E]">
                            <table className="w-[900px]">
                                {/* Users table */}
                                <TableHeading />
                                {/* users lists */}
<<<<<<< HEAD
                                <UserList users={project.assignedPeople} roles={roles} />
=======
                                <UserList users={users} roles={roles} />
>>>>>>> 690308be5cd3958a24faf9db8d12562fb7ae173a
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default ManageUserRoles;
