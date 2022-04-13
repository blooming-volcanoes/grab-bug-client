import ProjectDescriptionTable from "DashboardPages/ProjectDescription/ProjectDescriptionTable";
import React from "react";

// eslint-disable-next-line arrow-body-style
const projectDescription = ({ projects }) => {
    return (
        <div className="relative h-24 w-full sm:mx-auto sm:w-full md:w-5/6">
            <div className="z-50 w-full overflow-scroll rounded border bg-slate-100">
                <ProjectDescriptionTable projects={projects} />
            </div>
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
