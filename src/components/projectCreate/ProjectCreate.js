/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-alert */
/* eslint-disable no-console */
/* eslint-disable react/jsx-props-no-spreading */
import cogoToast from "cogo-toast";
import useAuth from "hooks/useAuth";
import { useRouter } from "next/router";
import React from "react";
import { useForm } from "react-hook-form";
import ProjectHttpReq from "services/Project.service";

function ProjectCreate() {
    const router = useRouter();
    const { updateLocalStorageOnUserDataChanged, setUser } = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = async (data) => {
        try {
            const res = await ProjectHttpReq.createProject(data);
            if (res.success) {
                console.log(res);
                cogoToast.success("Project created");
                updateLocalStorageOnUserDataChanged(res.user);
                setUser((prev) => ({ ...prev, user: res.user }));
                router.push("/dashboard/projects/myProjects");
            }
        } catch (err) {
            console.log(err.response.data);
        }

        reset();
    };
    return (
        <div className="m-0 md:m-3">
            <div className="container mx-auto h-max rounded-[3px] shadow-[0_0_10px_#5584AC] md:p-3">
                <div className="rounded-[3px] bg-gradient-to-r from-[#22577E] via-[#5584AC] to-[#22577E] p-4">
                    <h1 className="text-2xl font-bold uppercase text-[#FAFFAF]">Create Project</h1>
                    <p className="text-[#95D1CC]">Create a Project and report to product manager</p>
                </div>
                <form className="mx-1 mt-3" onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col md:flex-row">
                        <input
                            type="text"
                            style={{ outline: "none" }}
                            className="mb-3 mr-3 w-full flex-auto rounded-[3px] border-2 border-solid py-2 px-3 focus:border-[#22577E] md:w-2/5"
                            placeholder="Name of your project"
                            {...register("name", { required: true })}
                        />
                        <div>
                            <label className="my-2 text-xs font-bold sm:text-sm md:text-base lg:text-lg lg:font-normal">
                                {" "}
                                Project submission deadline:{" "}
                            </label>
                            <input
                                type="date"
                                className="rounded-[3px] border-2 border-solid py-2 px-3 focus:border-[#22577E]"
                                {...register("deadline", { required: true })}
                            />
                        </div>
                    </div>
                    <div className="mt-3 flex flex-col md:mt-0 md:flex-row">
                        <textarea
                            style={{ outline: "none" }}
                            cols={15}
                            rows={5}
                            className="mb-3 w-full flex-auto rounded-[3px] border-2 border-solid py-2 px-3 focus:border-[#22577E] md:w-2/5"
                            {...register("description", { required: true })}
                            placeholder="describe your project"
                        />
                    </div>

                    <button type="submit" className="primary-btn">
                        {" "}
                        Create Project
                    </button>
                </form>
            </div>
        </div>
    );
}

export default ProjectCreate;
