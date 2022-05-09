/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from "next/link";
import React from "react";
import Lottie from "react-lottie";
import automation from "../../assets/animation/automation.json";

function PlatForm() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: automation,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };
    return (
        <div className="mx-1 my-12 rounded-[55px] bg-green-100  md:max-w-3xl lg:mx-auto lg:max-w-7xl">
            <div className="grid gap-10 px-4 py-10 md:mx-auto md:max-w-3xl lg:mx-auto lg:max-w-6xl lg:grid-cols-2">
                {/* context  */}
                <div className="order-2 max-w-3xl lg:order-1 ">
                    <p className="mb-5 text-sm font-bold text-emerald-500"> THE PLATFORM</p>
                    <h1 className=" text-4xl font-extrabold" style={{ color: "#333" }}>
                        Customize Tasks <br /> for any need{" "}
                    </h1>
                    <p
                        className="text mt-5 max-w-sm text-sm leading-6 "
                        style={{ color: "#292d34" }}
                    >
                        Customize GrabBug to tackle any project or task with 35+ ClickApps. Break
                        down work with subtasks, assign Sprint Points, link tasks to other items
                        with Relationships, and more
                    </p>
                </div>

                {/* Image */}
                <div className="order-1 w-full lg:order-2 lg:w-[80%]">
                    <Lottie options={defaultOptions} />
                </div>
            </div>
            {/* Button */}
            <div className="flex w-full justify-center rounded-b-[55px] bg-green-300 py-3">
                <Link href="/register">
                    <a className="btn-white">Get Started</a>
                </Link>
            </div>
        </div>
    );
}

export default PlatForm;
