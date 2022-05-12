/* eslint-disable react/button-has-type */
/* eslint-disable consistent-return */
/* eslint-disable no-console */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */
import cogoToast from "cogo-toast";
import CircleLoader from "components/custom/CircleLoader";
import useAuth from "hooks/useAuth";
import UnAuthenticatedLayout from "Layouts/UnAuthenticatedLayout";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { IUser } from "types/Auth";
import logo from "../../assets/images/grabbug-logo.png";

function Register() {
    const { register, handleSubmit } = useForm<IUser>();
    const { register: signUp, verify, authLoading, verifyOtp } = useAuth();
    const [counter, setCounter] = useState(59);
    const [tempData, setTempData] = useState<any>({});

    // set otp minutes
    let timer: any;

    useEffect(() => {
        if (verify.success) {
            timer = setInterval(() => {
                if (counter === 0) {
                    return setCounter(0);
                }
                setCounter(counter - 1);
            }, 1000);
        }

        return () => clearInterval(timer);
    }, [counter, verify.success]);

    const handelRegister = async (data: IUser): Promise<void> => {
        if (data.password!.length < 6) {
            return cogoToast.error("Password must be at least 6 characters !!!");
        }
        if (verify.success) {
            await verifyOtp(data);
        } else {
            await signUp(data);
        }
        setTempData(data);
    };

    const resendOtp = async () => {
        setCounter(59);
        await signUp(tempData);
    };

    return (
        <UnAuthenticatedLayout title="Let's sign up - Grab bug">
            <div className="flex  h-screen items-center justify-center bg-gray-100 py-10">
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

                            <button className="primary-btn" type="submit">
                                GO
                            </button>

                            <p className="text-center">
                                Have you received the OPT ?{" "}
                                {counter === 0 ? (
                                    <button onClick={resendOtp}>Resend</button>
                                ) : (
                                    <span className="font-semibold text-blue-500">
                                        00 : {counter < 10 ? `0${counter}` : counter}
                                    </span>
                                )}
                            </p>
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

                            <button className="primary-btn" type="submit">
                                Sign up
                            </button>
                        </>
                    )}

                    {/* already registered */}
                    {!verify.success && (
                        <p className="text-center text-sm font-semibold">
                            Already have an account ?{" "}
                            <Link href="/login">
                                <a className="text-blue-500">Login</a>
                            </Link>
                        </p>
                    )}
                </form>
            </div>
        </UnAuthenticatedLayout>
    );
}

export default Register;
