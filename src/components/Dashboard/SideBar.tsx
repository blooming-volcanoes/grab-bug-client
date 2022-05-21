/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-array-index-key */
import logo from "assets/images/grabbug-logo.png";
import useAuth from "hooks/useAuth";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { BsChatLeftDotsFill } from "react-icons/bs";
import { FaPlusCircle, FaPlusSquare, FaProjectDiagram, FaTicketAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const dashboardRoutes = [
    {
        path: "/dashboard/projects",
        name: "Projects",
        icons: FaProjectDiagram,
    },
    {
        path: "/dashboard/tickets",
        name: "Tickets",
        icons: FaTicketAlt,
    },
    {
        path: "/dashboard/projectCreate",
        name: "Create Project",
        icons: FaPlusSquare,
    },
    {
        path: "/dashboard/createAnIssue",
        name: "Create Issue",
        icons: FaPlusCircle,
    },
    {
        path: "/message",
        name: "Chat",
        icons: BsChatLeftDotsFill,
    },
];

function SideBar() {
    const router: any = useRouter();
    const { logout, user } = useAuth();

    const handelLogout = () => {
        Swal.fire({
            title: "Want to Log out?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Log out!",
        }).then((result) => {
            if (result.isConfirmed) {
                logout();
                Swal.fire("Logged out!", "See you again!!", "success");
            }
        });
    };

    return (
        <div className="sidebar-scrollbar h-screen w-full overflow-auto border-r border-r-gray-200 bg-[#ffffff] shadow-xl">
            <div className="flex justify-center">
                <div onClick={() => router.push("/dashboard")} className="w-[200px] p-3">
                    <Image className="cursor-pointer" src={logo} alt="logo" />
                </div>
                {/* <p className="font-semibold uppercase text-[#b3b8d4]">Issue Tracker</p> */}
            </div>
            <div className="border-t border-b pt-4 pb-10">
                {dashboardRoutes.map((route, i) => (
                    <div className="w-full" key={i}>
                        <Link href={`${route.path}`}>
                            <a
                                style={{
                                    // if the user is not attached to any project, he/she will not be able to click the link
                                    pointerEvents: `${user.user.isActive ? "auto" : "none"}`,
                                    cursor: `${user.user.isActive ? "pointer" : "not-allowed"}`,
                                }}
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
                <button onClick={handelLogout} type="button" className="primary-btn w-full">
                    Logout
                </button>
            </li>
        </div>
    );
}

export default SideBar;
