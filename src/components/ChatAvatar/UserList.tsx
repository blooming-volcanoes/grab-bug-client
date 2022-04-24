/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";

function UserList({ chatUser, handleFunction }: any) {
    return (
        <div
            onClick={handleFunction}
            className="mb-2 flex w-full cursor-pointer items-center border-2 px-3 py-2"
        >
            <img className="mr-2 w-10 cursor-pointer" src={chatUser.pic} alt="" />
            <div>
                <p className="text-sm">{chatUser.name}</p>
                <p className="text-xs">Email: {chatUser.email}</p>
            </div>
        </div>
    );
}

export default UserList;
