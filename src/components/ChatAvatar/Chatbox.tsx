import chatState from "hooks/chatState";
import React from "react";
import SingleChat from "./SingleChat";

function Chatbox() {
    const { selectedChat } = chatState();
    return (
        <div
            className={`${
                selectedChat ? "flex" : "hiddedn md:flex"
            }items-center w-full flex-col p-2 md:w-3/5`}
        >
            <SingleChat />
        </div>
    );
}

export default Chatbox;
