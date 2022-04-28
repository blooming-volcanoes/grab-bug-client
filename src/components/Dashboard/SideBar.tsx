/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-array-index-key */
import logo from "assets/images/grabbug-logo.png";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { BsChatLeftDotsFill } from "react-icons/bs";
import { FaAccessibleIcon, FaFontAwesomeFlag, FaHubspot, FaRegCalendarCheck } from "react-icons/fa";

const dashboardRoutes = [
    {
        path: "/dashboard/projects",
        name: "Projects",
        icons: FaRegCalendarCheck,
    },
    {
        path: "/dashboard/ticketDetails",
        name: "Ticket Details",
        icons: FaFontAwesomeFlag,
    },
    {
        path: "/dashboard/tickets",
        name: "Tickets",
        icons: FaHubspot,
    },
    {
        path: "/dashboard/projectCreate",
        name: "Create Project",
        icons: FaAccessibleIcon,
    },
    {
        path: "/dashboard/createAnIssue",
        name: "Create Issue",
        icons: FaAccessibleIcon,
    },
    {
        path: "/chatPage",
        name: "Chat",
        icons: BsChatLeftDotsFill,
    },
];

function SideBar() {
    const router: any = useRouter();
    return (
        <div className="sidebar-scrollbar h-screen w-full overflow-auto border-r border-r-gray-200 bg-[#ffffff] shadow-xl">
            <div className="flex justify-center">
                <div className="w-[200px] p-3">
                    <Image className="cursor-pointer" src={logo} alt="logo" />
                </div>
                {/* <p className="font-semibold uppercase text-[#b3b8d4]">Issue Tracker</p> */}
            </div>
            <div className="border-t border-b pt-4 pb-10">
                {dashboardRoutes.map((route, i) => (
                    <div className="w-full" key={i}>
                        <Link href={`${route.path}`}>
                            <a
                                className={
                                    router.pathname === route.path
                                        ? "sidebar-routes active my-2"
                                        : "sidebar-routes"
                                }
                            >
                                <span>
                                    <route.icons className="mr-2 inline" />
                                </span>
                                {route.name}
                            </a>
                        </Link>
                    </div>
                ))}
            </div>
            {/* <ul className="border-t border-b pt-4 pb-10">
                {dashboardRoutes.map((route, i) => (
                    <li className="w-full" key={i}>
                        <Link href={`${route.path}`}>
                            <a
                                className={
                                    router.pathname === route.path
                                        ? "active my-2"
                                        : "sidebar-routes"
                                }
                            >
                                <span>
                                    <route.icons className="mr-2 inline" />
                                </span>
                                {route.name}
                            </a>
                        </Link>
                    </li>
                ))}
            </ul> */}

            <li className="my-4 flex space-x-3 px-6">
                <button type="button" className="primary-btn w-full">
                    Logout
                </button>
            </li>
        </div>
    );
}

export default SideBar;
