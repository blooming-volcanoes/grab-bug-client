/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function TicketTablePagination() {
    return (
        <div className="mt-3 flex flex-col px-4 md:flex-row md:justify-between md:align-middle">
            <div>
                <p>Show 1 to 3 entries of 3 entries</p>
            </div>
            <div className="mb-3">
                <a
                    href="#"
                    className="relative inline-flex items-center rounded-md border border-gray-300 bg-sky-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                    Previous
                </a>
                <a
                    href="#"
                    className="relative  items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 md:inline-flex"
                >
                    1
                </a>
                <a
                    href="#"
                    className="relative inline-flex items-center rounded-md border border-gray-300 bg-sky-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                    next
                </a>
            </div>
        </div>
    );
}

export default TicketTablePagination;
