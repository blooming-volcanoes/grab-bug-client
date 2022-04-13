import React from "react";

function SerchTicket() {
    return (
        <div>
            <div className="flex  items-center justify-between px-4">
                <div className="">
                    <p className="text-sm font-light">Show entries</p>
                </div>
                <div className="">
                    <input
                        className="rounded-lg border-none shadow-md"
                        placeholder="Search..."
                        type="text"
                    />
                </div>
            </div>
        </div>
    );
}

export default SerchTicket;
