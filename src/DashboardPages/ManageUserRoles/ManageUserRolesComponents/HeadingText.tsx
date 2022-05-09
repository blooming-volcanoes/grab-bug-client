import React from "react";

function HeadingText({ project }: any) {
    return (
        <div className="rounded-[3px] bg-gradient-to-r from-[#22577E] via-[#5584AC] to-[#22577E] p-4">
            <h1 className="text-2xl font-bold uppercase text-[#FAFFAF]">
                Project Name: {project.name}
            </h1>
            <p className="text-[#95D1CC]">Select a user and assgin a role to him/her</p>
        </div>
    );
}

export default HeadingText;
