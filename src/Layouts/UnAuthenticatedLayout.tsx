/* eslint-disable react/require-default-props */
/* eslint-disable no-unused-vars */
import Header from "components/common/Header";
import Head from "next/head";
import React from "react";

function UnAuthenticatedLayout({ children, title }: { children: React.ReactNode; title?: string }) {
    return (
        <section>
            <Head>
                <title>{title}</title>
            </Head>
            <Header />
            <div>{children}</div>
        </section>
    );
}

export default UnAuthenticatedLayout;
