import React from "react";

function ProjectDetailsHeading({ project }: any) {
    return (
        <div className="rounded-[3px] bg-gradient-to-r from-[#22577E] via-[#5584AC] to-[#22577E] p-4">
            <h1 className="text-2xl font-bold uppercase text-[#FAFFAF]">{project.name}</h1>
<<<<<<< HEAD
            <p className="text-[#95D1CC]">
                Deadline: {new Date(project.deadline).toDateString()} || Created by:{" "}
                {project.createdBy.name}
            </p>
=======
            <p className="text-[#95D1CC]">Deadline: {new Date(project.deadline).toDateString()}</p>
>>>>>>> 690308be5cd3958a24faf9db8d12562fb7ae173a
        </div>
    );
}

export default ProjectDetailsHeading;
