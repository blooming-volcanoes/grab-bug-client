/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-shadow */
/*
 *** Title : Ticket view Dashboard
 *** Date : 4/5/2022
 *** Des : User can view there tickets details here
 *** Author : Raiyan
 */

import CircleLoader from "components/custom/CircleLoader";
import useAuth from "hooks/useAuth";
import { useEffect, useRef, useState } from "react";
import { RiUploadCloud2Fill } from "react-icons/ri";
import Moment from "react-moment";
import IssueHttpReq from "services/Issue.service";

function TicketAttachment() {
    // click the input file
    const clickRef = useRef(null);
    const {
        user: { user },
    } = useAuth();
    const [files, setFiles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [uploadLoader, setUploadLoader] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);

    // send file to backend
    const handelSendFile = async (e) => {
        const formData = new FormData();
        const files = e.target.files && e.target.files[0];
        formData.append("file", files);
        formData.append("email", user.email);
        formData.append("name", user.name);

        if (files) {
            setUploadLoader(true);
            try {
                const send = await IssueHttpReq.IssueFileUpload(formData);
                console.log(send.result);
            } catch (error) {
                if (error.response) {
                    const { message } = error.response.data;
                    console.log(message);
                }
                setUploadLoader(false);
            }
            setUploadLoader(false);
        }
    };

    const fetchFiles = async () => {
        setLoading(true);
        try {
            const data = await IssueHttpReq.getIssuesFiles();
            setFiles(data);
            console.log(data);
        } catch (error) {
            if (error.response) {
                const { message } = error.response.data;
                console.log(message);
            }
            setLoading(false);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchFiles();
    }, [uploadLoader]);

    const handelDownload = (e) => {
        if (e.target.value === "" || e.target.value === showDropdown) return;
        window.open(e.target.value);
    };

    return (
        <div>
            <h1 className="text-xl">Add an attachment ?</h1>

            {/* input for comment */}
            <div className="my-5 flex flex-col space-y-3 lg:flex-row lg:justify-between lg:space-x-4 lg:space-y-0">
                {/* file input */}
                <input ref={clickRef} onChange={handelSendFile} type="file" className="hidden" />
                {/* upload button */}
                <button
                    onClick={() => clickRef.current.click()}
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
            <div className="mt-4 rounded-lg border border-r bg-white p-4 shadow">
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
                                        <thead className="border-b ">
                                            <tr>
                                                <th scope="col" className="table-th">
                                                    Uploader
                                                </th>

                                                <th scope="col" className="table-th ">
                                                    Created
                                                </th>
                                                <th scope="col" className="table-th text-center">
                                                    File
                                                </th>
                                            </tr>
                                        </thead>
                                        {files.length <= 0 && (
                                            <tbody>
                                                <p className="my-10 w-[800px] text-center text-2xl text-gray-400">
                                                    Upload files
                                                </p>
                                            </tbody>
                                        )}
                                        {loading && <CircleLoader className="my-10" />}
                                        {uploadLoader ? (
                                            <CircleLoader className="my-10" />
                                        ) : (
                                            <tbody>
                                                {files.length > 0 &&
                                                    files.map((file) => (
                                                        <tr key={file._id} className="border-b">
                                                            <td className="table-td">
                                                                {file?.name}
                                                            </td>
                                                            <td className="table-td">
                                                                <Moment fromNow>
                                                                    {file.updatedAt}
                                                                </Moment>
                                                            </td>

                                                            <td className="table-td">
                                                                <select
                                                                    onClick={(e) => {
                                                                        handelDownload(e);
                                                                        setShowDropdown(
                                                                            e.target.value
                                                                        );
                                                                    }}
                                                                    className="mx-auto block w-[150px] rounded border-none bg-gray-100 ring-2 focus:ring-2"
                                                                >
                                                                    <option value="">Select</option>
                                                                    {file.attachments.map((f) => (
                                                                        <option value={f.path}>
                                                                            {f.fileName}
                                                                        </option>
                                                                    ))}
                                                                </select>
                                                            </td>
                                                        </tr>
                                                    ))}
                                            </tbody>
                                        )}
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
