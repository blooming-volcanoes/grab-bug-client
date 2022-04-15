/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-array-index-key */
import logo from "assets/images/grabbug-logo.png";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
    FaCloudsmith,
    FaFontAwesomeFlag,
    FaHubspot,
    FaRegCalendarCheck,
    FaRegUser,
} from "react-icons/fa";

const dashboardRoutes = [
    {
        path: "/dashboard/manageUserRoles",
        name: "Manage",
        icons: FaRegUser,
    },
    {
        path: "/dashboard/projectDescription",
        name: "Projects",
        icons: FaRegCalendarCheck,
    },
    {
        path: "/dashboard/projectDetails",
        name: "Project Details",
        icons: FaCloudsmith,
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
];

function SideBar() {
    return (
        <div className="h-screen w-full border-r border-r-gray-200 bg-[#f6f7fb] shadow-xl">
            <div className="flex justify-center py-4">
                <div className="w-full p-3">
                    <Image src={logo} alt="logo" />
                </div>
                {/* <p className="font-semibold uppercase text-[#b3b8d4]">Issue Tracker</p> */}
            </div>
            <ul className=" flex flex-col justify-center space-y-4 border-t border-b  px-6 pt-10 pb-28 text-[15px]">
                {dashboardRoutes.map((route, i) => (
                    <li className="py-2" key={i}>
                        <Link href={`${route.path}`}>
                            <a className="font-medium text-gray-500 hover:text-indigo-500">
                                <span>
                                    <route.icons className="mr-2 inline" />
                                </span>
                                {route.name}
                            </a>
                        </Link>
                    </li>
                ))}
            </ul>

            <li className="mt-10 flex space-x-3 px-6">
                <button type="button" className="primary-btn w-full">
                    Login
                </button>
                <button type="button" className="btn-white w-full">
                    Register
                </button>
            </li>
        </div>
    );
}

export default SideBar;
