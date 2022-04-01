/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/heading-has-content */
import React, { useState } from "react";

function Overview() {
    const [heading, setHeading] = useState("The world's most powerful (and fun) Docs.");
    const [imageUrl, setImageUrl] = useState("https://i.ibb.co/1XHmBQ8/videoOne.gif");
    function showItems(name: string) {
        if (name === "docs") {
            setHeading("The world's most powerful (and fun) Docs.");
            setImageUrl("https://i.ibb.co/1XHmBQ8/videoOne.gif");
            document.getElementById("docsId")?.classList.add("border-indigo-500");
            document.getElementById("whiteboardsId")?.classList.remove("border-indigo-500");
            document.getElementById("dashboardId")?.classList.remove("border-indigo-500");
        } else if (name === "whiteboard") {
            setHeading("Bring your ideas to life with Whiteboards.");
            setImageUrl("https://i.ibb.co/3Rf7fdT/videoTwo.gif");
            document.getElementById("whiteboardsId")?.classList.add("border-indigo-500");
            document.getElementById("docsId")?.classList.remove("border-indigo-500");
            document.getElementById("dashboardId")?.classList.remove("border-indigo-500");
        } else if (name === "dashboard") {
            setHeading("See how you're doing in real-time with Dashboards.");
            setImageUrl("https://i.ibb.co/b3N1tVh/video-Three.gif");
            document.getElementById("dashboardId")?.classList.add("border-indigo-500");
            document.getElementById("whiteboardsId")?.classList.remove("border-indigo-500");
            document.getElementById("docsId")?.classList.remove("border-indigo-500");
        }
    }
    return (
        <div className="container mx-4 my-5 rounded-3xl bg-violet-100 md:mx-auto">
            <div className="flex justify-center py-9">
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
            <div className="py-3 lg:py-7">
                <div className="mx-auto md:w-2/5">
                    <h1 className="text-center text-4xl font-bold">{heading}</h1>
                </div>
                <div className="flex justify-center py-7">
                    <img className="rounded-lg md:w-2/3" src={imageUrl} alt="" />
                </div>
            </div>
            <div className="flex w-full justify-center rounded-b-3xl bg-violet-300 py-3">
                <button
                    type="button"
                    className="rounded-lg px-5 py-2 font-bold transition-all ease-in hover:bg-slate-100 hover:shadow-lg"
                >
                    Get Started
                </button>
            </div>
        </div>
    );
}

export default Overview;
