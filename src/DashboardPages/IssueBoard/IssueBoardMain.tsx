import React from "react";
import Entries from "./Entries";
import HeadingText from "./HeadingText";
import Search from "./Search";
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";

function IssueBoardMain({ issues }: any) {
    return (
        <div className="m-0 md:m-3">
            <div className="container mx-auto h-max rounded-[3px] shadow-[0_0_10px_#5584AC] md:p-3">
                <div className="">
                    <HeadingText />
                    <div className="flex flex-col justify-between px-4 py-2 md:flex-row">
                        <Entries issues={issues} />
                        <Search />
                    </div>
                </div>
                <div className="w-full overflow-auto rounded-[3px] border border-[#22577E]">
                    <table className="w-[900px] md:w-full">
                        <TableHeader />
                        <TableBody issues={issues} />
                    </table>
                </div>
                {/* <ProjectPagination /> */}
            </div>
        </div>
    );
}

export default IssueBoardMain;
