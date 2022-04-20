/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function TaskView() {
    return (
        <section className="mx-1 my-12 rounded-[55px] bg-blue-100  md:max-w-3xl lg:mx-auto lg:max-w-7xl">
            <div className="py-3">
                <h1 className="text-center text-xl font-bold text-blue-500">BUILT FOR EVERYONE</h1>
                <h1 className="text-center text-4xl font-bold">Built for teams from 1 to 500+</h1>
            </div>
            <div className="flex flex-col items-center space-x-3 p-10 md:flex-row">
                <div className="md:w-[40%]">
                    <div className="m-3 rounded-[3px] bg-white p-3 shadow-md">
                        <h1 className="text-[18px] font-bold">Visualize & plan</h1>
                        <h1 className="">
                            Manage any project from start to finish with highly customizable views
                            that make project planning a breeze.
                        </h1>
                    </div>
                    <div className="m-3 rounded-[3px] bg-white p-3 shadow-md">
                        <h1 className="text-[18px] font-bold">Collaborate</h1>
                        <h1 className="">
                            Work with your team in real-time with Chat, assign comments for action
                            items, and never miss a beat with notifications that bring everything in
                            one place.
                        </h1>
                    </div>
                    <div className="m-3 rounded-[3px] bg-white p-3 shadow-md">
                        <h1 className="text-[18px] font-bold">Track progress</h1>
                        <h1 className="">
                            Add visual widgets for team members, tasks, sprints, time tracking,
                            statuses, docs, embeds, and more.
                        </h1>
                    </div>
                </div>
                <div className="md:w-[60%]">
                    <img
                        src="https://i.ibb.co/crhw5f0/localhost-3000-dashboard-create-An-Issue.png"
                        alt=""
                        className="w-full rounded-[3px]"
                    />
                </div>
            </div>
        </section>
    );
}

export default TaskView;
