/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, useState } from "react";
import { UserChatContext } from "types/Auth";

export const ChatContext = createContext<UserChatContext>({} as UserChatContext);

function ChatProvider({ children }: { children: React.ReactNode }) {
    const [selectedChat, setSelectedChat] = useState();
    const [notification, setNotification] = useState([]);
    const [chats, setChats] = useState([]);

    const chatObj: UserChatContext = {
        selectedChat,
        setSelectedChat,
        notification,
        chats,
        setChats,
        setNotification,
    };

    return <ChatContext.Provider value={chatObj}>{children}</ChatContext.Provider>;
}

export default ChatProvider;
