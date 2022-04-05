import React from "react";

function TicketComments() {
    return (
        <div>
            <h1 className="text-xl">Add a comment ?</h1>

            {/* input for comment */}
            <div className="my-5 flex space-x-4">
                <input className="comment-input" placeholder="Add a comment..." type="text" />
                <button className="primary-btn" type="button">
                    ADD
                </button>
            </div>

            {/* ticket comments */}
            <div className="rounded-lg  border-r bg-white p-4 shadow">
                <div className="space-y-2  rounded-lg bg-indigo-500 p-4 capitalize text-white shadow-2xl">
                    {/* ticket header */}
                    <h1 className="text-lg">Ticket comments</h1>
                    <p className="text-sm font-light">All comments for ticket</p>
                </div>

                {/* commenter details */}
                <ul>
                    <li className="flex justify-between border-b py-4">
                        <p className="flex w-2/4 flex-col space-y-2 ">
                            <span className="text-sm font-semibold uppercase">commenter</span>
                            <span className="text-gray-500">Raiyan</span>
                        </p>
                        <p className="flex w-2/4 flex-col space-y-2">
                            <span className="text-sm font-semibold uppercase">message</span>
                            <span className="text-gray-500">Dude please fix it</span>
                        </p>
                        <p className="flex w-2/4 flex-col space-y-2">
                            <span className="text-sm font-semibold uppercase">Created</span>
                            <span className="text-gray-500">8:90 at 2/3/20</span>
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default TicketComments;
