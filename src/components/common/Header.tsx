/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/button-has-type */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/anchor-is-valid */
import logo from "assets/images/grabbug-logo.png";
import useAuth from "hooks/useAuth";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

// our menus
interface IMenu {
    name: String;
    path: String;
}

const menus: IMenu[] = [
    {
        name: "Documentation",
        path: "/documentation",
    },
    {
        name: "Contact Us",
        path: "/contact",
    },
    {
        name: "About Us",
        path: "/about",
    },
];

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const { user, logout } = useAuth();
    return (
        <>
            <header>
                <div className="bg-white shadow-lg">
                    <nav className="flex items-center justify-between px-4  py-4 md:mx-auto md:max-w-3xl lg:mx-auto lg:max-w-6xl">
                        {/* logo */}
                        <div className="w-36 flex-shrink-0">
                            <Link href="/">
                                <a>
                                    <Image src={logo} />
                                </a>
                            </Link>
                        </div>

                        {/* nav menus */}
                        <ul className="hidden space-x-8 text-sm font-semibold lg:inline-flex">
                            {menus.map((menu, i) => (
                                <Link key={i} href={`${menu.path}`}>
                                    <a className=" text-[18px] text-[#22577E] transition-all duration-[0.3s] ease-in hover:text-[20px]">
                                        {menu.name}
                                    </a>
                                </Link>
                            ))}
                        </ul>

                        {/* login and sign up button */}
                        {user?.user?.email ? (
                            <button onClick={logout} className="primary-btn">
                                Logout
                            </button>
                        ) : (
                            <>
                                <div className="hidden space-x-4 lg:inline-flex">
                                    <Link href="/login">
                                        <button className=" primary-btn">Login</button>
                                    </Link>
                                    <Link href="/register">
                                        <button className="btn-white">Register</button>
                                    </Link>
                                </div>
                            </>
                        )}

                        {/* hamburger menu for mobile */}
                        <div
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="z-40 flex cursor-pointer flex-col space-y-2 lg:hidden"
                        >
                            <div
                                className={`${
                                    menuOpen && "translate-y-2 rotate-45 transform "
                                }  h-[2px] w-8 rounded-lg ${
                                    menuOpen ? "bg-[#FD71AF]" : "bg-[#7b68ee]"
                                } transition-all`}
                            ></div>
                            <div
                                className={`${
                                    menuOpen && "hidden"
                                } h-[2px] w-8 rounded bg-[#7b68ee]  transition-all`}
                            ></div>
                            <div
                                className={`${
                                    menuOpen && "-translate-y-[2px] -rotate-45"
                                } h-[2px] w-8 rounded ${
                                    menuOpen ? "bg-[#FD71AF]" : "bg-[#7b68ee]"
                                } transition-all`}
                            ></div>
                        </div>

                        <ul
                            className={`
                               fixed
                                 shadow-2xl transition-all lg:hidden ${
                                     menuOpen ? "right-0" : "-right-full"
                                 } top-0 z-20 flex h-full w-full  flex-col items-center  justify-center space-y-16 bg-white px-4   text-2xl font-semibold  md:w-[450px] md:text-4xl`}
                        >
                            {menus.map((menu, i) => (
                                <Link key={i} href={`${menu.path}`}>
                                    <a
                                        onClick={() => setMenuOpen(!menuOpen)}
                                        className="block hover:text-[#FD71AF]"
                                    >
                                        {menu.name}
                                    </a>
                                </Link>
                            ))}
                            <li className="mx-auto flex w-2/6 flex-col space-y-3">
                                <Link href="/login">
                                    <button className=" primary-btn">Login</button>
                                </Link>
                                <Link href="/register">
                                    <button className="btn-white">Register</button>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    {/* mobile menus */}
                </div>
            </header>
        </>
    );
}

export default Header;
