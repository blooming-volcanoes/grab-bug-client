import React from "react";

function ProjectDetailsHeading({ project }: any) {
    return (
        <div className="rounded-[3px] bg-gradient-to-r from-[#22577E] via-[#5584AC] to-[#22577E] p-4">
            <h1 className="text-2xl font-bold uppercase text-[#FAFFAF]">{project.name}</h1>
            <p className="text-[#95D1CC]">Deadline: {new Date(project.deadline).toDateString()}</p>
        </div>
    );
}

export default ProjectDetailsHeading;
