/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
import useAuth from "hooks/useAuth";
import React from "react";
import { isLastMessage, isSameSender, isSameSenderMargin, isSameUser } from "./ChatLogic";

function ScrollableChat({ messages }: any) {
    const { user } = useAuth();

    const authId = user.user._id;
    return (
        <div>
            {messages &&
                messages.map((m: any, i: any) => (
                    <div className="flex">
                        {(isSameSender(messages, m, i, authId) ||
                            isLastMessage(messages, i, authId)) && (
                            <img className="mr-2 w-10 cursor-pointer" src={m.sender.pic} alt="" />
                        )}

                        <span
                            style={{
                                backgroundColor: `${
                                    m.sender._id === authId ? "#0c79b8" : "#810d17"
                                }`,
                                marginLeft: isSameSenderMargin(messages, m, i, authId),
                                marginTop: isSameUser(messages, m, i, authId) ? 3 : 10,
                                borderRadius: "20px",
                                padding: "5px 15px",
                                maxWidth: "75%",
                            }}
                        >
                            {m.content}
                        </span>
                    </div>
                ))}
        </div>
    );
}

export default ScrollableChat;
