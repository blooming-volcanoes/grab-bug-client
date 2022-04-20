/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-props-no-spreading */
import cogoToast from "cogo-toast";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import IssueHttpReq from "../../services/Issue.service";
import ProjectHttpReq from "../../services/Project.service";

function IssueCreate() {
    const [success, setSuccess] = useState<any>();
    const { register, handleSubmit, reset } = useForm<any>();
    const [projects, setProjects] = useState<any>([]);

    const onSubmit = async (data: any): Promise<void> => {
        const res = await IssueHttpReq.createIssue(data);
        if (res.data.success) {
            reset();
            cogoToast.success("issue Added Successfully !");
        }
    };

    // Text Fill text Remove
    const successTextRemover = () => {
        setSuccess(" ");
    };

    useEffect(async (): any => {
        const res = await ProjectHttpReq.getAllProjects();
        setProjects(res.projects);
    }, []);

    return (
        <div className="m-4">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex">
                    <input
                        style={{ outline: "none" }}
                        onClick={successTextRemover}
                        className="mb-3 mr-3 w-2/5 flex-auto border-2 border-solid border-indigo-600 py-2 px-3"
                        placeholder="Reporter Name"
                        {...register("reporterName")}
                    />

                    <input
                        style={{ outline: "none" }}
                        onClick={successTextRemover}
                        className="mb-3 ml-3 w-2/5 flex-auto border-2 border-solid border-indigo-600 py-2 px-3"
                        placeholder="Bug Category"
                        {...register("bugCategory")}
                    />
                </div>
                <div className="flex">
                    <input
                        style={{ outline: "none" }}
                        onClick={successTextRemover}
                        className="mb-3 mr-3 w-2/5  flex-auto border-2 border-solid border-indigo-600 py-2 px-3"
                        placeholder="Status"
                        {...register("status")}
                    />
                    {projects?.length && (
                        <select
                            {...register("projectId")}
                            className="mb-3 ml-3 w-2/5  flex-auto border-2 border-solid border-indigo-600 py-2 px-3"
                        >
                            {projects.map((project: any) => (
                                <option value={project._id} key={project._id}>
                                    {project.name}
                                </option>
                            ))}
                        </select>
                    )}
                </div>
                <textarea
                    style={{ outline: "none" }}
                    onClick={successTextRemover}
                    className="mb-3 mr-3 w-full flex-auto border-2 border-solid border-indigo-600 py-2 px-3"
                    placeholder="Bug Description"
                    {...register("bugDescription")}
                />

                <button
                    className="ml-auto flex w-auto rounded-lg bg-sky-600 px-9 py-4 text-center text-white"
                    type="submit"
                >
                    Add Issue
                </button>
            </form>

            <p className="text-danger text-uppercase fs-4 mt-4 mb-5 pb-5 text-center">{success}</p>
        </div>
    );
}

export default IssueCreate;
