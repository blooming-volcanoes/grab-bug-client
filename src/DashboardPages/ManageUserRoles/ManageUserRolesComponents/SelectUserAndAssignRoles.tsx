/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unneeded-ternary */
/* eslint-disable no-underscore-dangle */
<<<<<<< HEAD
import cogoToast from "cogo-toast";
=======
>>>>>>> 690308be5cd3958a24faf9db8d12562fb7ae173a
import React from "react";
import { useForm } from "react-hook-form";
import UserHttpReq from "services/People.service";
import Text from "./Text";

<<<<<<< HEAD
function SelectUserAndAssignRoles({ users, roles, project }: any) {
    const { register, handleSubmit, reset } = useForm<any>();
    const onSubmit = async (data: any) => {
        const res = await UserHttpReq.editUserRole({ ...data, projectId: project._id });
        if (res.success) {
            cogoToast.success("User assigned");
            reset();
        }
=======
function SelectUserAndAssignRoles({ users, roles }: any) {
    const { register, handleSubmit, reset } = useForm<any>();
    const onSubmit = async (data: any) => {
        const a = await UserHttpReq.editUserRole(data.user, data);
        console.log(a);
>>>>>>> 690308be5cd3958a24faf9db8d12562fb7ae173a
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="my-2 w-full">
                <Text className="mb-2 text-[20px]">Select a user</Text>
                <div className="mb-5 max-h-24 w-full overflow-y-auto bg-white">
                    <div>
                        <select className="w-full" {...register("user")}>
                            {/* there is a react-specific error with the below line. to be fixed later */}
                            <option selected disabled value="">
                                Choose one
                            </option>
                            {users.map((user: any) => {
                                if (roles.indexOf(user.role) === -1) {
<<<<<<< HEAD
                                    // this condition above line ensures that a user already assigned a role will not appear in the dropdown
=======
                                    // this check on above line ensures that a user already assigned a role will not appear in the dropdown
>>>>>>> 690308be5cd3958a24faf9db8d12562fb7ae173a
                                    return (
                                        <option value={user._id} key={user._id}>
                                            {user.name}
                                        </option>
                                    );
                                }
                            })}
                        </select>
                    </div>
                </div>
            </div>
            <div className="mb-5">
                <Text className="text-[20px]">Select the role to assign</Text>
                <select className="w-full" {...register("role")}>
                    {/* there is a react-specific error with the below line. to be fixed */}
                    <option selected disabled value="">
                        Choose one
                    </option>
                    {roles.map((role: any) => (
                        <option value={role} key={role}>
                            {role}
                        </option>
                    ))}
                </select>
            </div>
            <button type="submit" className="primary-btn">
                Submit
            </button>
        </form>
    );
}

export default SelectUserAndAssignRoles;
