/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-alert */
/* eslint-disable no-console */
/* eslint-disable react/jsx-props-no-spreading */
import cogoToast from "cogo-toast";
import React from "react";
import { useForm } from "react-hook-form";
import ProjectHttpReq from "services/Project.service";
import Heading from "./Heading";

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
        <div className="m-0 md:m-3">
            <div className="container mx-auto h-max rounded-[3px] shadow-[0_0_10px_#5584AC] md:p-3">
                <Heading />
                <form className="mx-1 mt-3 pb-3" onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col md:flex-row">
                        <input
                            style={{ outline: "none" }}
                            className="mb-3 w-full flex-auto rounded-[3px] border-2 border-solid py-2 px-3 focus:border-[#22577E] md:w-2/5"
                            placeholder="Project name"
                            {...register("name", { required: true })}
                        />

                        <div className="mb-3 w-full flex-auto rounded-[3px] border-2 border-solid py-2 px-3 focus:border-[#22577E] md:w-2/5">
                            <label className="mr-2">Deadline : </label>
                            <input
                                type="date"
                                style={{ outline: "none" }}
                                className="rounded-[3px] border-0 focus:border-[#22577E]"
                                {...register("deadline", { required: true })}
                            />
                        </div>
                    </div>
                    <textarea
                        style={{ outline: "none" }}
                        className="mb-3 mr-3 w-full flex-auto rounded-[3px] border-2 border-solid border-gray-200 py-2 px-3 focus:border-[#22577E]"
                        placeholder="Project Description"
                        {...register("description", { required: true })}
                    />

                    <button className="primary-btn" type="submit">
                        Create Project
                    </button>
                </form>

                {/* <p className="text-danger text-uppercase fs-4 mt-4 mb-5 pb-5 text-center">
                    {success}
                </p> */}
            </div>
        </div>
    );
}

export default ProjectCreate;
