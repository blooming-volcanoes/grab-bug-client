/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-console */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import Entries from "./ProjectDescriptionComponents/Entries";
import ProjectPageHeading from "./ProjectDescriptionComponents/ProjectPageHeading";
import ProjectPagination from "./ProjectDescriptionComponents/ProjectPagination";
import Search from "./ProjectDescriptionComponents/Search";
import TableBody from "./ProjectDescriptionComponents/TableBody";
import TableHeader from "./ProjectDescriptionComponents/TableHeader";

function ProjectDescriptionTable({ projects }: any) {
    return (
        <div className="m-0 md:m-3">
            <div className="container mx-auto h-max rounded-[3px] shadow-[0_0_10px_#5584AC] md:p-3">
                <div className="">
                    <ProjectPageHeading />
                    <div className="flex flex-col justify-between px-4 py-2 md:flex-row">
                        <Entries projects={projects} />
                        <Search />
                    </div>
                </div>
                <div className="w-full overflow-auto rounded-[3px] border border-[#22577E]">
                    <table className="w-[900px] md:w-full">
                        <TableHeader />
                        <TableBody projects={projects} />
                    </table>
                </div>
                <ProjectPagination />
            </div>
        </div>
    );
}

export default ProjectDescriptionTable;
