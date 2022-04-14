/*
 *** Title : Ticket view Dashboard
 *** Date : 4/5/2022
 *** Des : User can view there tickets details here
 *** Author : Raiyan
 */

import React from "react";

function TicketHistory() {
    return (
        <div className="rounded-lg   bg-white p-4 shadow">
            <div className="space-y-2  rounded-lg bg-indigo-500 p-4 capitalize text-white shadow-2xl">
                {/* ticket details header */}
                <h4 className="text-lg">Ticket History</h4>
                <p className="text-sm font-light">All history information for this ticket</p>
            </div>

            {/* ticket more details */}
            <div className="py-5">
                <div className="flex flex-col">
                    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                            <div className="overflow-hidden">
                                <table className="min-w-full">
                                    <thead className="border-b">
                                        <tr>
                                            <th scope="col" className="table-th">
                                                Property
                                            </th>
                                            <th scope="col" className="table-th">
                                                Old Value
                                            </th>
                                            <th scope="col" className="table-th">
                                                New Value
                                            </th>
                                            <th scope="col" className="table-th">
                                                Date Changed
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-b">
                                            <td className="table-td">AssignedUserId</td>
                                            <td className="table-td">NamedQuery</td>
                                            <td className="table-td">UpperQuery</td>
                                            <td className="table-td">11/04/22 12:30 PM</td>
                                        </tr>
                                        <tr className="border-b">
                                            <td className="table-td">AssignedUserId</td>
                                            <td className="table-td">NamedQuery</td>
                                            <td className="table-td">UpperQuery</td>
                                            <td className="table-td">11/04/22 12:30 PM</td>
                                        </tr>
                                        <tr className="border-b">
                                            <td className="table-td">AssignedUserId</td>
                                            <td className="table-td">NamedQuery</td>
                                            <td className="table-td">UpperQuery</td>
                                            <td className="table-td">11/04/22 12:30 PM</td>
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

export default TicketHistory;
