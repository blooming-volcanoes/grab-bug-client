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
                console.log(res);
                cogoToast.success("Project created");
            }
        } catch (err) {
            console.log(err.response.data);
        }

        reset();
    };
    return (
        <div className="flex h-screen justify-center p-5">
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
                    style={{ outline: "none" }}
                    cols={15}
                    rows={5}
                    className="mb-3 mr-3 h-[100px] w-full flex-auto rounded-[3px] border-2 border-solid border-gray-200 py-2 px-3 focus:border-[#22577E]"
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

                <button type="submit" className="primary-btn my-2 w-[50%]">
                    {" "}
                    Create Project
                </button>
            </form>
        </div>
    );
}

export default ProjectCreate;
