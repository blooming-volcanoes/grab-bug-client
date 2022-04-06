/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/label-has-associated-control */
import Input from "components/molecules/Input/Input";
import SelectInputs from "components/molecules/SelectInputs/SelectInputs";
import React from "react";

interface ITextnputs {
    title: string;
    placeholder?: string;
    type?: string;
}
interface ISelectInputs {
    title: string;
    options: string[];
    values: string[];
}

const textInputs: ITextnputs[] = [
    {
        title: "Title",
        placeholder: "Your project title",
        type: "text",
    },
    {
        title: "Description",
        placeholder: "Your project description",
        type: "text",
    },
];

const selecTypeInputs: ISelectInputs[] = [
    {
        title: "Project",
        options: ["Demo Project 1", "Demo project 2", "Demo project 2"],
        values: ["Demo Project 1", "Demo project 2", "Demo project 2"],
    },
    {
        title: "Assigned Developer",
        options: ["Dev Musk", "Elon Musk", "Raiyan"],
        values: ["Dev Musk", "Elon Musk", "Raiyan"],
    },
    {
        title: "Ticket Priority",
        options: ["Medium", "High", "Average"],
        values: ["Medium", "High", "Average"],
    },
    {
        title: "Ticket Status",
        options: ["In Progress", "Done", "not sure"],
        values: ["In Progress", "Done", "not sure"],
    },
    {
        title: "Ticket Type",
        options: ["Bugs/Error", "Image Breaking", "Data flow"],
        values: ["Bugs/Error", "Image Breaking", "Data flow"],
    },
];

function TicketEdit() {
    return (
        <div className="mx-auto rounded-lg bg-white p-4  py-10 shadow lg:max-w-5xl">
            <div className="space-y-2  rounded-lg bg-indigo-500 p-4 capitalize text-white shadow-2xl">
                {/* ticket Edit header */}
                <h4 className="text-lg">Edit Ticket</h4>
                <p className="text-sm font-light">Change Ticket Properties</p>
            </div>

            {/* commenter details */}
            <div className="my-5 pt-3">
                <ul className="flex flex-col justify-between px-4 lg:flex-row lg:space-x-12">
                    {/* left side input boxes */}
                    <div className="space-y-6 lg:w-2/4 ">
                        {/* plain input text */}
                        {textInputs
                            .filter((input) => input.title === "Title")
                            .map((input, i) => (
                                <li key={i}>
                                    <label
                                        className="flex flex-col space-y-2"
                                        htmlFor={input.title}
                                    >
                                        <span className="text-sm font-semibold">{input.title}</span>
                                        <Input
                                            placeholder={input.placeholder}
                                            type={input.type}
                                            id={input.title}
                                            className="w-full  border-t-0  border-b-2 border-l-0 border-r-0 text-sm focus:ring-0"
                                        />
                                    </label>
                                </li>
                            ))}
                        {/* input type select */}
                        {selecTypeInputs
                            .filter(
                                (input) =>
                                    input.title !== "Project" &&
                                    input.title !== "Ticket Priority" &&
                                    input.title !== "Ticket Type"
                            )
                            .map((input, i) => (
                                <li key={i}>
                                    <label
                                        className="flex flex-col space-y-2"
                                        htmlFor={input.title}
                                    >
                                        <span className="text-sm font-semibold">{input.title}</span>
                                        <SelectInputs
                                            values={input.values}
                                            className="rounded border-2 text-sm focus:ring-0"
                                        />
                                    </label>
                                </li>
                            ))}
                    </div>
                    {/* right side input boxes */}
                    <div className="mt-4 space-y-6 lg:mt-0 lg:w-2/4 ">
                        {/* plain input text */}
                        {textInputs
                            .filter((input) => input.title === "Description")
                            .map((input, i) => (
                                <li key={i}>
                                    <label
                                        className="flex flex-col space-y-2"
                                        htmlFor={input.title}
                                    >
                                        <span className="text-sm font-semibold">{input.title}</span>
                                        <Input
                                            placeholder={input.placeholder}
                                            type={input.type}
                                            id={input.title}
                                            className="w-full border-t-0  border-b-2 border-l-0 border-r-0 text-sm focus:ring-0"
                                        />
                                    </label>
                                </li>
                            ))}
                        {/* input type select */}
                        {selecTypeInputs
                            .filter(
                                (input) =>
                                    input.title !== "Assigned Developer" &&
                                    input.title !== "Ticket Status"
                            )
                            .map((input, i) => (
                                <li key={i}>
                                    <label
                                        className="flex flex-col space-y-2"
                                        htmlFor={input.title}
                                    >
                                        <span className="text-sm font-semibold">{input.title}</span>
                                        <SelectInputs
                                            values={input.values}
                                            className="rounded border-2 text-sm focus:ring-0"
                                        />
                                    </label>
                                </li>
                            ))}
                    </div>
                </ul>
                {/* update button */}
                <div className="flex items-center justify-between pt-8">
                    <button
                        className="text-sm font-semibold text-indigo-500 underline"
                        type="button"
                    >
                        Back to list
                    </button>
                    <button className="primary-btn py-3 px-5 uppercase" type="button">
                        update ticket
                    </button>
                </div>
            </div>
        </div>
    );
}

export default TicketEdit;
