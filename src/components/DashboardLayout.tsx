/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from "react";
import SideBar from "./Dashboard/DashboardComponents/SideBar";

function DashboardLayout({ children }: { children: React.ReactNode }) {
    const [toggle, setToggle] = useState(false);
    return (
        <section>
            {/* <TopBar /> */}

            <div onClick={() => setToggle(false)} className="lg:flex">
                {/* side bar */}
                <div
                    className={`${
                        toggle ? "left-0" : "-left-full"
                    } fixed flex w-[300px] transition-all lg:static lg:w-[20%]`}
                >
                    <SideBar />
                </div>
                {/* dashboard content */}
                <div className="mx-4 h-screen  w-full py-10 lg:w-[80%] lg:max-w-6xl">
                    {/* hamburger menu */}
                    <div
                        onClick={(e) => {
                            e.stopPropagation();
                            setToggle(true);
                        }}
                        className="z-40 flex h-10 w-10  cursor-pointer flex-col items-center justify-center space-y-1 rounded-full bg-gray-700 p-1 lg:hidden"
                    >
                        <div className="h-[2px] w-4 rounded bg-white" />
                        <div className="h-[2px] w-4 bg-white" />
                        <div className="h-[2px] w-4 bg-white" />
                    </div>

                    {/* child */}
                    <div>{children}</div>
                </div>
            </div>
        </section>
    );
}

export default DashboardLayout;
