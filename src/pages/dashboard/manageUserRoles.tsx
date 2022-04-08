import ManageUserRoles from "components/Dashboard/ManageUserRoles/ManageUserRoles";
import { GetServerSideProps } from "next";
import React from "react";

const manageUserRoles = ({ users, roles }: any) => (
    <div className="container mx-auto mt-10 flex h-screen items-center justify-center">
        <ManageUserRoles users={users} roles={roles} />
    </div>
);

export default manageUserRoles;

export const getServerSideProps: GetServerSideProps = async () => {
    const users = [
        { id: 1, name: "A.S.M. Habibullah Sadique", email: "abc@firemail.com" },
        { id: 2, name: "Awal Hossain", email: "abc@firemail.com" },
        { id: 3, name: "Sushanto Gupta", email: "abc@firemail.com" },
        { id: 4, name: "Kamrul Haider Chy", email: "abc@firemail.com" },
        { id: 5, name: "Tajkier Haque Raiyan", email: "abc@firemail.com" },
        { id: 6, name: "Mostafa Sujon", email: "abc@firemail.com" },
    ];
    const roles = ["Prject Manager", "Developer", "Submitter", "Designer", "Reviewer"];
    return {
        props: {
            users,
            roles,
        },
    };
};
