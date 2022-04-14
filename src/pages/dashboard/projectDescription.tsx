import ProjectDescriptionTable from "DashboardPages/ProjectDescription/ProjectDescriptionTable";
import React from "react";

// eslint-disable-next-line arrow-body-style
const projectDescription = ({ projects }: any) => {
    return (
        <div>
            <ProjectDescriptionTable projects={projects} />
        </div>
    );
};

export default projectDescription;

export function getServerSideProps() {
    const projects = [
        { id: 1, name: "Project 1", description: "Description  Description Description" },
        { id: 2, name: "Project 2", description: "Description  Description Description" },
        { id: 3, name: "Project 3", description: "Description  Description Description" },
        { id: 4, name: "Project 4", description: "Description  Description Description" },
        { id: 5, name: "Project 5", description: "Description  Description Description" },
    ];
    return {
        props: {
            projects,
        },
    };
}
