import Head from "next/head";
import React from "react";
import { IpageInterface } from "types/PageLayout";

function Layout({ children, title }: IpageInterface) {
    return (
        <div>
            <Head>
                <title>{title}</title>
            </Head>

            <div>{children}</div>
        </div>
    );
}

export default Layout;
