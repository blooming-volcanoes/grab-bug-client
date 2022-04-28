import React from "react";

function about() {
    return (
        <div className="container mx-auto">
            <div className="mt-5 text-center">
                <h1 className="text-2xl font-bold text-[#22577E]">GrabBug Developer team</h1>
                <p className="text-[#5584AC]">
                    Here are the persons who made this web app into this far.
                </p>
            </div>
            <div className="mx-2 my-5 grid grid-cols-1 gap-4 md:mx-0 md:grid-cols-5">
                <div className="rounded-[3px] p-5 text-center shadow-[0_0_5px_#5584AC] transition-all duration-[0.5s] hover:shadow-[0_0_10px_#5584AC] md:col-start-3">
                    <img
                        className="w-full rounded-[3px]"
                        src="https://avatars.githubusercontent.com/u/45129274?v=4"
                        alt=""
                    />
                    <h1 className="mt-2 font-bold text-blue-700">A.S.M. Habibullah Sadique</h1>
                    <h2 className="my-1 rounded-full border border-indigo-500 text-indigo-500">
                        Team Leader
                    </h2>
                </div>
                <div className="rounded-[3px] p-5 text-center shadow-[0_0_5px_#5584AC] transition-all duration-[0.5s] hover:shadow-[0_0_10px_#5584AC] md:col-start-1">
                    <img
                        className="w-full rounded-[3px]"
                        src="https://avatars.githubusercontent.com/u/80216813?v=4"
                        alt=""
                    />
                    <h1 className="mt-2 font-bold text-blue-700">Awal Hossain</h1>
                    <h2 className="my-1 rounded-full border border-indigo-500 text-indigo-500">
                        Backend Developer
                    </h2>
                </div>
                <div className="rounded-[3px] p-5 text-center shadow-[0_0_5px_#5584AC] transition-all duration-[0.5s] hover:shadow-[0_0_10px_#5584AC]">
                    <img
                        className="w-full rounded-[3px]"
                        src="https://avatars.githubusercontent.com/u/85253310?v=4"
                        alt=""
                    />
                    <h1 className="mt-2 font-bold text-blue-700">Sushanta Gupta</h1>
                    <h2 className="my-1 rounded-full border border-indigo-500 text-indigo-500">
                        Frontend/Webrtc Developer
                    </h2>
                </div>
                <div className="rounded-[3px] p-5 text-center shadow-[0_0_5px_#5584AC] transition-all duration-[0.5s] hover:shadow-[0_0_10px_#5584AC]">
                    <img
                        className="w-full rounded-[3px]"
                        src="https://avatars.githubusercontent.com/u/57128493?v=4"
                        alt=""
                    />
                    <h1 className="mt-2 font-bold text-blue-700">Mostofa Sujon</h1>
                    <h2 className="my-1 rounded-full border border-indigo-500 text-indigo-500">
                        Frontend Developer
                    </h2>
                </div>
                <div className="rounded-[3px] p-5 text-center shadow-[0_0_5px_#5584AC] transition-all duration-[0.5s] hover:shadow-[0_0_10px_#5584AC]">
                    <img
                        className="w-full rounded-[3px]"
                        src="https://avatars.githubusercontent.com/u/76396442?v=4"
                        alt=""
                    />
                    <h1 className="mt-2 font-bold text-blue-700">MD.Tajkier Haque Raiyan</h1>
                    <h2 className="my-1 rounded-full border border-indigo-500 text-indigo-500">
                        Full Stack Developer
                    </h2>
                </div>
                <div className="rounded-[3px] p-5 text-center shadow-[0_0_5px_#5584AC] transition-all duration-[0.5s] hover:shadow-[0_0_10px_#5584AC]">
                    <img
                        className="w-full rounded-[3px]"
                        src="https://avatars.githubusercontent.com/u/74710738?v=4"
                        alt=""
                    />
                    <h1 className="mt-2 font-bold text-blue-700">Kamrul Haider Chowdhury</h1>
                    <h2 className="my-1 rounded-full border border-indigo-500 text-indigo-500">
                        Frontend Developer
                    </h2>
                </div>
            </div>
        </div>
    );
}

export default about;
