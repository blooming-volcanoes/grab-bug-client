/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-array-index-key */
import logo from "assets/images/logo.svg";
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
        path: "/",
        name: "Manage",
        icons: FaRegUser,
    },
    {
        path: "/",
        name: "Projects",
        icons: FaRegCalendarCheck,
    },
    {
        path: "/",
        name: "Project Details",
        icons: FaCloudsmith,
    },
    {
        path: "/",
        name: "Ticket Details",
        icons: FaFontAwesomeFlag,
    },
    {
        path: "/",
        name: "Tickets",
        icons: FaHubspot,
    },
];

function SideBar() {
    return (
        <div className="h-screen w-full border bg-gray-100 ">
            <div className="flex justify-center py-4">
                <div className="w-2/3">
                    <Image src={logo} alt="logo" />
                </div>
            </div>
            <ul className=" flex flex-col justify-center space-y-4 border-t border-b px-6 py-10 text-[15px]">
                {dashboardRoutes.map((route, i) => (
                    <li className="py-2" key={i}>
                        <Link href="/">
                            <a className="font-medium text-gray-600 hover:text-indigo-500">
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
