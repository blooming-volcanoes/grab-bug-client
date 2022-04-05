/*
 *** Title : Ticket view Dashboard
 *** Date : 4/5/2022
 *** Des : User can view there tickets details here
 *** Author : Raiyan
 */

import React from "react";

function TicketSingleDetails() {
    return (
        <div className="rounded-lg  bg-white p-4 shadow ">
            <div className="space-y-2 space-x-2 rounded-lg bg-indigo-500 p-4 capitalize text-white shadow-2xl">
                {/* ticket details header */}
                <h4 className="text-lg">Details for ticket #12</h4>
                <button className="text-sm underline" type="button">
                    Back to list
                </button>
                <button className="text-sm underline" type="button">
                    Edit ticket
                </button>
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
                                                Target title
                                            </th>
                                            <th scope="col" className="table-th">
                                                Target Description
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-b">
                                            <td className="table-td">AssignedUserId</td>
                                            <td className="table-td">NamedQuery</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table className="min-w-full">
                                    <thead className="border-b uppercase">
                                        <tr>
                                            <th scope="col" className="table-th">
                                                Target title
                                            </th>
                                            <th scope="col" className="table-th">
                                                Target Description
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-b">
                                            <td className="table-td">AssignedUserId</td>
                                            <td className="table-td">NamedQuery</td>
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
