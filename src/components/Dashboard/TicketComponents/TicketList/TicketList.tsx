import Link from "next/link";
import React from "react";

function TicketList() {
    return (
        <div>
            <div className="flex flex-col">
                <div className="overflow-x-auto ">
                    <div className=" inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <table className="min-w-full text-left text-sm text-gray-500">
                                <thead className="text-sx border-b uppercase">
                                    <tr>
                                        <th scope="col" className="table-th">
                                            Title
                                        </th>
                                        <th scope="col" className="table-th">
                                            Developer Assigned
                                        </th>
                                        <th scope="col" className="table-th">
                                            Ticket Priority
                                        </th>
                                        <th scope="col" className="table-th">
                                            Ticket Status
                                        </th>
                                        <th scope="col" className="table-th">
                                            Ticket Type
                                        </th>
                                        <th scope="col" className="table-th">
                                            Created
                                        </th>
                                        <th scope="col" className="table-th">
                                            Edit
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b">
                                        <td className="table-td">
                                            The Sliding Mr. Bones (Next Stop, Pottersville)
                                        </td>
                                        <td className="table-td">Malcolm Lockyer</td>
                                        <td className="table-td">1961</td>
                                        <td className="table-td">Malcolm Lockyer</td>
                                        <td className="table-td">1961</td>
                                        <td className="table-td">Malcolm Lockyer</td>
                                        <td className="table-td">
                                            {" "}
                                            <li className="text-blue-600 underline decoration-solid">
                                                <Link href="/home">Edit/Assign</Link>
                                            </li>
                                            <li className="text-blue-600 underline decoration-solid">
                                                <Link href="/home">Details</Link>
                                            </li>
                                        </td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="table-td">
                                            The Sliding Mr. Bones (Next Stop, Pottersville)
                                        </td>
                                        <td className="table-td">Malcolm Lockyer</td>
                                        <td className="table-td">1961</td>
                                        <td className="table-td">Malcolm Lockyer</td>
                                        <td className="table-td">1961</td>
                                        <td className="table-td">Malcolm Lockyer</td>
                                        <td className="table-td">
                                            <li className="text-blue-600 underline decoration-solid">
                                                <Link href="/home">Edit/Assign</Link>
                                            </li>
                                            <li className="text-blue-600 underline decoration-solid">
                                                <Link href="/home">Details</Link>
                                            </li>
                                        </td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="table-td">
                                            The Sliding Mr. Bones (Next Stop, Pottersville)
                                        </td>
                                        <td className="table-td">Malcolm Lockyer</td>
                                        <td className="table-td">1961</td>
                                        <td className="table-td">Malcolm Lockyer</td>
                                        <td className="table-td">1961</td>
                                        <td className="table-td">Malcolm Lockyer</td>
                                        <td className="table-td">
                                            {" "}
                                            <li className="text-blue-600 underline decoration-solid">
                                                <Link href="/home">Edit/Assign</Link>
                                            </li>
                                            <li className="text-blue-600 underline decoration-solid">
                                                <Link href="/home">Details</Link>
                                            </li>
                                        </td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="table-td">
                                            The Sliding Mr. Bones (Next Stop, Pottersville)
                                        </td>
                                        <td className="table-td">Malcolm Lockyer</td>
                                        <td className="table-td">1961</td>
                                        <td className="table-td">Malcolm Lockyer</td>
                                        <td className="table-td">1961</td>
                                        <td className="table-td">Malcolm Lockyer</td>
                                        <td className="table-td">
                                            {" "}
                                            <li className="text-blue-600 underline decoration-solid">
                                                <Link href="/home">Edit/Assign</Link>
                                            </li>
                                            <li className="text-blue-600 underline decoration-solid">
                                                <Link href="/home">Details</Link>
                                            </li>
                                        </td>
                                    </tr>
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
