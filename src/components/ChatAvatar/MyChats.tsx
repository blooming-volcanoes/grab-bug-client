/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/button-has-type */
import axios from "axios";
import cogoToast from "cogo-toast";
import chatState from "hooks/chatState";
import useAuth from "hooks/useAuth";
import React, { useEffect, useState } from "react";
import { ChatLoading } from "./ChatLoading";
import { getSender } from "./ChatLogic";

function MyChats() {
    const [loggedUser, setLoggedUser] = useState();
    const [other, setOther] = useState();

    const { user } = useAuth();
    const { selectedChat, chats, setChats, setSelectedChat } = chatState();

    const fetchChats = async () => {
        try {
            const config = {
                headers: {
                    Authorization: `${user.token}`,
                },
            };

            const { data } = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/chat`, config);

            const getData = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/me`, config);
            setLoggedUser(getData.data.user);

            setChats(data.chat);
        } catch (error) {
            cogoToast.error("Failed to Load the chats");
        }
    };

    useEffect(() => {
        fetchChats();
    }, [chats.length]);
    return (
        <div
            className={` ${
                selectedChat ? "hidden md:flex" : "flex md:flex"
            } bg-grey-800 h-screen  w-full flex-col justify-between border-4 md:w-3/12`}
        >
            <div className="flex w-full items-center justify-between px-2 pb-2">
                <div className="px-3 pb-3 text-lg ">My Chats</div>

                <button className="flex">New Group Chat</button>
            </div>

            <div className="flex h-full w-full flex-col overflow-y-hidden border-2 p-2">
                {chats ? (
                    <div>
                        {chats?.map((chat: any) => (
                            <div
                                onClick={() => chat.users && setSelectedChat(chat)}
                                className={`bottom-2 cursor-pointer px-2 py-2 ${
                                    selectedChat === chat ? "bg-green-900" : "bg-white"
                                }`}
                                key={chat._id}
                            >
                                <p>{chat.users && getSender(loggedUser, chat.users)}</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <ChatLoading />
                )}
            </div>
        </div>
    );
}

export default MyChats;
