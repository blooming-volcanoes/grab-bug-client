/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from "next/link";
import React from "react";

function Header() {
    return (
        <header>
            <div>
                <nav>
                    {/* logo */}
                    <div>
                        <Link href="/">
                            <a>
                                <h1>brand name</h1>
                            </a>
                        </Link>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;
