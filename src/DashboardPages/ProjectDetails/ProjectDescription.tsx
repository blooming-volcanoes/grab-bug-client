import React from "react";

function ProjectDescription({ description }: any) {
    return (
        <div className="p-4">
            <h1 className="inline text-[20px] font-bold uppercase text-[#131313]">Description:</h1>
            <p className="ml-3 inline text-[#4e4e4e]">{description}</p>
        </div>
    );
}

export default ProjectDescription;
