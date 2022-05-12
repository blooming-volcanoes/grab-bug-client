/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/heading-has-content */
import Link from "next/link";
import React, { useState } from "react";

function Overview() {
    const [heading, setHeading] = useState("The world's most powerful (and fun) Docs.");
    const [imageUrl, setImageUrl] = useState("https://i.ibb.co/1XHmBQ8/videoOne.gif");
    function showItems(name: string) {
        if (name === "docs") {
            setHeading("The world's most powerful (and fun) Docs.");
            setImageUrl("https://i.ibb.co/jr0Rp9F/localhost-3000-dashboard-tickets.png");
            document.getElementById("docsId")?.classList.add("border-indigo-500");
            document.getElementById("whiteboardsId")?.classList.remove("border-indigo-500");
            document.getElementById("dashboardId")?.classList.remove("border-indigo-500");
        } else if (name === "whiteboard") {
            setHeading("Bring your ideas to life with Whiteboards.");
            setImageUrl("https://i.ibb.co/h1M0Vv9/localhost-3000-dashboard-manage-User-Roles.png");
            document.getElementById("whiteboardsId")?.classList.add("border-indigo-500");
            document.getElementById("docsId")?.classList.remove("border-indigo-500");
            document.getElementById("dashboardId")?.classList.remove("border-indigo-500");
        } else if (name === "dashboard") {
            setHeading("See how you're doing in real-time with Dashboards.");
            setImageUrl("https://i.ibb.co/5WCVw0W/localhost-3000-dashboard-project-Details.png");
            document.getElementById("dashboardId")?.classList.add("border-indigo-500");
            document.getElementById("whiteboardsId")?.classList.remove("border-indigo-500");
            document.getElementById("docsId")?.classList.remove("border-indigo-500");
        }
    }
    return (
        <div className="mx-1 my-12 rounded-[55px] bg-violet-100  md:max-w-3xl lg:mx-auto lg:max-w-7xl">
            <div className="flex flex-wrap justify-evenly py-5 md:justify-center">
                <button
                    onClick={() => showItems("docs")}
                    type="button"
                    id="docsId"
                    className="mx-7 border-b-4 border-indigo-500 transition ease-in-out hover:border-b-4 hover:border-indigo-500"
                >
                    Docs
                </button>
                <button
                    onClick={() => showItems("whiteboard")}
                    type="button"
                    id="whiteboardsId"
                    className="mx-7 border-b-4 transition ease-in-out hover:border-b-4 hover:border-indigo-500"
                >
                    Whiteboards
                </button>
                <button
                    onClick={() => showItems("dashboard")}
                    type="button"
                    id="dashboardId"
                    className="mx-7 border-b-4 hover:border-b-4 hover:border-indigo-500"
                >
                    Dashboard
                </button>
            </div>
            <div className="p-3 lg:py-7">
                <div className="mx-auto md:w-2/5">
                    <h1 className="text-center text-4xl font-bold">{heading}</h1>
                </div>
                <div className="flex justify-center py-7 px-4 md:px-0 lg:px-0">
                    <img className="w-full rounded-lg md:w-2/3 lg:w-2/3" src={imageUrl} alt="" />
                </div>
            </div>
            <div className="flex w-full justify-center rounded-b-[55px] bg-violet-300 py-3">
                <Link href="/register">
                    <a className="btn-white">Get Started</a>
                </Link>
            </div>
        </div>
    );
}

export default Overview;
