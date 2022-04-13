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

function ProjectDescriptionTable({ projects }) {
    return (
        <div className="bg-gray-100 py-6">
            <div className="container mx-auto rounded-lg bg-white  px-4 pb-5 shadow">
                <div className="border-b-2 border-gray-400 pb-3">
                    <ProjectPageHeading />
                    <div className="justify-left  flex flex-col  sm:grid sm:grid-cols-2">
                        <Entries />
                        <Search />
                    </div>
                </div>
                <table className="mt-3 w-full">
                    <TableHeader />
                    <TableBody projects={projects} />
                </table>
                <ProjectPagination />
            </div>
        </div>
    );
}

export default ProjectDescriptionTable;
