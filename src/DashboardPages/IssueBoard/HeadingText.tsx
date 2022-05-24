import useAuth from "hooks/useAuth";
import React from "react";

function HeadingText({ project }: any) {
    const auth = useAuth();
    console.log(auth);
    return (
        <div className="flex justify-between rounded-[3px] bg-gradient-to-r from-[#22577E] via-[#5584AC] to-[#22577E] p-4">
            <div className="w-[80%]">
                <h1 className="text-3xl font-bold uppercase text-[#FAFFAF]">
                    Project Name: {project.name}
                </h1>
                <p className="w-[80%] text-[#95D1CC]">{project.description}</p>
            </div>
            <div className="flex  w-[20%] flex-col items-center justify-center">
                <img
                    className="mx-auto  w-12 rounded-full"
                    src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
                    alt=""
                />
                <p className="text-sm font-medium text-[#95D1CC]">{auth?.user?.user?.name}</p>
                <p className="text-xs font-semibold text-[#FAFFAF]">Project Manager</p>
            </div>
        </div>
    );
}

export default HeadingText;
