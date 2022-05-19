/*
 *** Title : Ticket view Dashboard
 *** Date : 4/5/2022
 *** Des : User can view there tickets details here
 *** Author : Raiyan
 */

import React from "react";

function TicketSingleDetails({ issue }: any) {
    const {
        title,
        bugDescription,
        severity,
        bugCategory,
        createdAt,
        status,
        project,
        reporterName,
    } = issue;
    // console.log(issue);
    return (
        <div className="container mx-auto h-max rounded-[3px] shadow-[0_0_10px_#5584AC] md:p-3">
            <div className="rounded-[3px] bg-gradient-to-r from-[#22577E] via-[#5584AC] to-[#22577E] p-4">
                {/* ticket details header */}
                <h4 className="text-2xl font-bold uppercase text-[#FAFFAF]">Title: {title}</h4>
                <p className="text-[#95D1CC]">Description: {bugDescription.slice(0, 50)}...</p>
                {/* <button className="text-sm underline" type="button">
                     Back to list
                 </button>
                 <button className="text-sm underline" type="button">
                     Edit ticket
                 </button> */}
            </div>

            {/* ticket more details */}

            <div className="pt-3">
                <div className="flex flex-col">
                    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                            <div className="overflow-hidden">
                                <table className="min-w-full ">
                                    <thead className="border-b uppercase">
                                        <tr>
                                            <th scope="col" className="table-th">
                                                title
                                            </th>
                                            <th scope="col" className="table-th">
                                                Description
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-b">
                                            <td className="table-td">Project</td>
                                            <td className="table-td">{project?.name}</td>
                                        </tr>
                                        <tr className="border-b">
                                            <td className="table-td">Severity</td>
                                            <td className="table-td">{severity}</td>
                                        </tr>
                                        <tr className="border-b">
                                            <td className="table-td">Category</td>
                                            <td className="table-td">{bugCategory}</td>
                                        </tr>
                                        <tr className="border-b">
                                            <td className="table-td">Status</td>
                                            <td className="table-td">{status}</td>
                                        </tr>
                                        <tr className="border-b">
                                            <td className="table-td">Reporter</td>
                                            <td className="table-td">{reporterName}</td>
                                        </tr>
                                        <tr className="border-b">
                                            <td className="table-td">Created at</td>
                                            <td className="table-td">
                                                {new Date(createdAt).toLocaleDateString()}{" "}
                                                {new Date(createdAt).toLocaleTimeString()}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TicketSingleDetails;
