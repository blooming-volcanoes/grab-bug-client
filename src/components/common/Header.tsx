/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/button-has-type */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/anchor-is-valid */
import logo from "assets/images/logo.svg";
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
        name: "Product",
        path: "/product",
    },
    {
        name: "Learn",
        path: "/learn",
    },
    {
        name: "Pricing",
        path: "/pricing",
    },
    {
        name: "Contact Sales",
        path: "/sales",
    },
];

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    console.log(menuOpen);
    return (
        <>
            <header>
                <div className="bg-white shadow">
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
                                    <a>{menu.name}</a>
                                </Link>
                            ))}
                        </ul>

                        {/* login and sign up button */}
                        <div className="hidden space-x-4 lg:inline-flex">
                            <button className=" primary-btn">Login</button>
                            <button className="btn-white">Register</button>
                        </div>

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
                                <button className="primary-btn w-full">Login</button>
                                <button className="btn-white w-full">Register</button>
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
