import ProjectDescriptionTable from "DashboardPages/ProjectDescription/ProjectDescriptionTable";
import DashboardLayout from "Layouts/DashboardLayout";
import React from "react";
import ProjectHttpReq from "services/Project.service";

// eslint-disable-next-line arrow-body-style
const allProjects = ({ projects }: any) => {
    return (
        <DashboardLayout>
            <ProjectDescriptionTable projects={projects} />
        </DashboardLayout>
    );
};

export default allProjects;

export async function getServerSideProps() {
    const result = await ProjectHttpReq.getAllProjects();
    return {
        props: {
            projects: result.projects,
        },
    };
}
