/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { BsCheckLg } from "react-icons/bs";
import { Ri24HoursFill } from "react-icons/ri";

function Support() {
    return (
        <section>
            <div className="mx-6 my-12 flex flex-col items-center justify-between space-y-6 py-10 md:max-w-3xl md:space-y-0 lg:mx-auto lg:max-w-6xl lg:flex-row lg:space-y-0">
                {/* left side */}
                <div className="space-y-8">
                    {/* 24/7 logo */}
                    <p className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#9B51E0] text-3xl text-white  shadow-2xl lg:mx-0">
                        <Ri24HoursFill />
                    </p>
                    <p className="text-center text-xs font-semibold  text-[#9B51E0] lg:text-left">
                        #1 SUPPORT IN SOFTWARE
                    </p>

                    {/* main contents */}
                    <div className="space-y-8 ">
                        <h1 className="text-center text-4xl font-bold leading-[55px] text-gray-700 lg:text-left">
                            24/7 real-time <br /> support.
                        </h1>
                        <p className="text-center text-sm leading-[25px] text-gray-800 lg:text-left">
                            ClickUp has the highest rated client support in software. We're here 24
                            hours a day, every day of the week, including holidays.
                        </p>
                        <ul className="flex flex-wrap justify-center space-x-3   lg:justify-start">
                            <li className="mb-3 text-sm">
                                <span className="mr-2  rounded-full bg-[#9B51E0] py-1 px-1 text-xs text-white">
                                    <BsCheckLg className="inline" />
                                </span>
                                <span>Daily webinars</span>
                            </li>
                            <li className="mb-3 text-sm">
                                <span className="mr-2 rounded-full bg-[#9B51E0] py-1 px-1 text-xs text-white">
                                    <BsCheckLg className="inline" />
                                </span>
                                <span>Free coaching</span>
                            </li>
                            <li className="mb-3 text-sm">
                                <span className="mr-2 rounded-full bg-[#9B51E0] py-1 px-1 text-xs text-white">
                                    <BsCheckLg className="inline" />
                                </span>
                                <span>Chat & Photo</span>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* right side  */}
                <div>
                    <div>
                        <img
                            src="https://clickup.com/landing/images/main/help/customer-support.png"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Support;
