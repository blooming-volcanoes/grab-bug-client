import React from "react";
import Entries from "./Entries";
import HeadingText from "./HeadingText";
import Search from "./Search";
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";

function IssueBoardMain({ project }: any) {
    return (
        <div className="m-0 md:m-3">
            <div className="container mx-auto h-max rounded-[3px] shadow-[0_0_10px_#5584AC] md:p-3">
                <div className="">
                    <HeadingText />
                    <div className="flex flex-col justify-between px-4 py-2 md:flex-row">
                        <Entries issues={project.issues} />
                        <Search />
                    </div>
                </div>
                <div className="w-full overflow-auto rounded-[3px] border border-[#22577E]">
                    <table className="w-[900px] md:w-full">
                        <TableHeader />
                        <TableBody project={project} />
                    </table>
                </div>
                <div className="mt-3 w-full overflow-auto rounded-[3px]">
                    <form className="mx-1 mt-3">
                        <div className="flex flex-col md:flex-row">
                            <input
                                style={{ outline: "none" }}
                                className="mb-3 mr-3 w-full flex-auto rounded-[3px] border-2 border-solid py-2 px-3 focus:border-[#22577E] md:w-2/5"
                                placeholder="User Name"
                            />

                            <input
                                style={{ outline: "none" }}
                                className="mb-3 mr-3 w-full flex-auto rounded-[3px] border-2 border-solid py-2 px-3 focus:border-[#22577E] md:w-2/5"
                                placeholder="User Role"
                            />

                            <button className="primary-btn h-[40px]" type="submit">
                                Invite
                            </button>
                        </div>
                    </form>
                </div>
                {/* <ProjectPagination /> */}
            </div>
        </div>
    );
}

export default IssueBoardMain;
