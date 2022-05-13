/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/label-has-associated-control */
import cogoToast from "cogo-toast";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import IssueHttpReq from "services/Issue.service";
import ProjectHttpReq from "services/Project.service";

function EditingForm({ ticketId }: any) {
    const router = useRouter();
    const [ticket, setTicket] = useState<any>({});
    const [project, setProject] = useState<any>({});

    const getIssue = async (id: any) => {
        const issueData = await IssueHttpReq.getIssue(id);
        setTicket(issueData.data.result);
    };

    const getProject = async (id: any) => {
        const projectData = await ProjectHttpReq.getProject(id);
        setProject(projectData.project);
    };

    const handleApprove = async () => {
        const response = await IssueHttpReq.approveIssue(ticket._id, {
            ...ticket,
            status: "approved",
        });
        if (response.data.success) {
            cogoToast.success("Ticket is approved");
            router.push("/dashboard/tickets");
        }
    };

    const handleReject = async () => {
        cogoToast.info("Rejection functionality will be implemented soon!");
        router.push("/dashboard/tickets");
    };

    useEffect(() => {
        getIssue(ticketId);
    }, [ticketId]);

    useEffect(() => {
        if (ticket.project) {
            getProject(ticket.project);
        }
    }, [ticket.project]);

    return (
        <form action="#" method="POST">
            <div className="overflow-hidden shadow sm:rounded-md">
                <div className="bg-white px-4 py-5 sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 sm:col-span-3">
                            <label
                                htmlFor="title"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Title
                            </label>
                            <input
                                disabled
                                value={ticket.title}
                                onChange={() => {}}
                                type="text"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#22577E] focus:ring-[#22577E] sm:text-sm"
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                            <label
                                htmlFor="created-at"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Project
                            </label>
                            <input
                                disabled
                                type="text"
                                value={project.name}
                                onChange={() => {}}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#22577E] focus:ring-[#22577E] sm:text-sm"
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                            <label
                                htmlFor="bug-category"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Category
                            </label>
                            <input
                                disabled
                                type="text"
                                value={ticket.bugCategory}
                                onChange={() => {}}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#22577E] focus:ring-[#22577E] sm:text-sm"
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                            <label
                                htmlFor="severity"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Severity
                            </label>
                            <input
                                disabled
                                type="text"
                                value={ticket.severity}
                                onChange={() => {}}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#22577E] focus:ring-[#22577E] sm:text-sm"
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                            <label
                                htmlFor="created-at"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Reported at
                            </label>
                            <input
                                disabled
                                type="text"
                                value={new Date(ticket.createdAt).toLocaleString()}
                                onChange={() => {}}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#22577E] focus:ring-[#22577E] sm:text-sm"
                            />
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                            <label
                                htmlFor="reporter"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Reporter Name
                            </label>
                            <input
                                disabled
                                type="text"
                                value={ticket.reporterName}
                                onChange={() => {}}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#22577E] focus:ring-[#22577E] sm:text-sm"
                            />
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                            <label
                                htmlFor="status"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Status
                            </label>
                            <input
                                disabled
                                type="text"
                                value={ticket.status}
                                onChange={() => {}}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#22577E] focus:ring-[#22577E] sm:text-sm"
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                            Description
                            <textarea
                                onChange={() => {}}
                                disabled
                                rows={7}
                                className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-[#22577E] focus:ring-[#22577E] sm:text-sm"
                                value={ticket.bugDescription}
                            />
                        </div>
                    </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                    <button
                        onClick={handleApprove}
                        type="button"
                        className="primary-btn inline-flex justify-center bg-green-600"
                    >
                        Approve
                    </button>
                </div>
                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                    <button
                        onClick={handleReject}
                        type="button"
                        className="primary-btn inline-flex justify-center bg-red-600"
                    >
                        Reject
                    </button>
                </div>
            </div>
        </form>
    );
}

export default EditingForm;
