/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from "react";
import IssueHttpReq from "services/Issue.service";
import ProjectHttpReq from "services/Project.service";

function EditingForm({ ticketId }: any) {
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
                                Created at
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
                                type="text"
                                value={ticket.status}
                                onChange={() => {}}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#22577E] focus:ring-[#22577E] sm:text-sm"
                            />
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                            <label
                                htmlFor="priority"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Ticket Priority
                            </label>
                            <select
                                id="priority"
                                name="priority"
                                autoComplete="priority-name"
                                className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-[#22577E] focus:ring-[#22577E] sm:text-sm"
                            >
                                <option>United States</option>
                                <option>Canada</option>
                                <option>Mexico</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                    <button type="submit" className="primary-btn inline-flex justify-center">
                        Assign
                    </button>
                </div>
            </div>
        </form>
    );
}

export default EditingForm;
