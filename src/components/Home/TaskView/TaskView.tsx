/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from "next/link";
import React from "react";
import { FaEllipsisH, FaEye, FaPaperclip, FaRegEye, FaUser, FaUserAlt } from "react-icons/fa";

function TaskView() {
    return (
        <section className="mx-6 my-12 rounded-[55px] bg-sky-50 p-8 md:mx-auto lg:mx-auto lg:max-w-7xl">
            <div className="flex  flex-col items-center justify-center text-center">
                <p className="my-2 text-base font-bold uppercase text-blue-300">
                    Built for everyone
                </p>
                <h1 className="my-2 text-2xl font-bold text-black sm:text-5xl">
                    Built for teams from 1 to 500+
                </h1>
            </div>
            <div className="mt-8 lg:grid lg:grid-cols-12 lg:gap-4">
                <div className="sm:col-span-4">
                    {/* First Task Card */}
                    <div className="my-2 grid grid-cols-12 gap-4">
                        <div className="col-span-2 sm:col-span-3">
                            <div className="flex justify-center rounded bg-white sm:p-4">
                                <FaEye />
                            </div>
                        </div>
                        <div className="col-span-10 sm:col-span-9">
                            <div className="flex flex-col">
                                <Link href="/">
                                    <a className="text-base font-bold hover:underline">
                                        {" "}
                                        Visualize and Plan{" "}
                                    </a>
                                </Link>
                                <p className="text-justify text-xs leading-6 text-gray-800 sm:text-sm">
                                    Manage any project from start to finish with highly customizable
                                    views that make project planning a breeze
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Second Task Card */}
                    <div className="my-2 grid grid-cols-12 gap-4">
                        <div className="col-span-2 sm:col-span-3">
                            <div className="flex justify-center rounded bg-white sm:p-4">
                                <FaEye />
                            </div>
                        </div>
                        <div className="col-span-10 sm:col-span-9">
                            <div className="flex flex-col">
                                <Link href="/">
                                    <a className="text-base font-bold hover:underline">
                                        {" "}
                                        Visualize and Plan{" "}
                                    </a>
                                </Link>
                                <p className="text-justify text-xs leading-6 text-gray-800 sm:text-sm">
                                    Manage any project from start to finish with highly customizable
                                    views that make project planning a breeze
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Third Task Card */}
                    <div className="my-2 grid grid-cols-12 gap-4">
                        <div className="col-span-2 sm:col-span-3">
                            <div className="flex justify-center rounded bg-white sm:p-4">
                                <FaEye />
                            </div>
                        </div>
                        <div className="col-span-10 sm:col-span-9">
                            <div className="flex flex-col">
                                <Link href="/">
                                    <a className="text-base font-bold hover:underline">
                                        {" "}
                                        Visualize and Plan{" "}
                                    </a>
                                </Link>
                                <p className="text-justify text-xs leading-6 text-gray-800 sm:text-sm">
                                    Manage any project from start to finish with highly customizable
                                    views that make project planning a breeze
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="rounded-lg border bg-white shadow-lg shadow-blue-200/50 sm:col-span-8 ">
                    <div className="sm:grid sm:grid-cols-12">
                        {/* First Column */}
                        <div className="col-span-5 flex flex-col border-r pl-2">
                            <div className="flex justify-around border-b py-2">
                                <div className="flex w-4/5 sm:w-3/5">
                                    <button
                                        className="mr-2 rounded bg-amber-400/100 py-1 px-1 text-xs text-white lg:px-3"
                                        type="button"
                                    >
                                        <Link href="/">
                                            <a className="text-xs hover:underline">Get Started</a>
                                        </Link>
                                    </button>
                                    <img
                                        className="mr-2 inline-block h-6 w-6 rounded-full ring-2 ring-white"
                                        src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                        alt=""
                                    />
                                    <FaUserAlt className="sm:w-100 text-xl" />
                                </div>

                                <div>
                                    <FaEllipsisH className="text-xl" />
                                </div>
                            </div>
                            {/* Button Groups */}
                            <div className="my-5 flex">
                                <button
                                    className="mr-2 rounded bg-cyan-200 py-1 px-2 text-xs text-white"
                                    type="button"
                                >
                                    <Link href="/">
                                        <a className="text-cyan-700 hover:underline ">Button1</a>
                                    </Link>
                                </button>
                                <button
                                    className="mr-2 rounded bg-blue-100 py-1 px-2 text-xs text-white"
                                    type="button"
                                >
                                    <Link href="/">
                                        <a className="text-blue-700 hover:underline">Button2</a>
                                    </Link>
                                </button>
                                <button
                                    className="mr-2 rounded bg-orange-100 py-1 px-2 text-xs text-white"
                                    type="button"
                                >
                                    <Link href="/">
                                        <a className="text-orange-500 hover:underline">Button3</a>
                                    </Link>
                                </button>
                            </div>
                            {/* Task View */}
                            <h3 className=" text-2xl font-bold sm:text-4xl"> Task View </h3>
                            <p className="my-2 text-xs text-black">
                                {" "}
                                Overview and development of our original product serves{" "}
                            </p>
                            <h4 className="text-sm font-bold text-black"> Custom Fields </h4>
                            <div className="grid grid-flow-row grid-cols-2 ">
                                <div className="my-1 flex border-y py-1 text-xs">
                                    {" "}
                                    <FaUser className="mr-2" /> Owner{" "}
                                </div>
                                <div className="my-1 border-y py-1 text-sm font-medium">
                                    {" "}
                                    Volcanoes
                                </div>
                                <div className="my-1 flex border-y border-slate-100 py-1 text-xs">
                                    {" "}
                                    <FaUser className="mr-2" /> Industry{" "}
                                </div>
                                <div className="my-1 border-y border-slate-100 py-1 text-sm font-medium">
                                    {" "}
                                    Volcanoes
                                </div>
                                <div className="my-1 flex border-y py-1 text-xs">
                                    {" "}
                                    <FaUser className="mr-2" /> Budget{" "}
                                </div>
                                <div className="my-1 border-y border-slate-100 py-1 text-sm font-medium">
                                    {" "}
                                    Volcanoes
                                </div>
                            </div>
                            {/* To Do Section */}
                            <div className="my-3">
                                <h4 className="text-sm font-bold text-black"> To Do </h4>
                                {/* First ToDo */}
                                <div className="justify-even my-2 flex">
                                    <div className="flex">
                                        <input type="checkbox" />
                                        <FaUser className="ml-2 text-sm" />
                                    </div>
                                    <p className="text-xs text-gray-900"> Name of the Podcast</p>
                                </div>
                                {/* Second Todo */}
                                <div className="justify-even my-2 flex">
                                    <div className="flex">
                                        <input type="checkbox" />
                                        <FaUser className="ml-2 text-sm" />
                                    </div>

                                    <p className="text-xs text-gray-900"> Name of the Podcast</p>
                                </div>
                            </div>
                        </div>
                        {/* Second Column */}
                        <div className="col-span-7">
                            <div className="flex justify-between border-b px-2 ">
                                <div className="flex py-2">
                                    <div className="mr-1 flex h-6 w-6 justify-center rounded-full border bg-red-500 align-middle text-white">
                                        {" "}
                                        <FaRegEye />{" "}
                                    </div>
                                    <div className="mr-1 flex h-6 w-6 justify-center rounded-full border bg-red-500 align-middle text-white">
                                        {" "}
                                        <FaRegEye />{" "}
                                    </div>
                                    <div className="mr-1 flex h-6 w-6 justify-center rounded-full border bg-red-500 align-middle text-white">
                                        {" "}
                                        <FaRegEye />{" "}
                                    </div>
                                </div>
                                <div className="flex py-2">
                                    <div className="mr-1 flex h-6 w-6 justify-center rounded-full border bg-red-500 align-middle text-white">
                                        {" "}
                                        <FaRegEye />{" "}
                                    </div>
                                </div>
                            </div>
                            {/* First Card */}
                            <div className="bg-slate-100 py-4 px-2">
                                <div className="flex justify-between">
                                    <img
                                        className="mr-2 inline-block h-8 w-9 rounded-full"
                                        src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                        alt=""
                                    />
                                    <div className="w-100 rounded bg-white p-2">
                                        <p className="text-black">
                                            {" "}
                                            <span className="text-sm  font-bold"> Ivan </span>{" "}
                                            <span className="text-xs">
                                                {" "}
                                                on Nov 5 2020 at 2.50 PM{" "}
                                            </span>
                                        </p>
                                        <p className="text-justify text-xs text-black">
                                            Lorem ipsum dolor sit, amet consectetur adipisicing
                                            elit. Tempore, sequi?
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* Second Card */}
                            <div className="bg-slate-100 py-4 px-2">
                                <div className="flex justify-between">
                                    <img
                                        className="mr-2 inline-block h-8 w-9 rounded-full"
                                        src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                        alt=""
                                    />
                                    <div className="w-100 rounded bg-white p-2">
                                        <p className="text-black">
                                            {" "}
                                            <span className="text-sm  font-bold"> Maria </span>{" "}
                                            <span className="text-xs">
                                                {" "}
                                                on Nov 5 2020 at 2.50 PM{" "}
                                            </span>
                                        </p>
                                        <div className="flex justify-between text-justify text-xs text-black">
                                            <div className="mr-2 flex h-10 w-10 items-center justify-center rounded bg-blue-400 p-4 text-white">
                                                <FaPaperclip />
                                            </div>
                                            <p>
                                                {" "}
                                                Lorem ipsum dolor sit, amet consectetur adipisicing
                                                elit. Tempore, sequi?{" "}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Third Card */}
                            <div className="bg-slate-100 py-4 px-2">
                                <div className="flex justify-between">
                                    <img
                                        className="mr-2 inline-block h-8 w-9 rounded-full"
                                        src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                        alt=""
                                    />
                                    <div className="w-100 rounded bg-white p-2">
                                        <p className="text-black">
                                            {" "}
                                            <span className="text-sm  font-bold"> Ivan </span>{" "}
                                            <span className="text-xs">
                                                {" "}
                                                on Nov 5 2020 at 2.50 PM{" "}
                                            </span>
                                        </p>
                                        <p className="text-justify text-xs text-black">
                                            Lorem ipsum dolor sit, amet consectetur adipisicing
                                            elit. Tempore, sequi?
                                        </p>
                                        <div className="flex justify-end text-xs text-black">
                                            <input type="checkbox" />{" "}
                                            <span className="ml-2"> Assigned </span>
                                        </div>
                                    </div>
                                </div>
                                <p className="my-4 text-xs text-black"> Ivan Chanaged Status </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Button */}
            <div className="my-4 flex justify-start">
                <button
                    className="rounded bg-sky-500/100 py-4 px-6 text-sm text-white shadow-lg sm:py-3 sm:px-5 sm:text-base"
                    type="button"
                >
                    <Link href="/">
                        <a className="hover:underline">Get Started</a>
                    </Link>
                </button>
            </div>
        </section>
    );
}

export default TaskView;
