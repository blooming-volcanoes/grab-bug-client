import ProjectDetails from "DashboardPages/ProjectDetails/ProjectDetails";
import DashboardLayout from "Layouts/DashboardLayout";
import React from "react";

const projectDetails = ({ projects, users, tickets }: any) => (
    <DashboardLayout>
        {projects.map((project: any) => (
            <ProjectDetails key={project.id} users={users} tickets={tickets} project={project} />
        ))}
    </DashboardLayout>
);

export default projectDetails;

export function getServerSideProps() {
    const projects = [
        { id: 1, name: "Project 1", description: "Description  Description Description" },
    ];
    const users = [
        { id: 1, name: "A.S.M. Habibullah Sadique", email: "abc@firemail.com", role: "Admin" },
        { id: 2, name: "Awal Hossain", email: "abc@firemail.com", role: "Backend Dev" },
        { id: 3, name: "Sushanto Gupta", email: "abc@firemail.com", role: "Project Manager" },
        { id: 4, name: "Kamrul Haider Chy", email: "abc@firemail.com", role: "Frontend Dev" },
        { id: 5, name: "Tajkier Haque Raiyan", email: "abc@firemail.com", role: "Full Stack Dev" },
        { id: 6, name: "Mostafa Sujon", email: "abc@firemail.com", role: "Frontend Dev" },
    ];
    const tickets = [
        {
            id: 1,
            title: "Frontend Bug",
            submitter: "Tajkier Haque Raiyan",
            developer: "Kamrul Haider Chy",
            status: "open",
            created: "14/04/2022",
        },
        {
            id: 2,
            title: "Backend Bug",
            submitter: "Tajkier Haque Raiyan",
            developer: "Awal Hossain",
            status: "open",
            created: "15/04/2022",
        },
        {
            id: 3,
            title: "Login Bug",
            submitter: "A.S.M Habibullah Sadique",
            developer: "Tajkier Haque Raiyan",
            status: "open",
            created: "13/04/2022",
        },
    ];

    return {
        props: {
            projects,
            users,
            tickets,
        },
    };
}
