/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";

function EditingForm() {
    return (
        <form action="#" method="POST">
            <div className="overflow-hidden shadow sm:rounded-md">
                <div className="bg-white px-4 py-5 sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 sm:col-span-3">
                            <label
                                htmlFor="ticket-name"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Ticket Name
                            </label>
                            <input
                                type="text"
                                name="ticket-name"
                                id="ticket-name"
                                autoComplete=""
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#22577E] focus:ring-[#22577E] sm:text-sm"
                            />
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                            <label
                                htmlFor="developer-name"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Developer Name
                            </label>
                            <input
                                type="text"
                                name="developer-name"
                                id="developer-name"
                                autoComplete=""
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#22577E] focus:ring-[#22577E] sm:text-sm"
                            />
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                            <label
                                htmlFor="ticket-type"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Ticket Type
                            </label>
                            <input
                                type="text"
                                name="ticket-type"
                                id="ticket-type"
                                autoComplete=""
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

                        <div className="col-span-6 sm:col-span-3">
                            <label
                                htmlFor="status"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Ticket Status
                            </label>
                            <select
                                id="status"
                                name="status"
                                autoComplete="status-name"
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
