import React from "react";

function TaskDetails() {
    return (
        <section className="bg-gray-100">
            <div className="gird-cols-1 mx-4 grid gap-y-4 gap-x-4 py-10 md:mx-auto md:max-w-3xl lg:mx-auto lg:max-w-6xl lg:grid-cols-12">
                {/* details side */}
                <div className=" lg:col-span-6">
                    <div className="rounded-lg bg-white p-4 shadow">
                        <div>
                            {/* ticket details header */}
                            <h4>Details for ticket #12</h4>
                            <button type="button">Back to list</button>
                            <button type="button">Edit</button>
                        </div>

                        {/* ticket more details */}
                        <div>
                            <ul>
                                <li>
                                    <p>
                                        <span>Ticket title</span>
                                        <span>Great work</span>
                                    </p>
                                    <p>
                                        <span>Ticket Description</span>
                                        <span>Keep on plugins in your code</span>
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* comment side */}
                <div className="lg:col-span-6">
                    <div>
                        <h1>Add a comment ?</h1>

                        {/* input for comment */}
                        <div>
                            <input type="text" />
                            <button type="button">Add</button>
                        </div>

                        {/* ticket comments */}
                        <div>
                            {/* ticket header */}
                            <h1>Ticket comments</h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TaskDetails;
