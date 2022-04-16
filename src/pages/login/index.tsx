/* eslint-disable react/no-unescaped-entities */
/* eslint-disable consistent-return */
/* eslint-disable no-console */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */
import logo from "assets/images/logo.svg";
import cogoToast from "cogo-toast";
import CircleLoader from "components/custom/CircleLoader";
import useAuth from "hooks/useAuth";
import UnAuthenticatedLayout from "Layouts/UnAuthenticatedLayout";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { IUser } from "types/Auth";

function Login() {
    const { register, handleSubmit } = useForm<IUser>();
    const { login, authLoading } = useAuth();

    const handelLogin = async (data: IUser): Promise<void> => {
        if (data.password!.length < 6) {
            return cogoToast.error("Password must be at least 6 characters !!!");
        }
        await login(data);
    };

    return (
        <UnAuthenticatedLayout title="Welcome - Grab bug">
            <div className="flex h-screen items-center justify-center bg-gray-100 py-10">
                <form
                    onSubmit={handleSubmit(handelLogin)}
                    className="mx-6 flex w-full flex-col space-y-6 rounded-lg border bg-white px-7 py-10 shadow-lg lg:w-2/5"
                >
                    {/* logo */}
                    <div className="mx-auto w-44">
                        <Image src={logo} />
                    </div>
                    {authLoading && (
                        <div>
                            <CircleLoader />
                        </div>
                    )}
                    <input
                        className="rounded-lg border-gray-300  py-4 text-sm shadow transition hover:shadow-lg"
                        type="email"
                        required
                        placeholder="Email"
                        {...register("email")}
                    />
                    <input
                        className="rounded-lg border-gray-300 py-4  text-sm shadow transition hover:shadow-lg"
                        type="password"
                        required
                        placeholder="Password"
                        {...register("password")}
                    />

                    <button
                        className="rounded-lg bg-indigo-500 py-3 px-4 text-white hover:bg-indigo-600"
                        type="submit"
                    >
                        Sign up
                    </button>

                    {/* already registered */}
                    <p className="text-center text-sm font-semibold">
                        Don't have an account ?{" "}
                        <Link href="/register">
                            <a className="text-indigo-500">Register</a>
                        </Link>
                    </p>
                </form>
            </div>
        </UnAuthenticatedLayout>
    );
}

export default Login;
