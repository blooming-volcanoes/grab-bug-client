/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Menu, Transition } from "@headlessui/react";
import chatState from "hooks/chatState";
import useAuth from "hooks/useAuth";
import { Fragment } from "react";
import { AiTwotoneBell } from "react-icons/ai";
import NotificationBadge, { Effect } from "react-notification-badge";
import { getSender } from "./ChatLogic";

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
}

function Notification() {
    const { setSelectedChat, notification, setNotification } = chatState();

    const { user } = useAuth();
    console.log("From the nogi");

    return (
        <div>
            {" "}
            <Menu as="div" className="relative inline-block text-left">
                <div>
                    <Menu.Button className="flex w-full justify-center rounded-md border border-gray-300 bg-white px-1 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
                        <AiTwotoneBell className="mx-auto text-4xl" />
                        <NotificationBadge count={notification.length} effect={Effect.SCALE} />
                        {/* <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" /> */}
                    </Menu.Button>
                </div>

                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-1">
                            {!notification.length && "No New Messages"}
                            {console.log("From the draa")}
                            {notification.map((notif: any) => (
                                <div
                                    key={notif._id}
                                    onClick={() => {
                                        setSelectedChat(notif.chat);
                                        setNotification(
                                            notification.filter((n: any) => n !== notif)
                                        );
                                    }}
                                >
                                    {notif.chat.isGroupChat
                                        ? `New Message in ${notif.chat.chatName}`
                                        : `New Message from ${getSender(user, notif.chat.users)}`}
                                </div>
                            ))}
                            <Menu.Item>
                                {({ active }) => (
                                    <a
                                        href="#"
                                        className={classNames(
                                            active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                                            "block px-4 py-2 text-sm"
                                        )}
                                    >
                                        License
                                    </a>
                                )}
                            </Menu.Item>
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
    );
}

export default Notification;
