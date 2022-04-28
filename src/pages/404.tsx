import React from "react";
import Lottie from "react-lottie";
import errorPage from "../assets/animation/404.json";

function noFound() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: errorPage,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };
    return (
        <div>
            <div className=" flex w-full items-center justify-center">
                <div className="w-full md:w-3/6">
                    {/* shadow-[0_0_10px_#5584AC] */}
                    {/* <Image src={bannerImage} /> */}

                    <Lottie options={defaultOptions} />
                </div>
            </div>
        </div>
    );
}

export default noFound;
