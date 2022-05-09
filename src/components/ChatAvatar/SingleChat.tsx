/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable no-useless-return */
/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import axios from "axios";
import cogoToast from "cogo-toast";
import chatState from "hooks/chatState";
import useAuth from "hooks/useAuth";
import React, { useEffect, useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Lottie from "react-lottie";
import io from "socket.io-client";
import typingAnimation from "../../assets/animation/typing.json";
import { Spinner } from "./ChatLoading";
import { getSender } from "./ChatLogic";
import ScrollableChat from "./ScrollableChat";

const ENDPOINT: any = process.env.NEXT_PUBLIC_BASE_URL;

let socket: any;
let selectedChatCompare: any;

function SingleChat() {
    const [messages, setMessages] = useState([] as string[]);
    const [loading, setLoading] = useState(false);
    const [newMessage, setNewMessage] = useState("");
    const [socketConnected, setSocketConnected] = useState(false);
    const [typing, setTyping] = useState(false);
    const [istyping, setIsTyping] = useState(false);

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: typingAnimation,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    const { selectedChat, setSelectedChat, notification, setNotification } = chatState();

    const { user } = useAuth();

    useEffect(() => {
        socket = io(ENDPOINT);
        socket.emit("setup", user.user);
        socket.on("connected", () => setSocketConnected(true));
        socket.on("typing", () => setIsTyping(true));
        socket.on("stop typing", () => setIsTyping(false));
    }, []);

    // console.log("ites tying", socketConnected);

    const fetchMessages = async () => {
        if (!selectedChat) return;

        try {
            const config = {
                headers: {
                    Authorization: ` ${user.token}`,
                },
            };

            setLoading(true);

            const { data } = await axios.get(
                `${process.env.NEXT_PUBLIC_BASE_URL}/message/${selectedChat._id}`,
                config
            );
            setMessages(data);
            setLoading(false);

            socket.emit("join chat", selectedChat._id);
        } catch (error) {
            cogoToast.error("failed to load mesage");
        }
    };

    const sendMessage = async (event: any) => {
        if (event.key === "Enter" && newMessage) {
            // socket.emit("stop typing", selectedChat._id);
            try {
                const config = {
                    headers: {
                        "Content-type": "application/json",
                        Authorization: ` ${user.token}`,
                    },
                };
                setNewMessage("");
                const { data } = await axios.post(
                    `${process.env.NEXT_PUBLIC_BASE_URL}/message`,
                    {
                        content: newMessage,
                        chatId: selectedChat,
                    },
                    config
                );

                socket.emit("new message", data);
                setMessages([...messages, data]);
            } catch (error) {
                cogoToast.error("failed to send mesage");
            }
        }
    };

    useEffect(() => {
        fetchMessages();

        selectedChatCompare = selectedChat;
        // eslint-disable-next-line
    }, [selectedChat]);

    useEffect(() => {
        socket.on("message recieved", (newMessageRecieved: any) => {
            if (!selectedChatCompare || selectedChatCompare._id !== newMessageRecieved.chat._id) {
                if (!notification.includes(newMessageRecieved)) {
                    setNotification([newMessageRecieved, ...notification]);
                }
            } else {
                setMessages([...messages, newMessageRecieved]);
            }
        });
    });

    const typingHandler = (e: any) => {
        setNewMessage(e.target.value);

        if (!socketConnected) return;

        if (!typing) {
            setTyping(true);
            socket.emit("typing", selectedChat._id);
        }

        const lastTypingTime = new Date().getTime();
        const timerLength = 3000;

        setTimeout(() => {
            const timeNow = new Date().getTime();
            const timeDiff = timeNow - lastTypingTime;
            if (timeDiff >= timerLength && typing) {
                socket.emit("stop typing", selectedChat._id);
                setTyping(false);
            }
        }, timerLength);
    };

    const logId = user.user;
    // eslint-disable-next-line prefer-destructuring
    const users = selectedChat?.users;

    // console.log( );

    return (
        <div>
            {selectedChat ? (
                <div className="container mx-auto">
                    <div className="w-full rounded border">
                        <div>
                            <div className="w-full">
                                <AiOutlineArrowLeft onClick={() => setSelectedChat("")} />
                                <div className="relative flex items-center border-b border-gray-300 p-3">
                                    <img
                                        className="h-10 w-10 rounded-full object-cover"
                                        src="https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083383__340.jpg"
                                        alt="username"
                                    />
                                    <span className="ml-2 block font-bold text-gray-600">
                                        {selectedChat?.users && getSender(logId, users)}
                                    </span>
                                    <span className="absolute left-10 top-3 h-3 w-3 rounded-full bg-green-600" />
                                </div>
                                <div className="relative h-[25rem] w-full overflow-y-auto p-6">
                                    {/* Showing message here */}

                                    {loading ? (
                                        <Spinner />
                                    ) : (
                                        <div>
                                            <ScrollableChat messages={messages} />
                                            {istyping ? (
                                                <div>
                                                    <Lottie
                                                        options={defaultOptions}
                                                        // height={50}
                                                        width={70}
                                                        style={{ marginBottom: 15, marginLeft: 0 }}
                                                    />
                                                </div>
                                            ) : (
                                                <></>
                                            )}
                                        </div>
                                    )}
                                </div>

                                <div className="flex w-full items-center justify-between border-t border-gray-300 p-3">
                                    <input
                                        type="text"
                                        placeholder="Message"
                                        className="mx-3 block w-full rounded-full bg-gray-100 py-2 pl-4 outline-none focus:text-gray-700"
                                        name="message"
                                        value={newMessage}
                                        onChange={typingHandler}
                                        onKeyDown={sendMessage}
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="flex   h-screen items-center justify-center bg-slate-700">
                    <p className="pb-3 text-center text-2xl">Click on user to start chatting</p>
                </div>
            )}
        </div>
    );
}

export default SingleChat;
