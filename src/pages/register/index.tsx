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
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { IUser } from "types/Auth";

function Register() {
    const { register, handleSubmit } = useForm<IUser>();
    const { register: siginUp, verify, authLoading } = useAuth();

    useEffect(() => {
        console.log(verify);
    }, [verify]);

    const handelRegister = async (data: IUser): Promise<void> => {
        if (data.password!.length < 6) {
            return cogoToast.error("Password must be at least 6 characters !!!");
        }
        if (verify.success) {
            console.log(data);
        } else {
            await siginUp(data);
        }
    };

    return (
        <UnAuthenticatedLayout title="Let's sign up - Grab bug">
            <div className="flex items-center justify-center bg-gray-100 py-10">
                <form
                    onSubmit={handleSubmit(handelRegister)}
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

                    {verify.success ? (
                        <>
                            <h1 className="text-center text-lg text-gray-500">
                                Please give your{" "}
                                <span className="font-semibold text-indigo-500">OTP</span> here
                            </h1>
                            <input
                                className="rounded-lg border-gray-300 py-4  text-sm shadow transition hover:shadow-lg"
                                type="text"
                                required
                                placeholder="Fill your otp"
                                {...register("code")}
                            />

                            <button
                                className="rounded-lg bg-indigo-500 py-3 px-4 text-white hover:bg-indigo-600"
                                type="submit"
                            >
                                GO
                            </button>
                        </>
                    ) : (
                        <>
                            <input
                                className="rounded-lg border-gray-300  py-4 text-sm shadow transition hover:shadow-lg"
                                type="text"
                                required
                                placeholder="Name"
                                {...register("name")}
                            />
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
                        </>
                    )}

                    {/* already registered */}
                    {!verify.success && (
                        <p className="text-center text-sm font-semibold">
                            Already have an account ?{" "}
                            <Link href="/login">
                                <a className="text-indigo-500">Login</a>
                            </Link>
                        </p>
                    )}
                </form>
            </div>
        </UnAuthenticatedLayout>
    );
}

export default Register;
