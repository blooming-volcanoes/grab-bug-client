/* eslint-disable react/jsx-no-useless-fragment */
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
    const [severity] = useState<any>(["low", "moderate", "high", "extreme"]);

    const onSubmit = async (data: any): Promise<void> => {
        const res = await IssueHttpReq.createIssue(data);
        if (res.data.success) {
            reset();
            cogoToast.success("Ticket edited successfully!");
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
        <>
            {projects.length ? (
                <div className="m-0 md:m-3">
                    <div className="container mx-auto h-max rounded-[3px] shadow-[0_0_10px_#5584AC] md:p-3">
                        <div className="rounded-[3px] bg-gradient-to-r from-[#22577E] via-[#5584AC] to-[#22577E] p-4">
                            <h1 className="text-2xl font-bold uppercase text-[#FAFFAF]">
                                Edit Ticket
                            </h1>
                            <p className="text-[#95D1CC]">
                                You can edit the existing fields here or rewrite them
                            </p>
                        </div>
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
            ) : (
                <h2>Loading</h2>
            )}
        </>
    );
}

export default IssueCreate;

// /* eslint-disable react/no-array-index-key */
// /* eslint-disable jsx-a11y/label-has-associated-control */
// import Input from "molecules/Input/Input";
// import SelectInputs from "molecules/SelectInputs/SelectInputs";
// import React from "react";

// interface ITextnputs {
//     title: string;
//     placeholder?: string;
//     type?: string;
// }
// interface ISelectInputs {
//     title: string;
//     options: string[];
//     values: string[];
// }

// const textInputs: ITextnputs[] = [
//     {
//         title: "Title",
//         placeholder: "Your project title",
//         type: "text",
//     },
//     {
//         title: "Description",
//         placeholder: "Your project description",
//         type: "text",
//     },
// ];

// const selecTypeInputs: ISelectInputs[] = [
//     {
//         title: "Project",
//         options: ["Demo Project 1", "Demo project 2", "Demo project 2"],
//         values: ["Demo Project 1", "Demo project 2", "Demo project 2"],
//     },
//     {
//         title: "Assigned Developer",
//         options: ["Dev Musk", "Elon Musk", "Raiyan"],
//         values: ["Dev Musk", "Elon Musk", "Raiyan"],
//     },
//     {
//         title: "Ticket Priority",
//         options: ["Medium", "High", "Average"],
//         values: ["Medium", "High", "Average"],
//     },
//     {
//         title: "Ticket Status",
//         options: ["In Progress", "Done", "not sure"],
//         values: ["In Progress", "Done", "not sure"],
//     },
//     {
//         title: "Ticket Type",
//         options: ["Bugs/Error", "Image Breaking", "Data flow"],
//         values: ["Bugs/Error", "Image Breaking", "Data flow"],
//     },
// ];

// function TicketEdit({ issue }: any) {
//     return (
//         <div className="mx-auto rounded-lg bg-white p-4  py-10 shadow lg:max-w-5xl">
//             <div className="space-y-2  rounded-lg bg-indigo-500 p-4 capitalize text-white shadow-2xl">
//                 {/* ticket Edit header */}
//                 <h4 className="text-lg">Edit Ticket</h4>
//                 <p className="text-sm font-light">Change Ticket Properties</p>
//             </div>

//             {/* commenter details */}
//             <div className="my-5 pt-3">
//                 <ul className="flex flex-col justify-between px-4 lg:flex-row lg:space-x-12">
//                     {/* left side input boxes */}
//                     <div className="space-y-6 lg:w-2/4 ">
//                         {/* plain input text */}
//                         {textInputs
//                             .filter((input) => input.title === "Title")
//                             .map((input, i) => (
//                                 <li key={i}>
//                                     <label
//                                         className="flex flex-col space-y-2"
//                                         htmlFor={input.title}
//                                     >
//                                         <span className="text-sm font-semibold">{input.title}</span>
//                                         <Input
//                                             placeholder={input.placeholder}
//                                             type={input.type}
//                                             id={input.title}
//                                             className="w-full  border-t-0  border-b-2 border-l-0 border-r-0 text-sm focus:ring-0"
//                                         />
//                                     </label>
//                                 </li>
//                             ))}
//                         {/* input type select */}
//                         {selecTypeInputs
//                             .filter(
//                                 (input) =>
//                                     input.title !== "Project" &&
//                                     input.title !== "Ticket Priority" &&
//                                     input.title !== "Ticket Type"
//                             )
//                             .map((input, i) => (
//                                 <li key={i}>
//                                     <label
//                                         className="flex flex-col space-y-2"
//                                         htmlFor={input.title}
//                                     >
//                                         <span className="text-sm font-semibold">{input.title}</span>
//                                         <SelectInputs
//                                             values={input.values}
//                                             className="rounded border-2 text-sm focus:ring-0"
//                                         />
//                                     </label>
//                                 </li>
//                             ))}
//                     </div>
//                     {/* right side input boxes */}
//                     <div className="mt-4 space-y-6 lg:mt-0 lg:w-2/4 ">
//                         {/* plain input text */}
//                         {textInputs
//                             .filter((input) => input.title === "Description")
//                             .map((input, i) => (
//                                 <li key={i}>
//                                     <label
//                                         className="flex flex-col space-y-2"
//                                         htmlFor={input.title}
//                                     >
//                                         <span className="text-sm font-semibold">{input.title}</span>
//                                         <Input
//                                             placeholder={input.placeholder}
//                                             type={input.type}
//                                             id={input.title}
//                                             className="w-full border-t-0  border-b-2 border-l-0 border-r-0 text-sm focus:ring-0"
//                                         />
//                                     </label>
//                                 </li>
//                             ))}
//                         {/* input type select */}
//                         {selecTypeInputs
//                             .filter(
//                                 (input) =>
//                                     input.title !== "Assigned Developer" &&
//                                     input.title !== "Ticket Status"
//                             )
//                             .map((input, i) => (
//                                 <li key={i}>
//                                     <label
//                                         className="flex flex-col space-y-2"
//                                         htmlFor={input.title}
//                                     >
//                                         <span className="text-sm font-semibold">{input.title}</span>
//                                         <SelectInputs
//                                             values={input.values}
//                                             className="rounded border-2 text-sm focus:ring-0"
//                                         />
//                                     </label>
//                                 </li>
//                             ))}
//                     </div>
//                 </ul>
//                 {/* update button */}
//                 <div className="flex items-center justify-between pt-8">
//                     <button
//                         className="text-sm font-semibold text-indigo-500 underline"
//                         type="button"
//                     >
//                         Back to list
//                     </button>
//                     <button className="primary-btn py-3 px-5 uppercase" type="button">
//                         update ticket
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default TicketEdit;
