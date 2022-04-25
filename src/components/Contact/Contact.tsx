/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";

export default function Contact() {
    return (
        <div>
            <section className="body-font relative text-gray-700">
                <div className="container mx-auto px-5 py-10">
                    <div className="mb-12 flex w-full flex-col text-center">
                        <h1 className="mb-4 text-2xl font-bold text-[#22577E] sm:text-3xl">
                            Contact Us
                        </h1>
                        <p className="mx-auto text-base leading-relaxed lg:w-2/3">
                            Feel free to contact us with any kind of suggestion and feedback.
                        </p>
                    </div>
                    <div className="mx-auto md:w-2/3 lg:w-1/2">
                        <div className="-m-2 flex flex-wrap">
                            <div className="w-1/2 p-2">
                                <div className="relative">
                                    <label
                                        htmlFor="name"
                                        className="text-sm leading-7 text-gray-600"
                                    >
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="w-full rounded border border-gray-300 bg-gray-100 py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500"
                                    />
                                </div>
                            </div>
                            <div className="w-1/2 p-2">
                                <div className="relative">
                                    <label
                                        htmlFor="email"
                                        className="text-sm leading-7 text-gray-600"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="w-full rounded border border-gray-300 bg-gray-100 py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500"
                                    />
                                </div>
                            </div>
                            <div className="w-full p-2">
                                <div className="relative">
                                    <label
                                        htmlFor="message"
                                        className="text-sm leading-7 text-gray-600"
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        className="h-32 w-full resize-none rounded border border-gray-300 bg-gray-100 py-1 px-3 text-base leading-6 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500"
                                    />
                                </div>
                            </div>
                            <div className="flex w-full justify-center p-2">
                                <button className="primary-btn ">Button</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
