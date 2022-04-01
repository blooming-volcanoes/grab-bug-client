/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { BsCheckLg } from "react-icons/bs";
import { Ri24HoursFill } from "react-icons/ri";

function Support() {
    return (
        <section>
            <div className="flex items-center justify-between py-10 lg:mx-auto lg:max-w-6xl">
                {/* left side */}
                <div>
                    {/* 24/7 logo */}
                    <p className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#9B51E0] text-3xl  text-white shadow-2xl">
                        <Ri24HoursFill />
                    </p>
                    <p className="text-s text-xs text-[#9B51E0]">#1 SUPPORT IN SOFTWARE</p>

                    {/* main contents */}
                    <div>
                        <h1>24/7 real-time support.</h1>
                        <p>
                            ClickUp has the highest rated client support in software. We're here 24
                            hours a day, every day of the week, including holidays.
                        </p>
                        <ul>
                            <li>
                                <span>
                                    <BsCheckLg className="inline" />
                                </span>
                                <span>Free coaching</span>
                            </li>
                            <li>
                                <span>
                                    <BsCheckLg className="inline" />
                                </span>
                                <span>Free coaching</span>
                            </li>
                            <li>
                                <span>
                                    <BsCheckLg className="inline" />
                                </span>
                                <span>Free coaching</span>
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
