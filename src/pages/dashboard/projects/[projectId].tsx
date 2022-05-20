import ProjectDetails from "DashboardPages/ProjectDetails/ProjectDetails";
import DashboardLayout from "Layouts/DashboardLayout";
import React from "react";
import ProjectHttpReq from "services/Project.service";

function ProjectSingle({ project, peopleAssigned, tickets }: any) {
    console.log(project);
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

    return {
        props: {
            project: project.project,
            peopleAssigned: project.project.assignedPeople,
            tickets: project.project.issues,
        },
    };
}
