import React from "react";

function TicketEdit() {
    return (
        <div className="rounded-lg   bg-white p-4 shadow">
            <div className="space-y-2  rounded-lg bg-indigo-500 p-4 capitalize text-white shadow-2xl">
                {/* ticket Edit header */}
                <h4 className="text-lg">Edit Ticket</h4>
                <p className="text-sm font-light">Change Ticket Properties</p>
            </div>

            {/* commenter details */}
            <div className="pt-3">
                <div className="flex flex-col">
                    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                            <div className="overflow-hidden">
                                <table className="table-auto ">
                                    <thead className="border-b uppercase">
                                        <tr className="">
                                            <th scope="col" className="table-th">
                                                Title
                                            </th>
                                            <th scope="col" className="table-th">
                                                Description
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-b">
                                            <input
                                                className="border-dark-500 mr-5 w-96 border-0 border-b-2"
                                                type="text"
                                                placeholder="Enter here"
                                            />
                                            <input
                                                className="border-dark-500 ml-5 w-96 border-0 border-b-2"
                                                type="text"
                                                placeholder="Enter here"
                                            />
                                        </tr>
                                        <tr className="border-b text-left">
                                            <td className="table-td">Project</td>
                                            <td className="table-td">Assigned</td>
                                        </tr>
                                        <tr className="border-b">
                                            <select className="mr-5 w-96">
                                                <option value="volvo">Demo Project one</option>
                                                <option value="saab">Demo Project two</option>
                                                <option value="fiat">Demo Project three</option>
                                                <option value="audi">Demo Project Four</option>
                                            </select>

                                            <select className="ml-5 w-96">
                                                <option value="volvo">
                                                    Demo Project Description
                                                </option>
                                                <option value="saab">
                                                    Demo Project Description
                                                </option>
                                                <option value="fiat">
                                                    Demo Project Description
                                                </option>
                                                <option value="audi">
                                                    Demo Project Description
                                                </option>
                                            </select>
                                        </tr>
                                        <tr className="border-b text-left">
                                            <td className="table-td">Ticket Priority</td>
                                            <td className="table-td">Assignment Developer</td>
                                        </tr>
                                        <tr className="border-b">
                                            <select className="mr-5 w-96">
                                                <option value="volvo">Hight</option>
                                                <option value="saab">Low</option>
                                                <option value="fiat">Medium</option>
                                                <option value="audi">Nothing</option>
                                            </select>

                                            <select className="ml-5 w-96">
                                                <option value="volvo">Project In Process</option>
                                                <option value="saab">Project Out Process</option>
                                                <option value="fiat">
                                                    Project running Process
                                                </option>
                                                <option value="audi">Project Stop Process</option>
                                            </select>
                                        </tr>
                                        <tr className="border-b text-left">
                                            <td className="table-td">Ticket Type</td>
                                        </tr>
                                        <tr className="border-b">
                                            <select className="ml-5 w-96 text-left">
                                                <option value="volvo">Bugs/Errors</option>
                                                <option value="saab">Wrong</option>
                                                <option value="fiat">day off</option>
                                                <option value="audi">Nothing</option>
                                            </select>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row">
                        <button className="primary-btn mr-5 w-64 bg-blue-500" type="button">
                            Back to List
                        </button>
                        <button className="primary-btn ml-5 w-64 bg-green-900" type="button">
                            UPDATE TICKET
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TicketEdit;
