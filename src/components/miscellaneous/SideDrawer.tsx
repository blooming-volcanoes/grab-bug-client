/* eslint-disable no-underscore-dangle */
/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
/* eslint-disable react/button-has-type */

import React, { Dialog, Transition } from "@headlessui/react";
import axios from "axios";
import cogoToast from "cogo-toast";
import { ChatLoading, Spinner } from "components/ChatAvatar/ChatLoading";
import UserList from "components/ChatAvatar/UserList";
import chatState from "hooks/chatState";
import useAuth from "hooks/useAuth";
import { Fragment, useState } from "react";

// import { XIcon } from '@heroicons/react/outline'
function SideDrawer() {
    const [open, setOpen] = useState(false);
    const [search, setSearch] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    const [loading, setLoading] = useState(false);
    const [loadingChat, setLoadingChat] = useState(false);

    // Context api
    const { user } = useAuth();

    const { chats, setChats, setSelectedChat } = chatState();

    // Search User by email or name
    const handleSeacht = async (): Promise<void> => {
        if (!search) {
            return cogoToast.error("Please enter something in Serch !!!");
        }

        try {
            setLoading(true);
            const config = {
                headers: {
                    Authorization: ` ${user.token}`,
                },
            };

            const { data } = await axios.get(
                `http://localhost:5000/users?search=${search}`,
                config
            );

            setLoading(false);
            setSearchResult(data.users);
        } catch (error) {
            cogoToast.error("Failed to Load the Search Results");
        }
    };

    // accessing Chat

    const accessChat = async (userId: string): Promise<void> => {
        try {
            setLoadingChat(true);
            const config = {
                headers: {
                    "Content-type": "application/json",
                    Authorization: ` ${user.token}`,
                },
            };

            // Fetching chat data with id
            const { data } = await axios.post(`http://localhost:5000/chat/`, { userId }, config);

            // const chatData = data.fullChat;

            if (!chats.find((c: any) => c._id === data._id)) setChats([data, ...chats]);

            setSelectedChat(data);
            setLoading(false);

            setOpen(false);
        } catch (error) {
            cogoToast.error("Error fetching the chat");
        }
    };

    return (
        <>
            <div className="center flex items-center justify-between">
                <div>
                    <button onClick={() => setOpen(true)}>
                        <h3 className="text-sm">Search User</h3>
                    </button>
                </div>
                <div>
                    <h3 className="text-sm">Talk tative</h3>
                </div>
            </div>
            {/* Drawer */}
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="fixed inset-0 overflow-hidden" onClose={setOpen}>
                    <div className="absolute inset-0 overflow-hidden">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-in-out duration-500"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in-out duration-500"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                        </Transition.Child>
                        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                            <Transition.Child
                                as={Fragment}
                                enter="transform transition ease-in-out duration-500 sm:duration-700"
                                enterFrom="translate-x-full"
                                enterTo="translate-x-0"
                                leave="transform transition ease-in-out duration-500 sm:duration-700"
                                leaveFrom="translate-x-0"
                                leaveTo="translate-x-full"
                            >
                                <div className="pointer-events-auto relative w-screen max-w-md">
                                    <Transition.Child
                                        as={Fragment}
                                        enter="ease-in-out duration-500"
                                        enterFrom="opacity-0"
                                        enterTo="opacity-100"
                                        leave="ease-in-out duration-500"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >
                                        <div className="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 sm:-ml-10 sm:pr-4">
                                            <button
                                                type="button"
                                                className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                                                onClick={() => setOpen(false)}
                                            >
                                                <span className="sr-only">Close panel</span>
                                                {/* <XIcon className="h-6 w-6" aria-hidden="true" /> */}
                                            </button>
                                        </div>
                                    </Transition.Child>
                                    <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                                        <div className="px-4 sm:px-6">
                                            <Dialog.Title className="text-lg font-medium text-gray-900">
                                                {" "}
                                                Panel title{" "}
                                            </Dialog.Title>
                                        </div>
                                        <div className="relative mt-6 flex-1 px-4 sm:px-6">
                                            {/* Replace with your content */}
                                            <div>
                                                <input
                                                    type="text"
                                                    placeholder="Search by name or email"
                                                    className="mr-2"
                                                    value={search}
                                                    onChange={(e) => setSearch(e.target.value)}
                                                />
                                                <button
                                                    className="border-2 border-black px-3 py-2 "
                                                    onClick={handleSeacht}
                                                >
                                                    Go
                                                </button>
                                            </div>

                                            {loading ? (
                                                <ChatLoading />
                                            ) : (
                                                searchResult?.map((chatUser: any) => (
                                                    <UserList
                                                        key={chatUser._id}
                                                        chatUser={chatUser}
                                                        handleFunction={() =>
                                                            accessChat(chatUser._id)
                                                        }
                                                    />
                                                ))
                                            )}
                                            {/* Spinner  */}
                                            {loadingChat && <Spinner />}
                                            {/* /End replace */}
                                        </div>
                                    </div>
                                </div>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </>
    );
}

export default SideDrawer;