/* eslint-disable no-underscore-dangle */
import React from "react";
import TableHead from "./TableHead";
import TableRow from "./TableRow";

function TicketList({ tickets }: any) {
    return (
        <div>
            <div className="flex flex-col">
                <div className="overflow-x-auto ">
                    <div className=" inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <table className="min-w-full text-left text-sm text-gray-500">
                                <TableHead />
                                <tbody>
                                    {tickets.map((ticket: any) => (
                                        <TableRow ticket={ticket} key={ticket._id} />
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TicketList;
