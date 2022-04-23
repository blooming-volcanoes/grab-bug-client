/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import axios from "axios";
import cogoToast from "cogo-toast";
import chatState from "hooks/chatState";
import useAuth from "hooks/useAuth";
import React, { useState } from "react";

function SingleChat() {
    const [messages, setMessages] = useState([] as string[]);
    const [loading, setLoading] = useState(false);
    const [newMessage, setNewMessage] = useState("");

    const { selectedChat, setSelectedChat, notification, setNotification } = chatState();

    const { user } = useAuth();

    const typingHandler = (e: any) => {
        setNewMessage(e.target.value);
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
                    "http://localhost:5000/message",
                    {
                        content: newMessage,
                        chatId: selectedChat,
                    },
                    config
                );
                console.log(data);

                //   socket.emit("new message", data);
                setMessages([...messages, data]);
            } catch (error) {
                cogoToast.error("failed to send mesage");
            }
        }
    };

    return (
        <div className="container mx-auto">
            <div className="w-full rounded border">
                <div>
                    <div className="w-full">
                        <div className="relative flex items-center border-b border-gray-300 p-3">
                            <img
                                className="h-10 w-10 rounded-full object-cover"
                                src="https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083383__340.jpg"
                                alt="username"
                            />
                            <span className="ml-2 block font-bold text-gray-600">Emma</span>
                            <span className="absolute left-10 top-3 h-3 w-3 rounded-full bg-green-600" />
                        </div>
                        <div className="relative h-[25rem] w-full overflow-y-auto p-6">
                            {/* <ul className="space-y-2">
              <li className="flex justify-start">
                <div className="relative max-w-xl px-4 py-2 text-gray-700 rounded shadow">
                  <span className="block">Hi</span>
                </div>
              </li>
              <li className="flex justify-end">
                <div className="relative max-w-xl px-4 py-2 text-gray-700 bg-gray-100 rounded shadow">
                  <span className="block">Hiiii</span>
                </div>
              </li>
              <li className="flex justify-end">
                <div className="relative max-w-xl px-4 py-2 text-gray-700 bg-gray-100 rounded shadow">
                  <span className="block">how are you?</span>
                </div>
              </li>

            </ul> */}
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
    );
}

export default SingleChat;
