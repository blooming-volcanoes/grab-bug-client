/*
 *** Title : Ticket view Dashboard
 *** Date : 4/5/2022
 *** Des : User can view there tickets details here
 *** Author : Raiyan
 */

import React, { useRef } from "react";
import { RiUploadCloud2Fill } from "react-icons/ri";

function TicketAttachment() {
    // click the input file
    const clickRef = useRef<HTMLInputElement>(null);
    return (
        <div>
            <h1 className="text-xl">Add an attachment ?</h1>

            {/* input for comment */}
            <div className="my-5 flex flex-col space-y-3 lg:flex-row lg:justify-between lg:space-x-4 lg:space-y-0">
                {/* file input */}
                <input ref={clickRef} type="file" className="hidden" />
                {/* upload button */}
                <button
                    onClick={() => clickRef.current!.click()}
                    className="w-full space-x-2 rounded-lg bg-gray-400 px-5 py-2 text-sm lg:w-[40%]"
                    type="button"
                >
                    <RiUploadCloud2Fill className="inline text-2xl text-white" />
                    <span className="uppercase  text-white ">upload file</span>
                </button>
                {/* search input */}
                <input className="comment-input" placeholder="Add a comment..." type="text" />
                <button className="primary-btn " type="button">
                    ADD
                </button>
            </div>

            {/* ticket comments */}
            <div className="mt-4 rounded-lg border-r bg-white p-4 shadow">
                <div className="space-y-2  rounded-lg bg-indigo-500 p-4 capitalize text-white shadow-2xl">
                    {/* ticket header */}
                    <h1 className="text-lg">Ticket Attachments</h1>
                    <p className="text-sm font-light">All files attached to the Ticket</p>
                </div>

                {/* commenter details */}
                <div className="py-5">
                    <div className="flex flex-col">
                        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                                <div className="overflow-hidden">
                                    <table className="min-w-full">
                                        <thead className="border-b">
                                            <tr>
                                                <th scope="col" className="table-th">
                                                    File
                                                </th>
                                                <th scope="col" className="table-th">
                                                    Uploader
                                                </th>
                                                <th scope="col" className="table-th">
                                                    Notes
                                                </th>
                                                <th scope="col" className="table-th">
                                                    Created
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="border-b">
                                                <td className="table-td">Tesla Model Y</td>
                                                <td className="table-td">Elon musk</td>
                                                <td className="table-td">Plz sell my model Y</td>
                                                <td className="table-td">11/04/22 2:30 PM</td>
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

export default TicketAttachment;
