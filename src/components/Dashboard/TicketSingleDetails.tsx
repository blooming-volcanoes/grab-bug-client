import React from "react";

function TicketSingleDetails() {
    return (
        <div className="rounded-lg  border-r bg-white p-4 shadow">
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
            <div className="py-5">
                <ul>
                    <li className="flex justify-between border-b py-4">
                        <p className="flex w-2/4 flex-col justify-items-start space-y-2">
                            <span className="text-sm font-semibold uppercase">Ticket title</span>
                            <span className="text-gray-500">Great work</span>
                        </p>
                        <p className="flex w-2/4 flex-col space-y-2">
                            <span className="text-sm font-semibold uppercase">
                                Ticket Description
                            </span>
                            <span className="text-gray-500">Keep on plugins in your code</span>
                        </p>
                    </li>
                    <li className="flex justify-between border-b py-4">
                        <p className="flex w-2/4 flex-col space-y-2 ">
                            <span className="text-sm font-semibold uppercase">
                                Assigned Developer
                            </span>
                            <span className="text-gray-500">Raiyan</span>
                        </p>
                        <p className="flex w-2/4 flex-col space-y-2">
                            <span className="text-sm font-semibold uppercase">Submitter</span>
                            <span className="text-gray-500">Elon musk</span>
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default TicketSingleDetails;
