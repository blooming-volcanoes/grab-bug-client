import React from "react";

function TicketHistory() {
    return (
        <div className="rounded-lg  border-r bg-white p-4 shadow">
            <div className="space-y-2  rounded-lg bg-indigo-500 p-4 capitalize text-white shadow-2xl">
                {/* ticket details header */}
                <h4 className="text-lg">Ticket History</h4>
                <p className="text-sm font-light">All history information for this ticket</p>
            </div>

            {/* ticket more details */}
            <div className="relative  overflow-x-auto py-5">
                <table className="w-full table-auto border-collapse  text-sm ">
                    <thead>
                        <tr>
                            <th className="table-th">Property</th>
                            <th className="table-th">Old Value</th>
                            <th className="table-th">New Value</th>
                            <th className="table-th">Date changed</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white dark:bg-slate-800">
                        <tr>
                            <td className="table-td">AssignedUserID</td>
                            <td className="table-td">Malcolm Lockyer</td>
                            <td className="table-td">MaclowNewValue</td>
                            <td className="table-td">11/23/45 7.32 PM</td>
                        </tr>
                        <tr>
                            <td className="table-td">AssignedUserID</td>
                            <td className="table-td">Malcolm Lockyer</td>
                            <td className="table-td">MaclowNewValue</td>
                            <td className="table-td">11/23/45 7.32 PM</td>
                        </tr>
                        <tr>
                            <td className="table-td">AssignedUserID</td>
                            <td className="table-td">Malcolm Lockyer</td>
                            <td className="table-td">MaclowNewValue</td>
                            <td className="table-td">11/23/45 7.32 PM</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default TicketHistory;
