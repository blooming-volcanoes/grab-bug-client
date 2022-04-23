import Chatbox from "components/ChatAvatar/Chatbox";
import MyChats from "components/ChatAvatar/MyChats";
import SideDrawer from "components/miscellaneous/SideDrawer";
import AuthenticatedLayout from "Layouts/AuthenticatedLayout";
import React from "react";

function index() {
    // const [fetchAgani, setFetchAgain] = useState(false);

    // const {user} = useAuth()
    return (
        <AuthenticatedLayout>
            <div className="w-full">
                <div>
                    <SideDrawer />
                </div>
                <div className="flex h-screen w-full justify-between p-3">
                    <MyChats />

                    <Chatbox />
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

export default index;
