/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
/* eslint-disable import/prefer-default-export */

export const getSenderFull = (loggedUser: any, users: any) => console.log(users[0]);

export interface ChatLogic {
    messages: any;
    m: any;
    i: any;
    userId: string;
}

export const getSender = (loggedUser: any, users: any) =>
    users[0]?._id === loggedUser?._id ? users[1].name : users[0].name;

export const isSameSenderMargin = (messages: any, m: any, i: any, userId: string) => {
    // console.log(i === messages.length - 1);

    if (
        i < messages.length - 1 &&
        messages[i + 1].sender._id === m.sender._id &&
        messages[i].sender._id !== userId
    )
        return 33;
    if (
        (i < messages.length - 1 &&
            messages[i + 1].sender._id !== m.sender._id &&
            messages[i].sender._id !== userId) ||
        (i === messages.length - 1 && messages[i].sender._id !== userId)
    )
        return 0;
    return "auto";
};

export const isSameSender = (messages: any, m: any, i: any, userId: string) =>
    i < messages.length - 1 &&
    (messages[i + 1].sender._id !== m.sender._id || messages[i + 1].sender._id === undefined) &&
    messages[i].sender._id !== userId;

export const isLastMessage = (messages: any, i: any, userId: string) =>
    i === messages.length - 1 &&
    messages[messages.length - 1].sender._id !== userId &&
    messages[messages.length - 1].sender._id;

export const isSameUser = (messages: any, m: any, i: any, userId: string) =>
    i > 0 && messages[i - 1].sender._id === m.sender._id;
