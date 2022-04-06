import ManageUserRoles from "components/Dashboard/ManageUserRoles/ManageUserRoles";
import React from "react";

const manageUserRoles = ({ users, roles }) => (
    <div className="container mx-auto mt-10 bg-gray-100 p-5">
        <ManageUserRoles users={users} roles={roles} />
    </div>
);

export default manageUserRoles;

export function getServerSideProps() {
    const users = [
        { id: 1, name: "A.S.M. Habibullah Sadique" },
        { id: 2, name: "Awal Hossain" },
        { id: 3, name: "Sushanto Gupta" },
        { id: 4, name: "Kamrul Haider Chy" },
        { id: 5, name: "Tajkier Haque Raiyan" },
        { id: 6, name: "Mostafa Sujon" },
    ];
    const roles = ["Prject Manager", "Developer", "Submitter", "Designer", "Reviewer"];
    return {
        props: {
            users,
            roles,
        },
    };
}
