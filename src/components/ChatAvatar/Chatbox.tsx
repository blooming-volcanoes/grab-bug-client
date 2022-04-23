import chatState from "hooks/chatState";
import React from "react";
import SingleChat from "./SingleChat";

function Chatbox() {
    const { selectedChat } = chatState();
    return (
        <div
            className={`${
                selectedChat ? "flex" : "hidden  md:flex"
            }items-center w-full flex-col rounded-lg border-2 p-2 md:w-3/5`}
        >
            <SingleChat />
        </div>
    );
}

export default Chatbox;
