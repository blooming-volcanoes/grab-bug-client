import Head from "next/head";
import React from "react";
import { IpageInterface } from "types/PageLayout";
import Footer from "./common/Footer";
import Header from "./common/Header";

function Layout({ children, title }: IpageInterface) {
    return (
        <div>
            <Head>
                <title>{title}</title>
            </Head>

            <Header />
            <div>{children}</div>
            <Footer />
        </div>
    );
}

export default Layout;
