/* eslint-disable no-underscore-dangle */
import AuthenticatedLayout from "Layouts/AuthenticatedLayout";
import React from "react";
import { BsMessenger } from "react-icons/bs";
import LeftSide from "../../components/message/LeftSide";

function Message() {
    // const dispatch = useDispatch();
    // const {auth, socket, call} = useSelector(state => state)

    return (
        <AuthenticatedLayout>
            {/* <div> */}

            {/* </div> */}
            {/* <SocketClient /> */}
            <div className="message flex">
                <div className="w-full border-4 px-0 md:w-1/4">
                    <LeftSide />
                </div>

                <div className="right_mess w-full px-0">
                    <div
                        className="flex h-full 
                flex-col items-center justify-center"
                    >
                        <i
                            className="fab fa-facebook-messenger text-primary"
                            style={{ fontSize: "5rem" }}
                        />
                        <BsMessenger className="text-blue-600" style={{ fontSize: "5rem" }} />
                        <h4>Messenger</h4>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

export default Message;
