import ProjectDescriptionTable from "components/Dashboard/ProjectDescription/ProjectDescriptionTable";
import React from "react";

// eslint-disable-next-line arrow-body-style
const projectDescription = () => {
    return (
        <div className="relative h-24 w-full sm:mx-auto sm:w-full md:w-5/6">
            <div className="absolute top-0 left-0 mx-auto h-full w-full bg-orange-500 p-4 text-white opacity-80">
                {" "}
                Your Projects{" "}
            </div>
            <div className="z-50 w-full overflow-scroll rounded border bg-slate-100">
                <ProjectDescriptionTable />
            </div>
        </div>
    );
};

export default projectDescription;
