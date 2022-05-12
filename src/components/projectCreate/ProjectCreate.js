/* eslint-disable no-alert */
/* eslint-disable no-console */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { useForm } from "react-hook-form";

function ProjectCreate() {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
        fetch("https://blooming-volcanoes.herokuapp.com/project", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.success) {
                    alert("Project Created Successfully");
                }
                if (!result.success) {
                    alert(`${result.message}`);
                }
            });

        reset();
    };
    return (
        <div className="flex h-screen justify-center bg-gradient-to-r  from-violet-200 to-fuchsia-300 p-5 ">
            <form
                className=" flex w-full flex-col content-center rounded bg-slate-100 p-2 shadow-lg shadow-cyan-500/50 lg:w-1/2 lg:p-5"
                onSubmit={handleSubmit(onSubmit)}
            >
                <lable className="my-2 text-xs font-bold sm:text-sm md:text-base lg:text-lg lg:font-normal">
                    {" "}
                    Name of the project
                </lable>
                <input
                    type="text"
                    className="my-1 border p-1 text-black"
                    {...register("name", { required: true })}
                />
                <lable className="my-2 text-xs font-bold sm:text-sm md:text-base lg:text-lg lg:font-normal">
                    {" "}
                    Describe your project
                </lable>
                <textarea
                    className="my-1"
                    cols="50"
                    rows="4"
                    {...register("description", { required: true })}
                />
                <lable className="my-2 text-xs font-bold sm:text-sm md:text-base lg:text-lg lg:font-normal">
                    {" "}
                    Name of the project manager{" "}
                </lable>
                <input
                    type="text"
                    className="my-1 border p-1 text-black"
                    {...register("manager", { required: true })}
                />
                <lable className="my-2 text-xs font-bold sm:text-sm md:text-base lg:text-lg lg:font-normal">
                    {" "}
                    Name of the project leader
                </lable>
                <input
                    type="text"
                    className="my-1 border p-1 text-black"
                    {...register("leader", { required: true })}
                />
                <lable className="my-2 text-xs font-bold sm:text-sm md:text-base lg:text-lg lg:font-normal">
                    {" "}
                    Project submission deadline{" "}
                </lable>
                <input
                    type="date"
                    className="my-1 border p-1 text-black"
                    {...register("deadline", { required: true })}
                />

                <button
                    type="submit"
                    className="w-full flex-shrink-0  rounded border-4 border-teal-500 bg-teal-500 py-1 px-1 text-sm text-white hover:border-teal-700 hover:bg-teal-700 sm:w-3/6 md:w-2/6 lg:w-2/6"
                >
                    {" "}
                    Create Project
                </button>
            </form>
        </div>
    );
}

export default ProjectCreate;
