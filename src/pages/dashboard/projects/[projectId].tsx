import ProjectDetails from "DashboardPages/ProjectDetails/ProjectDetails";
import DashboardLayout from "Layouts/DashboardLayout";
import React from "react";
import ProjectHttpReq from "services/Project.service";

function ProjectSingle({ project, peopleAssigned, tickets }: any) {
    return (
        <DashboardLayout>
            <ProjectDetails
                key={project.id}
                peopleAssigned={peopleAssigned}
                tickets={tickets}
                project={project}
            />
        </DashboardLayout>
    );
}

export default ProjectSingle;

export async function getServerSideProps(context: any) {
    const { params } = context;
    const { projectId } = params;
    const project = await ProjectHttpReq.getProject(projectId);

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
            peopleAssigned: project.project.assignedPeople,
            tickets,
        },
    };
}
