import ProjectDetails from "DashboardPages/ProjectDetails/ProjectDetails";
import DashboardLayout from "Layouts/DashboardLayout";
import React from "react";
import ProjectHttpReq from "services/Project.service";

<<<<<<< HEAD
function ProjectSingle({ project, peopleAssigned, tickets }: any) {
    return (
        <DashboardLayout>
            <ProjectDetails
                key={project.id}
                peopleAssigned={peopleAssigned}
                tickets={tickets}
                project={project}
            />
=======
function ProjectSingle({ project, users, tickets }: any) {
    return (
        <DashboardLayout>
            <ProjectDetails key={project.id} users={users} tickets={tickets} project={project} />
>>>>>>> 690308be5cd3958a24faf9db8d12562fb7ae173a
        </DashboardLayout>
    );
}

export default ProjectSingle;

export async function getServerSideProps(context: any) {
    const { params } = context;
    const { projectId } = params;
    const project = await ProjectHttpReq.getProject(projectId);
<<<<<<< HEAD

=======
    const users = [
        { id: 1, name: "A.S.M. Habibullah Sadique", email: "abc@firemail.com", role: "Admin" },
        { id: 2, name: "Awal Hossain", email: "abc@firemail.com", role: "Backend Dev" },
        { id: 3, name: "Sushanto Gupta", email: "abc@firemail.com", role: "Project Manager" },
        { id: 4, name: "Kamrul Haider Chy", email: "abc@firemail.com", role: "Frontend Dev" },
        { id: 5, name: "Tajkier Haque Raiyan", email: "abc@firemail.com", role: "Full Stack Dev" },
        { id: 6, name: "Mostafa Sujon", email: "abc@firemail.com", role: "Frontend Dev" },
    ];
>>>>>>> 690308be5cd3958a24faf9db8d12562fb7ae173a
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
            project: project.project,
<<<<<<< HEAD
            peopleAssigned: project.project.assignedPeople,
=======
            users,
>>>>>>> 690308be5cd3958a24faf9db8d12562fb7ae173a
            tickets,
        },
    };
}
<<<<<<< HEAD
=======

// import DashboardLayout from "Layouts/DashboardLayout";
// import { useRouter } from "next/router";
// import React from "react";

// function ProjectSingle() {
//     const router = useRouter();
//     const { projectId } = router.query;
//     return (
//         <DashboardLayout>
//             <div>{projectId}</div>
//         </DashboardLayout>
//     );
// }

// export default ProjectSingle;
>>>>>>> 690308be5cd3958a24faf9db8d12562fb7ae173a
