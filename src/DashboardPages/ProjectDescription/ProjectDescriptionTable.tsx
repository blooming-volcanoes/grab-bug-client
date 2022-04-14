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
        <div className="my-3">
            <div className="container mx-auto rounded-[20px] border border-sky-700 md:p-4">
                <div className="">
                    <ProjectPageHeading />
                    <div className="flex flex-col justify-between px-4 py-2 md:flex-row">
                        <Entries />
                        <Search />
                    </div>
                </div>
                <div className="w-full overflow-auto">
                    <table className="mt-2 w-[1300px] border border-sky-900 md:w-full">
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
