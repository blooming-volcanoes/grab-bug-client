/* eslint-disable jsx-a11y/anchor-is-valid */
/* this is project details dashboard page. here we can see the Project details and also can see the table view of the issues. 
this part was done by Kamrul Haider Chowdhury */

import React from "react";
import AssignedTableHead from "./AssignedTableHead";
import Entries from "./Entries";
import ProjectDescription from "./ProjectDescription";
import ProjectDetailsHeading from "./ProjectDetailsHeading";
import Search from "./Search";
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";
import TicketEntries from "./TicketEntries";
import TicketSearch from "./TicketSearch";
import TicketsTableHead from "./TicketsTableHead";
import TicketTableBody from "./TicketTableBody";
import TicketTableHeader from "./TicketTableHeader";
import TicketTablePagination from "./TicketTablePagination";

function ProjectDetails({ project, users, tickets }: any) {
    return (
        <div className="m-0 md:m-3">
            <div className="container mx-auto h-max rounded-[3px] shadow-[0_0_10px_#5584AC] md:p-3">
                <div className="">
                    <ProjectDetailsHeading project={project} />
                    <ProjectDescription description={project.description} />
                </div>
                {/* Table data's of assigned personnel */}
                <div className="mt-3 grid grid-cols-1 md:grid-cols-5 md:gap-4">
                    <div className="md:col-span-2">
                        <AssignedTableHead />
                        <div className="flex flex-col justify-between px-4 py-2 md:flex-row">
                            <Entries users={users} />
                            <Search />
                        </div>
                        <div className="w-full overflow-auto rounded-[3px] border border-[#22577E]">
                            <table className="w-[700px] border border-sky-900">
                                <TableHeader />
                                <TableBody users={users} />
                            </table>
                        </div>
                    </div>

                    {/* ticket details  */}
                    <div className="md:col-span-3">
                        <TicketsTableHead />
                        <div className="flex flex-col justify-between px-4 py-2 md:flex-row">
                            <TicketEntries />
                            <TicketSearch />
                        </div>
                        <div className="w-full overflow-auto rounded-[3px] border border-[#22577E]">
                            <table className="w-[1300px] border border-sky-900">
                                <TicketTableHeader />
                                <TicketTableBody tickets={tickets} />
                            </table>
                        </div>
                        <TicketTablePagination />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectDetails;
