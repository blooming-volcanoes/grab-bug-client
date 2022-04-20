/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-props-no-spreading */
import cogoToast from "cogo-toast";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import IssueHttpReq from "../../services/Issue.service";
import ProjectHttpReq from "../../services/Project.service";
import Heading from "./Heading";

function IssueCreate() {
    const [success, setSuccess] = useState<any>();
    const { register, handleSubmit, reset } = useForm<any>();
    const [projects, setProjects] = useState<any>([]);
    const [severity] = useState<any>(["low", "moderate", "high", "extreme"]);

    const onSubmit = async (data: any): Promise<void> => {
        const res = await IssueHttpReq.createIssue(data);
        if (res.data.success) {
            reset();
            cogoToast.success("issue Added Successfully!");
        }
    };

    // Text Fill text Remove
    const successTextRemover = () => {
        setSuccess(" ");
    };

    useEffect(() => {
        const fetchData = async () => {
            const res = await ProjectHttpReq.getAllProjects();
            setProjects(res.projects);
        };
        fetchData();
    }, []);

    return (
        <div className="m-0 md:m-3">
            <div className="container mx-auto h-max rounded-[3px] shadow-[0_0_10px_#5584AC] md:p-3">
                <Heading />
                <form className="mx-1 mt-3" onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col md:flex-row">
                        <input
                            style={{ outline: "none" }}
                            onClick={successTextRemover}
                            className="mb-3 mr-3 w-full flex-auto rounded-[3px] border-2 border-solid py-2 px-3 focus:border-[#22577E] md:w-2/5"
                            placeholder="Title"
                            {...register("title")}
                        />

                        <input
                            style={{ outline: "none" }}
                            onClick={successTextRemover}
                            className="mb-3 mr-3 w-full flex-auto rounded-[3px] border-2 border-solid py-2 px-3 focus:border-[#22577E] md:w-2/5"
                            placeholder="Reporter Name"
                            {...register("reporterName")}
                        />

                        <input
                            style={{ outline: "none" }}
                            onClick={successTextRemover}
                            className="mb-3 mr-3 w-full flex-auto rounded-[3px] border-2 border-solid py-2 px-3 focus:border-[#22577E] md:w-2/5"
                            placeholder="Bug Category"
                            {...register("bugCategory")}
                        />
                    </div>
                    <div className="flex flex-col md:flex-row">
                        <input
                            style={{ outline: "none" }}
                            onClick={successTextRemover}
                            className="mb-3 mr-3 w-full flex-auto rounded-[3px] border-2 border-solid py-2 px-3 focus:border-[#22577E] md:w-2/5"
                            placeholder="Status"
                            {...register("status")}
                        />
                        {projects?.length && (
                            <select
                                {...register("project")}
                                className="mb-3 mr-3 w-full flex-auto rounded-[3px] border-2 border-solid py-2 px-3 focus:border-[#22577E] md:w-2/5"
                            >
                                {projects.map((project: any) => (
                                    <option value={project._id} key={project._id}>
                                        {project.name}
                                    </option>
                                ))}
                            </select>
                        )}
                        {severity?.length && (
                            <select
                                {...register("severity")}
                                className="mb-3 mr-3 w-full flex-auto rounded-[3px] border-2 border-solid py-2 px-3 focus:border-[#22577E] md:w-2/5"
                            >
                                {severity.map((s: any) => (
                                    <option value={s} key={s}>
                                        {s}
                                    </option>
                                ))}
                            </select>
                        )}
                    </div>
                    <div className="mx-1 flex flex-col md:flex-row">
                        <textarea
                            style={{ outline: "none" }}
                            onClick={successTextRemover}
                            className="mb-3 mr-3 w-full flex-auto rounded-[3px] border-2 border-solid py-2 px-3 focus:border-[#22577E]"
                            placeholder="Bug Description"
                            {...register("bugDescription")}
                        />
                    </div>

                    <button className="primary-btn" type="submit">
                        Add Issue
                    </button>
                </form>

                <p className="text-danger text-uppercase fs-4 mt-4 mb-5 pb-5 text-center">
                    {success}
                </p>
            </div>
        </div>
    );
}

export default IssueCreate;
