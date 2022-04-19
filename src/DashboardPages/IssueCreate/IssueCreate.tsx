/* eslint-disable react/jsx-props-no-spreading */
import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

function IssueCreate() {
    const [success, setSuccess] = useState<any>();
    const { register, handleSubmit, reset } = useForm<any>();

    const onSubmit = (data: any): any => {
        axios.post("http://localhost:3000/issues", data).then((res) => {
            if (res.data.insertedId) {
                // alert("Package Addeded Successfully!");
                reset();
                setSuccess("issue Added Successfully !");
            }
        });
    };

    // Text Fill text Remove
    const successTextRemover = () => {
        setSuccess(" ");
    };
    return (
        <div className="m-4">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex">
                    <input
                        style={{ outline: "none" }}
                        onClick={successTextRemover}
                        className="mb-3 mr-3 w-2/5 flex-auto border-2 border-solid border-indigo-600 py-2 px-3"
                        placeholder="Reporter Name"
                        {...register("reporter_name")}
                    />

                    <input
                        style={{ outline: "none" }}
                        onClick={successTextRemover}
                        className="mb-3 ml-3 w-2/5 flex-auto border-2 border-solid border-indigo-600 py-2 px-3"
                        placeholder="Bug Category"
                        {...register("bug_category")}
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
                    <input
                        style={{ outline: "none" }}
                        onClick={successTextRemover}
                        className="mb-3 ml-3 w-2/5  flex-auto border-2 border-solid border-indigo-600 py-2 px-3"
                        placeholder="Project ID"
                        {...register("project_id")}
                    />
                </div>
                <textarea
                    style={{ outline: "none" }}
                    onClick={successTextRemover}
                    className="mb-3 mr-3 w-full flex-auto border-2 border-solid border-indigo-600 py-2 px-3"
                    placeholder="Bug Description"
                    {...register("bug_description")}
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
