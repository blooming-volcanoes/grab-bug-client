import React from "react";

function ProjectDetailsHeading({ name }: any) {
    return (
        <div className="rounded-[3px] bg-gradient-to-r from-[#22577E] via-[#5584AC] to-[#22577E] p-4">
            <h1 className="text-2xl font-bold uppercase text-[#FAFFAF]">{name}</h1>
            <p className="text-[#95D1CC]">Here are assigned user and tickets of this project</p>
        </div>
    );
}

export default ProjectDetailsHeading;
