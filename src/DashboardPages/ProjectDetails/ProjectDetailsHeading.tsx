import React from "react";

function ProjectDetailsHeading({ name }: any) {
    return (
        <div className="rounded-[20px] bg-sky-700 p-4">
            <h1 className="text-2xl font-bold uppercase text-[#FAFFAF]">{name}</h1>
            <p className="text-[#95D1CC]">Here are assigned user and tickets of this project</p>
        </div>
    );
}

export default ProjectDetailsHeading;
