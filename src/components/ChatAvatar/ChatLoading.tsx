import React from "react";

function ChatLoading() {
    return (
        <div>
            <div className="flex select-none flex-col gap-5 rounded-2xl bg-white p-2 shadow-lg sm:h-64 sm:flex-row sm:p-4 ">
                <div className="h-52 animate-pulse rounded-xl bg-gray-200 sm:h-full sm:w-72" />
                <div className="flex flex-1 flex-col gap-5 sm:p-2">
                    <div className="flex flex-1 flex-col gap-3">
                        <div className="h-14 w-full animate-pulse rounded-2xl bg-gray-200" />
                        <div className="h-3 w-full animate-pulse rounded-2xl bg-gray-200" />
                        <div className="h-3 w-full animate-pulse rounded-2xl bg-gray-200" />
                        <div className="h-3 w-full animate-pulse rounded-2xl bg-gray-200" />
                        <div className="h-3 w-full animate-pulse rounded-2xl bg-gray-200" />
                    </div>
                    <div className="mt-auto flex gap-3">
                        <div className="h-8 w-20 animate-pulse rounded-full bg-gray-200" />
                        <div className="h-8 w-20 animate-pulse rounded-full bg-gray-200" />
                        <div className="ml-auto h-8 w-20 animate-pulse rounded-full bg-gray-200" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChatLoading;
