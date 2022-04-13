/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import Text from "./Text";
import Users from "./Users";

function SelectUsers({ users }: any) {
    return (
        <div>
            <Text className="mb-2 text-xl">Select 1 or more users</Text>
            <div className="mb-7 max-h-24 max-w-sm overflow-y-auto border-2 bg-white">
                <Users users={users} />
            </div>
        </div>
    );
}

export default SelectUsers;
