/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/heading-has-content */
import React from "react";

function Overview() {
    function showDocs() {}

    return (
        <div className="container mx-auto min-h-screen rounded-3xl bg-violet-100">
            <div className="flex justify-center py-9">
                <button
                    onClick={showDocs}
                    type="button"
                    className="mx-7 border-b-4 border-indigo-500"
                >
                    Docs
                </button>
                <button type="button" className="mx-7 border-b-4 border-indigo-500">
                    Whiteboards
                </button>
                <button type="button" className="mx-7 border-b-4 border-indigo-500">
                    Dashboard
                </button>
            </div>
            <div className="py-7">
                <h1 className="text-center text-4xl font-bold">
                    The world's most powerful <br /> (and fun) Docs.
                </h1>
                <div className="flex justify-center py-7">
                    <img
                        className="w-2/3 rounded-lg"
                        src="https://i.ibb.co/wYRSmvB/dashboard.gif"
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
}

export default Overview;
