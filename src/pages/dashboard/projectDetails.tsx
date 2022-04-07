/* eslint-disable jsx-a11y/anchor-is-valid */
/* this is project details dashboard page. here we can see the Project details and also can see the table view of the issues. 
this part was done by Kamrul Haider Chowdhury */

import React from "react";

function projectDetails() {
    return (
        <div className="h-screen bg-gray-100 py-10">
            <div className="container mx-auto rounded-lg bg-white  px-4 pb-5 shadow">
                <div className="border-b-2 border-gray-400 pb-3">
                    {/* Project heading  */}
                    <div className="relative top-[-20px] rounded-lg bg-indigo-600 py-7 px-4 shadow-2xl">
                        <h1 className="text-2xl font-bold text-white">Project Details #1</h1>
                        <a className="text-white" href="#">
                            Back to list
                        </a>
                        <span> | </span>
                        <a className="text-white" href="#">
                            Edit
                        </a>
                    </div>
                    {/* project name and details  */}
                    <div className="mx-5 grid grid-cols-2">
                        <div>
                            <h1 className="text-xl font-bold">Project Name:</h1>
                            <h1>Demo Project one</h1>
                        </div>
                        <div>
                            <h1 className="text-xl font-bold">Project Description:</h1>
                            <p>This project is about Making issue and traking them</p>
                        </div>
                    </div>
                </div>
                {/* Table data's of assigned personnel */}
                <div className="mt-3 grid grid-cols-1 md:grid-cols-5 md:gap-4">
                    <div className="md:col-span-2">
                        <div className="rounded-lg bg-indigo-600 py-3 px-3 shadow-2xl">
                            <h1 className="text-xl font-bold text-white">Assigned Personnel</h1>
                            <p className="text-white">Currently working persons</p>
                        </div>
                        <div className="mt-3 flex flex-wrap justify-between">
                            <p>
                                Show{" "}
                                <input className="h-[30px] w-[100px]" type="number" value={10} />{" "}
                                entries
                            </p>
                            <p>
                                Search:{" "}
                                <input className="h-[30px] w-[200px]" type="search" name="" id="" />
                            </p>
                        </div>
                        <div className="overflow-x-scroll">
                            <table className="mt-3 w-full overflow-x-scroll">
                                <thead className="table-th border-b border-gray-400">
                                    <tr>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Role</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-gray-400">
                                        <td>Sadiq</td>
                                        <td>sadiq@gmail.com</td>
                                        <td>admin</td>
                                    </tr>
                                    <tr className="border-b border-gray-400">
                                        <td>Sadiq</td>
                                        <td>sadiq@gmail.com</td>
                                        <td>admin</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="mt-3 flex-wrap justify-between align-middle md:flex">
                            <p>Show 1 to 2 entries of 2 entries</p>
                            <p>
                                Previous{" "}
                                <button
                                    type="button"
                                    className="cursor-pointer bg-indigo-600 p-3 text-white"
                                >
                                    1
                                </button>{" "}
                                Next
                            </p>
                        </div>
                    </div>

                    {/* ticket details  */}
                    <div className="md:col-span-3">
                        <div className="rounded-lg bg-indigo-600 py-3 px-3 shadow-2xl">
                            <h1 className="text-xl font-bold text-white">
                                Ticket for this project
                            </h1>
                            <p className="text-white">Condensed ticket details</p>
                        </div>
                        <div className="mt-3 justify-between md:flex">
                            <p>
                                Show{" "}
                                <input className="h-[30px] w-[100px]" type="number" value={10} />{" "}
                                entries
                            </p>
                            <p>
                                Search:{" "}
                                <input className="h-[30px] w-[200px]" type="search" name="" id="" />
                            </p>
                        </div>
                        <div className="overflow-x-scroll">
                            <table className="mt-3 w-full">
                                <thead className="table-th border-b border-gray-400">
                                    <tr>
                                        <th>title</th>
                                        <th>submitter</th>
                                        <th>developer</th>
                                        <th>status</th>
                                        <th>created</th>
                                        <th>more</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-gray-400">
                                        <td>asthetic please</td>
                                        <td>Jordan malakith</td>
                                        <td>demo dev</td>
                                        <td>open</td>
                                        <td>11/04/2022 18:03</td>
                                        <td>
                                            {" "}
                                            <a className="text-blue-500" href="#">
                                                More Details
                                            </a>{" "}
                                        </td>
                                    </tr>
                                    <tr className="border-b border-gray-400">
                                        <td>asthetic please</td>
                                        <td>Jordan malakith</td>
                                        <td>demo dev</td>
                                        <td>open</td>
                                        <td>11/04/2022 18:03</td>
                                        <td>
                                            {" "}
                                            <a className="text-blue-500" href="#">
                                                More Details
                                            </a>{" "}
                                        </td>
                                    </tr>
                                    <tr className="border-b border-gray-400">
                                        <td>asthetic please</td>
                                        <td>Jordan malakith</td>
                                        <td>demo dev</td>
                                        <td>open</td>
                                        <td>11/04/2022 18:03</td>
                                        <td>
                                            {" "}
                                            <a className="text-blue-500" href="#">
                                                More Details
                                            </a>{" "}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="mt-3 justify-between align-middle md:flex">
                            <p>Show 1 to 2 entries of 2 entries</p>
                            <p>
                                Previous{" "}
                                <button
                                    type="button"
                                    className="cursor-pointer bg-indigo-600 p-3 text-white"
                                >
                                    1
                                </button>{" "}
                                Next
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default projectDetails;
