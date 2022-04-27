/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-alert */
/* eslint-disable no-console */
/* eslint-disable react/jsx-props-no-spreading */
import cogoToast from "cogo-toast";
import React from "react";
import { useForm } from "react-hook-form";
import ProjectHttpReq from "services/Project.service";

function ProjectCreate() {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = async (data) => {
        try {
            const res = await ProjectHttpReq.createProject(data);
            if (res.success) {
                cogoToast.success("done");
            }
        } catch (err) {
            console.log(err.response.data);
        }

        reset();
    };
    return (
        <div className="flex h-screen justify-center bg-gradient-to-r bg-gradient-to-r from-violet-200 to-fuchsia-300 p-5 ">
            <form
                className=" flex w-full flex-col content-center rounded bg-slate-100 p-2 shadow-lg shadow-cyan-500/50 lg:w-1/2 lg:p-5"
                onSubmit={handleSubmit(onSubmit)}
            >
                <label className="my-2 text-xs font-bold sm:text-sm md:text-base lg:text-lg lg:font-normal">
                    {" "}
                    Name of the project
                </label>
                <input
                    type="text"
                    className="my-1 border p-1 text-black"
                    {...register("name", { required: true })}
                />
                <label className="my-2 text-xs font-bold sm:text-sm md:text-base lg:text-lg lg:font-normal">
                    {" "}
                    Describe your project
                </label>
                <textarea
                    className="my-1"
                    cols="50"
                    rows="4"
                    {...register("description", { required: true })}
                />
                <label className="my-2 text-xs font-bold sm:text-sm md:text-base lg:text-lg lg:font-normal">
                    {" "}
                    Project submission deadline{" "}
                </label>
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
