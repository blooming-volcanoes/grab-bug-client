/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import Text from "./Text";
import Users from "./Users";

function SelectUsers({ users }: any) {
    return (
        <div className="my-2 w-full">
            <Text className="mb-2 text-[20px]">Select 1 or more users</Text>
            <div className="mb-5 max-h-24 w-full overflow-y-auto border-2 bg-white">
                <Users users={users} />
            </div>
        </div>
    );
}

export default SelectUsers;
