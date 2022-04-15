/* eslint-disable no-console */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */
import logo from "assets/images/logo.svg";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { IUser } from "types/Auth";

function Register() {
    const { register, handleSubmit } = useForm<IUser>();

    const handelRegister = (data: IUser) => {
        console.log(data);
    };

    return (
        <section>
            <div className="flex h-screen items-center justify-center bg-gray-100">
                <form
                    onSubmit={handleSubmit(handelRegister)}
                    className="flex flex-col space-y-6 rounded-lg border bg-white px-7 py-10 shadow-lg lg:w-2/5"
                >
                    {/* logo */}
                    <div className="mx-auto w-44">
                        <Image src={logo} />
                    </div>
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

                    {/* already registered */}
                    <p className="text-center text-sm font-semibold">
                        Already have an account ?{" "}
                        <Link href="/login">
                            <a className="text-indigo-500">Login</a>
                        </Link>
                    </p>
                </form>
            </div>
        </section>
    );
}

export default Register;
