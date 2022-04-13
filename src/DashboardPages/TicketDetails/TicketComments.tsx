/*
 *** Title : Ticket view Dashboard
 *** Date : 4/5/2022
 *** Des : User can view there tickets details here
 *** Author : Raiyan
 */
import React from "react";

function TicketComments() {
    return (
        <div>
            <h1 className="text-xl">Add a comment ?</h1>

            {/* input for comment */}
            <div className="my-5 flex flex-col space-x-0 space-y-4 lg:flex-row lg:space-y-0  lg:space-x-4">
                <input className="comment-input" placeholder="Add a comment..." type="text" />
                <button className="primary-btn w-full lg:w-[30%]" type="button">
                    ADD
                </button>
            </div>

            {/* ticket comments */}
            <div className="rounded-lg bg-white p-4 shadow lg:border-r">
                <div className="space-y-2  rounded-lg bg-indigo-500 p-4 capitalize text-white shadow-2xl">
                    {/* ticket header */}
                    <h1 className="text-lg">Ticket comments</h1>
                    <p className="text-sm font-light">All comments for ticket</p>
                </div>

                {/* commenter details */}
                <div className="pt-3">
                    <div className="flex flex-col">
                        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                                <div className="overflow-hidden">
                                    <table className="min-w-full ">
                                        <thead className="border-b uppercase">
                                            <tr>
                                                <th scope="col" className="table-th">
                                                    Commenter
                                                </th>
                                                <th scope="col" className="table-th">
                                                    Message
                                                </th>
                                                <th scope="col" className="table-th">
                                                    Created
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="border-b">
                                                <td className="table-td">Elon musk</td>
                                                <td className="table-td">Hey buy Tesla Y</td>
                                                <td className="table-td">11/2/22 3:00 PM</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TicketComments;
