import React from "react";

function ProjectPagination() {
    return (
        <div className="mt-3 justify-between align-middle md:flex">
            <p>Show 1 to 2 entries of 2 entries</p>
            <p>
                Previous{" "}
                <button type="button" className="cursor-pointer bg-indigo-600 p-3 text-white">
                    1
                </button>{" "}
                Next
            </p>
        </div>
    );
}

export default ProjectPagination;
